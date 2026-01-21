import { SimplexNoise } from '@paper-design/shaders-react';
import { useEffect, useState } from 'react';

export interface BackgroundConfig {
    colors: string[];
    stepsPerColor: number;
    softness: number;
    speed: number;
}

export default function Background() {
    const [dimensions, setDimensions] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 1000,
        height: typeof window !== 'undefined' ? window.innerHeight : 1000
    });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        // Add listener
        window.addEventListener('resize', handleResize);

        // Initial set to ensure correct size after mount (sometimes needed if scrollbars appear/disappear)
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -1,
            pointerEvents: 'none',
            overflow: 'hidden'
        }}>
            <SimplexNoise
                width={dimensions.width}
                height={dimensions.height}
                colors={["#23233e", "#000000"]}
                stepsPerColor={10}
                softness={0}
                speed={0.12}
                scale={1.04}
            />
        </div>
    );
}