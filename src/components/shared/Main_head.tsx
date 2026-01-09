import type { JSX } from "react";
import { motion } from "framer-motion";
interface Props {
    who: string;
    onArrowClick?: () => void;
    description: JSX.Element;
}
export default function Main_head({ who, onArrowClick, description }: Props) {
    return (
        <motion.main initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }}>
            <section id="about" style={{ marginBottom: '6rem', position: 'relative', height: '150px', scrollMarginTop: 'var(--nav-height)' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>
                            私の<span style={{ color: 'var(--text-secondary)' }}>{who}</span>
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
                            {description}
                        </p>
                    </div>

                    {onArrowClick && <div style={{ alignItems: 'center', display: 'flex', width: '60px', justifyContent: 'end', cursor: 'pointer' }} onClick={onArrowClick}>
                        <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }} >→</p>
                    </div>}
                </div>
            </section>
        </motion.main>
    )

}