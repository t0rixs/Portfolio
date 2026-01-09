import { useEffect, useRef } from "react";
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
export default function Theme_ico({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    const viewerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = viewerRef.current;
        if (!container) return;

        // scene
        const scene = new THREE.Scene();

        // camera
        const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 5000);
        camera.position.set(0, 0, 120);

        // renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        // light
        scene.add(new THREE.AmbientLight(0xffffff, 0));
        const light = new THREE.DirectionalLight(0xffffff, 100);
        light.position.set(100, 100, 100);
        scene.add(light);

        // resize
        const resize = () => {
            const w = container.clientWidth;
            const h = container.clientHeight;
            renderer.setSize(w, h, false);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
        };
        resize();
        window.addEventListener("resize", resize);

        // load STL (asset)
        const loader = new STLLoader();
        loader.load(
            `${import.meta.env.BASE_URL}models/tech_symbol.stl`,
            (geometry) => {
                geometry.center();
                geometry.computeVertexNormals();

                const mesh = new THREE.Mesh(
                    geometry,
                    new THREE.MeshStandardMaterial({
                        color: 0x888888,
                        roughness: 0.6,
                        metalness: 0.2,
                    })
                );
                mesh.lookAt(new THREE.Vector3(0, 90, 0));

                geometry.computeBoundingBox();
                const box = geometry.boundingBox!;
                const size = new THREE.Vector3();
                box.getSize(size);
                const maxDim = Math.max(size.x, size.y, size.z);

                const target = 80; // 画面内に収めたい大きさ
                const s = target / maxDim;
                mesh.scale.setScalar(s);
                scene.add(mesh);
            }
        );

        // render loop
        let raf = 0;
        const animate = () => {
            raf = requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
            renderer.dispose();
            if (renderer.domElement.parentElement === container) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div
            style={{
                position: "relative",
                padding: "2rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                background: "rgba(255, 255, 255, 0.02)",
                width: "400px",
                height: "400px",
            }}
        >
            <div style={{ display: "flex", position: "absolute", top: 0, left: 0, alignItems: "center", gap: "1rem" }}>

                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{title}</h3>
                <p style={{ opacity: 0.8 }}>{description}</p>
            </div>

            <div
                ref={viewerRef}
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "12px", overflow: "hidden", background: "rgba(255, 255, 255, 0.02)" }}
            />
        </div>

    );
}
