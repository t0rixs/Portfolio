import { useEffect, useRef } from "react";
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";

interface Props {
    id: string;
    style?: React.CSSProperties;
    className?: string;
}

export default function RotateThings({ id, style, className }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let isMounted = true;
        let raf = 0;
        let renderer: THREE.WebGLRenderer | null = null;
        let scene: THREE.Scene | null = null;

        // scene
        scene = new THREE.Scene();

        // camera
        const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 5000);
        camera.position.set(0, 0, 120);

        // renderer
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        // light
        scene.add(new THREE.AmbientLight(0xffffff, 0.5));
        const light = new THREE.DirectionalLight(0xffffff, 2);
        light.position.set(100, 100, 100);
        scene.add(light);

        // resize
        const resize = () => {
            if (!container || !renderer) return;
            const w = container.clientWidth;
            const h = container.clientHeight;
            renderer.setSize(w, h, false);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
        };
        resize();
        window.addEventListener("resize", resize);

        // mesh reference for rotation
        let modelMesh: THREE.Mesh | null = null;

        // load STL (asset)
        const loader = new STLLoader();
        loader.load(
            `${import.meta.env.BASE_URL}models/${id}_symbol.stl`,
            (geometry) => {
                if (!isMounted || !scene) {
                    geometry.dispose();
                    return;
                }
                geometry.center();
                geometry.computeVertexNormals();

                const mesh = new THREE.Mesh(
                    geometry,
                    new THREE.MeshStandardMaterial({
                        color: 0xcccccc,
                        roughness: 0.4,
                        metalness: 0.6,
                    })
                );
                // Rotate to face camera better initially if needed
                mesh.rotation.x = -Math.PI / 2;

                geometry.computeBoundingBox();
                const box = geometry.boundingBox!;
                const size = new THREE.Vector3();
                box.getSize(size);
                const maxDim = Math.max(size.x, size.y, size.z);

                const target = 80; // Slightly larger target size
                const s = target / maxDim;
                mesh.scale.setScalar(s);

                scene.add(mesh);
                modelMesh = mesh;
            }
        );

        // render loop
        const animate = () => {
            raf = requestAnimationFrame(animate);
            if (modelMesh) {
                modelMesh.rotation.z += 0.005; // Rotate around Z axis (since we rotated X)
            }
            if (renderer && scene) {
                renderer.render(scene, camera);
            }
        };
        animate();

        return () => {
            isMounted = false;
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);

            if (scene) {
                scene.traverse((object) => {
                    if (object instanceof THREE.Mesh) {
                        if (object.geometry) object.geometry.dispose();
                        if (object.material) {
                            if (Array.isArray(object.material)) {
                                object.material.forEach((m) => m.dispose());
                            } else {
                                object.material.dispose();
                            }
                        }
                    }
                });
            }

            if (renderer) {
                renderer.dispose();
                renderer.forceContextLoss();
                if (renderer.domElement && renderer.domElement.parentElement === container) {
                    container.removeChild(renderer.domElement);
                }
                renderer = null;
            }
        };
    }, [id]);

    return <div ref={containerRef} style={style} className={className} />;
}