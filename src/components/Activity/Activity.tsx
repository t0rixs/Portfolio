import Acts from "./Acts";
import { motion } from "framer-motion";
import RotateThings from "../shared/RotateThings";

export default function Activity() {
    return (
        <motion.main
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="container"
            style={{
                flex: 1,
                minHeight: "calc(100vh - var(--nav-height))",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxSizing: "border-box",
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

            {/* メイン：見出し + スロットマシン */}
            <section style={{ position: "relative", zIndex: 1 }}>
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "0.4rem",
                        padding: "0 1rem",
                    }}
                >
                    <h1
                        style={{
                            margin: 0,
                            fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)",
                            fontWeight: 700,
                            letterSpacing: "0.04em",
                            color: "#fff",
                        }}
                    >
                        Activities
                    </h1>
                    <p
                        style={{
                            margin: "0.3rem 0 0",
                            fontSize: "0.85rem",
                            color: "var(--text-secondary)",
                            letterSpacing: "0.05em",
                        }}
                    >
                        私が学外で取り組んできた活動 ─ 矢印 / スワイプ / インジケータで切替、カードクリックで詳細へ
                    </p>
                </div>
                <Acts />
            </section>
        </motion.main>
    );
}
