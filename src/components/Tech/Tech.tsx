import WorkMenu from "./WorkMenu";
import Works from "./Works";
import { useState } from "react";
import { motion } from "framer-motion";
import { Content } from "../shared/Contents";
import Detail from "../shared/Details";
import { useNavigate } from "react-router-dom";
import RotateThings from "../shared/RotateThings";


export default function Tech() {
    const navigate = useNavigate();
    const worktype = ["All", "Web", "Native", "Others"];
    const [selected_worktype, setWorksType] = useState(worktype[0]);
    const [detailWork, setDetailWork] = useState<Content | null>(null);

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
                <div style={{ marginBottom: '4rem' }}>
                    <h1 style={{ textAlign: 'start', marginBottom: '1rem' }}>Tech Stack</h1>
                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '1rem' }}>
                        <img src="https://skillicons.dev/icons?i=flutter,react" alt="Tech icons" style={{ margin: '0 1rem' }} />
                        <img src="https://skillicons.dev/icons?i=c,html,css,js,typescript,dart" alt="Tech icons" />
                    </div>
                </div >
                <section id="works" style={{ scrollMarginTop: 'var(--nav-height)' }}>
                    <WorkMenu worktype={worktype} setWorksType={setWorksType} selected_worktype={selected_worktype} />
                    <div style={{ display: 'grid', gap: '2rem' }}>
                        <Works worktype={selected_worktype} setDetailWork={setDetailWork} />
                    </div>
                </section>
            </motion.main>
            {
                detailWork && (
                    <section className="detail" onClick={() => setDetailWork(null)} style={{ scrollMarginTop: 'var(--nav-height)' }}>
                        <div onClick={(e) => e.stopPropagation()}>
                            <Detail work={detailWork} />
                        </div>
                    </section>
                )
            }
        </>
    )
}
