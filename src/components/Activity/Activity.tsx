import Acts from "./Acts";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import RotateThings from "../shared/RotateThings";

export default function Activity() {
    const navigate = useNavigate();

    return (
        <motion.main
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="container"
            style={{
                flex: 1,
                paddingTop: "1.5rem",
                paddingBottom: "4rem",
                position: "relative",
            }}
        >
            {/* 背景装飾：ページ全体に薄く */}
            <RotateThings
                id="activity"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                    opacity: 0.18,
                    pointerEvents: "none",
                }}
            />

            {/* 極薄ヘッダー：ブランド + 別ページ導線のみ */}
            <header
                style={{
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingBottom: "1.5rem",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    marginBottom: "1.5rem",
                }}
            >
                <img
                    src={`${import.meta.env.BASE_URL}img/logo/MIYANO_Works_WH.svg`}
                    alt="MIYANO Works"
                    style={{ height: "calc(var(--nav-height) / 3.5)", objectFit: "contain" }}
                />
                <div
                    className="anim-hover-16 hide-below-528"
                    style={{
                        cursor: "pointer",
                        fontSize: "0.95rem",
                        color: "var(--text-secondary)",
                        letterSpacing: "0.08em",
                    }}
                    onClick={() => navigate("/tech")}
                >
                    開発頁 <span>→</span>
                </div>
            </header>

            {/* メイン：スロットマシンが主役 */}
            <section style={{ position: "relative", zIndex: 1, scrollMarginTop: "var(--nav-height)" }}>
                <Acts />

                {/* スロット直下の控えめキャプション */}
                <p
                    style={{
                        textAlign: "center",
                        marginTop: "1.6rem",
                        fontSize: "0.85rem",
                        color: "var(--text-secondary)",
                        opacity: 0.75,
                        letterSpacing: "0.05em",
                        lineHeight: 1.7,
                    }}
                >
                    私が取り組んだ活動を紹介します ─ スクロール／矢印で切替
                </p>
            </section>
        </motion.main>
    );
}
