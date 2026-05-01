import { Link } from "react-router-dom";
import { palette } from "./_detail_ui";
import { getTapazNeighbors } from "./_tapaz_series";

export default function TapazSeriesNav({ currentId }: { currentId: string }) {
    const { prev, next } = getTapazNeighbors(currentId);

    const linkStyle = (accent: string): React.CSSProperties => ({
        flex: 1,
        display: "block",
        background: palette.card,
        border: `1px solid ${palette.cardBorder}`,
        borderRadius: 10,
        padding: "1rem 1.2rem",
        color: palette.text,
        textDecoration: "none",
        transition: "border-color 0.2s, transform 0.2s",
        borderTop: `3px solid ${accent}`,
    });

    return (
        <div style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: `1px solid ${palette.border}` }}>
            <div style={{ color: palette.muted, fontSize: "0.8rem", marginBottom: "0.8rem", letterSpacing: "0.08em" }}>
                TAPAZ シリーズ
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: 240 }}>
                    {prev ? (
                        <Link
                            to={`/works/${prev.id}`}
                            style={linkStyle(prev.accent)}
                            onMouseOver={(e) => (e.currentTarget.style.transform = "translateX(-4px)")}
                            onMouseOut={(e) => (e.currentTarget.style.transform = "translateX(0)")}
                        >
                            <div style={{ fontSize: "0.75rem", color: palette.muted, marginBottom: 4 }}>
                                ← {prev.chapter} 前のWS
                            </div>
                            <div style={{ fontSize: "1rem", color: "#fff", fontWeight: 600 }}>{prev.title}</div>
                            <div style={{ fontSize: "0.85rem", color: palette.sub, marginTop: 4 }}>{prev.subtitle}</div>
                        </Link>
                    ) : (
                        <Link
                            to={`/works/tapaz`}
                            style={linkStyle(palette.muted)}
                            onMouseOver={(e) => (e.currentTarget.style.transform = "translateX(-4px)")}
                            onMouseOut={(e) => (e.currentTarget.style.transform = "translateX(0)")}
                        >
                            <div style={{ fontSize: "0.75rem", color: palette.muted, marginBottom: 4 }}>
                                ← Overview
                            </div>
                            <div style={{ fontSize: "1rem", color: "#fff", fontWeight: 600 }}>Tapaz 全体ページに戻る</div>
                        </Link>
                    )}
                </div>
                <div style={{ flex: 1, minWidth: 240 }}>
                    {next ? (
                        <Link
                            to={`/works/${next.id}`}
                            style={{ ...linkStyle(next.accent), textAlign: "right" }}
                            onMouseOver={(e) => (e.currentTarget.style.transform = "translateX(4px)")}
                            onMouseOut={(e) => (e.currentTarget.style.transform = "translateX(0)")}
                        >
                            <div style={{ fontSize: "0.75rem", color: palette.muted, marginBottom: 4 }}>
                                {next.chapter} 次のWS →
                            </div>
                            <div style={{ fontSize: "1rem", color: "#fff", fontWeight: 600 }}>{next.title}</div>
                            <div style={{ fontSize: "0.85rem", color: palette.sub, marginTop: 4 }}>{next.subtitle}</div>
                        </Link>
                    ) : (
                        <Link
                            to={`/works/tapaz`}
                            style={{ ...linkStyle(palette.muted), textAlign: "right" }}
                            onMouseOver={(e) => (e.currentTarget.style.transform = "translateX(4px)")}
                            onMouseOut={(e) => (e.currentTarget.style.transform = "translateX(0)")}
                        >
                            <div style={{ fontSize: "0.75rem", color: palette.muted, marginBottom: 4 }}>
                                Overview →
                            </div>
                            <div style={{ fontSize: "1rem", color: "#fff", fontWeight: 600 }}>Tapaz 全体ページへ</div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
