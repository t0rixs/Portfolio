import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { contents } from "./Contents";
import { FadeInFromRight } from "./components";

const MAIN_ACTIVITY_IDS = new Set([
    "tapaz",
    "tapaz_funeral",
    "tapaz_sharehouse",
    "tapaz_sudachi",
    "dcon",
    "dcon_kigyouka",
    "handy",
]);

export default function OthersPage() {
    const navigate = useNavigate();

    const works = contents.filter(
        (c) => c.location === "Activity" && !MAIN_ACTIVITY_IDS.has(c.id),
    );

    return (
        <motion.main
            className="container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            style={{ flex: 1, paddingTop: "5rem", paddingBottom: "4rem" }}
        >
            <button
                onClick={() => navigate("/act")}
                style={{
                    marginBottom: "1.5rem",
                    padding: "0.5rem 0.9rem",
                    background: "transparent",
                    color: "#ddd",
                    border: "1px solid #444",
                    borderRadius: 6,
                    cursor: "pointer",
                    fontSize: "0.9rem",
                }}
            >
                ← 戻る
            </button>

            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", margin: "0 0 0.6rem", color: "#fff" }}>
                その他の活動
            </h1>
            <p style={{ color: "#aaa", marginBottom: "2.5rem" }}>
                Tapaz / DCON / handy 以外の Activity 系の取り組み一覧。
            </p>

            <div style={{ display: "grid", gap: "2rem" }}>
                {works.map((work) => (
                    <FadeInFromRight key={work.id}>
                        <div
                            style={{ position: "relative", height: 150, backdropFilter: "blur(10px)", cursor: "pointer" }}
                            onClick={(e) => {
                                if ((e.metaKey || e.ctrlKey) && work.url) window.open(work.url, "_blank");
                                else navigate(`/works/${work.id}`);
                            }}
                        >
                            <div
                                style={{
                                    position: "relative",
                                    paddingLeft: "2rem",
                                    paddingBottom: "1rem",
                                    border: "1px solid rgba(128,128,128,0.2)",
                                    borderRadius: 8,
                                    zIndex: 2,
                                    height: 150,
                                }}
                            >
                                <h4 style={{ marginBottom: "0.5rem", fontSize: "1.6rem" }}>{work.title}</h4>
                                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                                    {work.description}
                                </p>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    right: 0,
                                    width: "60%",
                                    height: "100%",
                                    justifyContent: "right",
                                    zIndex: 0,
                                    overflow: "hidden",
                                    borderRadius: 8,
                                }}
                            >
                                <img
                                    src={work.img}
                                    alt={work.title}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        objectPosition: work.img_pos || "center",
                                        borderRadius: 8,
                                        filter: `brightness(${work.img_brt})`,
                                        maskImage: "linear-gradient(to right, transparent, black)",
                                        WebkitMaskImage: "linear-gradient(to right, transparent, black)",
                                    }}
                                />
                            </div>
                        </div>
                    </FadeInFromRight>
                ))}
            </div>
        </motion.main>
    );
}
