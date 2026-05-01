import WorkMenu from "./WorkMenu";
import Works from "./Works";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import RotateThings from "../shared/RotateThings";


export default function Tech() {
    const navigate = useNavigate();
    const worktype = ["All", "Web", "Native", "Others"];
    const [selected_worktype, setWorksType] = useState(worktype[0]);

    return (
        <>
            <motion.main initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }} className="container" style={{ flex: 1, paddingTop: '4rem', paddingBottom: '4rem' }}>
                <section id="about" style={{ marginBottom: '6rem', position: 'relative', height: '100px', scrollMarginTop: 'var(--nav-height)' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div>
                            <img src={`${import.meta.env.BASE_URL}img/logo/MIYANO_Dev_WH.svg`} alt="" style={{ height: 'calc(var(--nav-height) /3)', objectFit: 'contain' }} />
                            <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
                                <p>私が開発したものを紹介します。<br />クリックで詳細確認ができます。<br />Cmd+クリックで新しいタブでGitHubが開きます。</p>
                            </div>
                        </div>
                        <RotateThings
                            id="tech"
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

                        <div className="anim-hover-16 hide-below-528" style={{ zIndex: 1, alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'end', cursor: 'pointer' }} onClick={() => navigate("/act")}>
                            <p style={{ fontSize: '1.5rem' }} >活動頁<span>→</span></p>
                        </div>

                    </div>
                </section>
                <div style={{ marginBottom: '4rem', flexWrap: 'wrap' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: '200', letterSpacing: '0.1em' }}>
                        <span style={{ borderBottom: '1px solid #fff', paddingBottom: '0.5rem' }}>Tech Stack</span>
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '1rem', maxWidth: '100%', height: 'auto', flexWrap: 'wrap' }}>
                        <img src="https://skillicons.dev/icons?i=flutter" alt="Tech icons" style={{ marginRight: '0.2rem' }} />
                        <img src="https://skillicons.dev/icons?i=react" alt="Tech icons" style={{ marginRight: '0.4rem' }} />
                        <img src="https://skillicons.dev/icons?i=c" alt="Tech icons" style={{ marginRight: '0.2rem' }} />
                        <img src="https://skillicons.dev/icons?i=html" alt="Tech icons" style={{ marginRight: '0.2rem' }} />
                        <img src="https://skillicons.dev/icons?i=css" alt="Tech icons" style={{ marginRight: '0.2rem' }} />
                        <img src="https://skillicons.dev/icons?i=js" alt="Tech icons" style={{ marginRight: '0.2rem' }} />
                        <img src="https://skillicons.dev/icons?i=typescript" alt="Tech icons" style={{ marginRight: '0.2rem' }} />
                        <img src="https://skillicons.dev/icons?i=dart" alt="Tech icons" style={{ marginRight: '0.2rem' }} />
                    </div>

                </div >
                <section id="works" style={{ scrollMarginTop: 'var(--nav-height)' }}>
                    <WorkMenu worktype={worktype} setWorksType={setWorksType} selected_worktype={selected_worktype} />
                    <div style={{ display: 'grid', gap: '2rem' }}>
                        <Works worktype={selected_worktype} />
                    </div>
                </section>
            </motion.main >
        </>
    )
}
