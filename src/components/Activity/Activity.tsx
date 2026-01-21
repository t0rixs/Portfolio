import ActMenu from "./ActMenu";
import Acts from "./Acts";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Detail from "../shared/Details";
import { Content } from "../shared/Contents";
import RotateThings from "../shared/RotateThings";

export default function Activity() {
    const navigate = useNavigate();
    const acttype = ["All", "Activity", "Business"];
    const [selected_acttype, setSelected_acttype] = useState(acttype[0]);
    const setActType = (actType: string) => setSelected_acttype(actType);
    const [detailWork, setDetailWork] = useState<Content | null>(null);
    return (
        <>
            <motion.main className="container" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }} style={{ flex: 1, paddingTop: '4rem', paddingBottom: '4rem' }}>
                <section id="about" style={{ marginBottom: '6rem', position: 'relative', height: '150px', scrollMarginTop: 'var(--nav-height)' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div>
                            <img src={`${import.meta.env.BASE_URL}img/logo/MIYANO_Works_WH.svg`} alt="" style={{ height: 'calc(var(--nav-height) /3)', objectFit: 'contain' }} />
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
                                <p>ここでは私の活動を紹介します。<br />こちらでは主に活動の内容に焦点を当てます。</p>
                            </p>
                        </div>
                        <RotateThings
                            id="act"
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                zIndex: 0,
                                opacity: 0.6,
                                pointerEvents: "none",
                            }}
                        />

                        <div className="anim-hover-16 hide-below-528" style={{ zIndex: 1, alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'end', cursor: 'pointer' }} onClick={() => { navigate("/tech") }}>
                            <p style={{ fontSize: '1.5rem' }} >開発頁<span>→</span></p>
                        </div>

                    </div>
                </section>
                <section id="acts" style={{ scrollMarginTop: 'var(--nav-height)' }}>
                    <ActMenu acttype={acttype} setActType={setActType} selected_acttype={selected_acttype} />
                    <div style={{ display: 'grid', gap: '2rem' }}>
                        <Acts acttype={selected_acttype} setDetailWork={setDetailWork} />
                    </div>
                </section>
            </motion.main>
            {detailWork && (
                <section className="detail" onClick={() => setDetailWork(null)} style={{ scrollMarginTop: 'var(--nav-height)' }}>
                    <div onClick={(e) => e.stopPropagation()}>
                        <Detail work={detailWork} />
                    </div>
                </section>
            )}
        </>
    )
}