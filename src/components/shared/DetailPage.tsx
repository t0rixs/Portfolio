import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { contents } from "./Contents";
import Details from "./Details";

export default function DetailPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const work = contents.find((c) => c.id === id);
    const backTo =
        work?.location === "Activity" ? "/act" :
        work?.location === "Tech" ? "/tech" :
        null;
    const goBack = () => {
        if (backTo) navigate(backTo);
        else navigate(-1);
    };

    if (!work) {
        return (
            <main className="container" style={{ flex: 1, paddingTop: "6rem", paddingBottom: "4rem", color: "#fff" }}>
                <h1 style={{ marginBottom: "1rem" }}>Not Found</h1>
                <p style={{ color: "#aaa", marginBottom: "2rem" }}>該当するコンテンツが見つかりませんでした。</p>
                <button
                    onClick={goBack}
                    style={{ padding: "0.6rem 1rem", background: "#2a2a2a", color: "#fff", border: "1px solid #333", borderRadius: 6, cursor: "pointer" }}
                >
                    ← 戻る
                </button>
            </main>
        );
    }

    return (
        <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            style={{
                flex: 1,
                paddingTop: "5rem",
                paddingBottom: "4rem",
                paddingLeft: "var(--spacing-base)",
                paddingRight: "var(--spacing-base)",
                width: "100%",
                maxWidth: 1200,
                margin: "0 auto",
                boxSizing: "border-box",
            }}
        >
            <button
                onClick={goBack}
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
            <Details work={work} variant="page" />
        </motion.main>
    );
}
