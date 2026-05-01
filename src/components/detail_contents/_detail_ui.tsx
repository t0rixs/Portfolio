import type { CSSProperties, ReactNode } from "react";

export const palette = {
    text: "#e0e0e0",
    sub: "#aaa",
    muted: "#888",
    border: "#333",
    accent: "#646cff",
    card: "#222",
    cardBorder: "#2e2e2e",
    pillBg: "#2a2a2a",
};

const BASE = import.meta.env.BASE_URL;

/** macOS のファイル名は NFD で保存されているため URL も NFD に揃える */
function pdfUrl(file: string) {
    return `${BASE}contents/${encodeURIComponent(file.normalize("NFD"))}`;
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
    return (
        <section style={{ marginTop: "2rem" }}>
            <h2
                style={{
                    fontSize: "1.4rem",
                    color: "#fff",
                    borderLeft: `3px solid ${palette.accent}`,
                    paddingLeft: "0.6rem",
                    marginBottom: "1rem",
                }}
            >
                {title}
            </h2>
            {children}
        </section>
    );
}

export function Stat({ value, label }: { value: string; label: string }) {
    return (
        <div
            style={{
                background: palette.card,
                border: `1px solid ${palette.cardBorder}`,
                borderRadius: 8,
                padding: "0.9rem 1rem",
                minWidth: 120,
                flex: "1 1 140px",
            }}
        >
            <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "#fff" }}>{value}</div>
            <div style={{ fontSize: "0.8rem", color: palette.sub, marginTop: 2 }}>{label}</div>
        </div>
    );
}

export function Pill({ children }: { children: ReactNode }) {
    return (
        <span
            style={{
                display: "inline-block",
                background: palette.pillBg,
                color: palette.sub,
                border: `1px solid ${palette.cardBorder}`,
                borderRadius: 999,
                padding: "0.15rem 0.6rem",
                fontSize: "0.75rem",
                marginRight: 6,
                marginBottom: 6,
            }}
        >
            {children}
        </span>
    );
}

export function PdfLink({ file, label }: { file: string; label: string }) {
    return (
        <a
            href={pdfUrl(file)}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                display: "inline-block",
                marginTop: 8,
                marginRight: 8,
                padding: "0.4rem 0.8rem",
                background: "#2a2a2a",
                border: `1px solid ${palette.cardBorder}`,
                borderRadius: 6,
                color: palette.accent,
                textDecoration: "none",
                fontSize: "0.85rem",
            }}
        >
            📄 {label}
        </a>
    );
}

/** PDF をその場でプレビュー表示する（クリックで新規タブにて拡大表示） */
export function PdfPreview({
    file,
    label,
    caption,
    aspect = "16 / 9",
    height,
    page,
}: {
    file: string;
    label: string;
    caption?: ReactNode;
    /** スライドのアスペクト比 (CSS aspect-ratio)。省略時 16/9 */
    aspect?: string;
    /** 明示的に高さを指定したい場合のみ。指定すると aspect は無視される。 */
    height?: number | string;
    /** 開いた瞬間に表示するページ（1-based） */
    page?: number;
}) {
    const url = pdfUrl(file);
    const hashParams = [
        page ? `page=${page}` : null,
        "toolbar=0",
        "navpanes=0",
        "view=FitH",
    ].filter(Boolean).join("&");
    const iframeSrc = `${url}#${hashParams}`;
    const openSrc = page ? `${url}#page=${page}` : url;

    const useFixedHeight = height !== undefined;
    const containerStyle: CSSProperties = useFixedHeight
        ? {
            position: "relative",
            background: "#111",
            border: `1px solid ${palette.cardBorder}`,
            borderRadius: 8,
            overflow: "hidden",
        }
        : {
            position: "relative",
            background: "#111",
            border: `1px solid ${palette.cardBorder}`,
            borderRadius: 8,
            overflow: "hidden",
            aspectRatio: aspect,
            width: "100%",
        };

    return (
        <figure style={{ margin: "1.2rem 0", padding: 0 }}>
            <div style={containerStyle}>
                <iframe
                    key={iframeSrc}
                    src={iframeSrc}
                    title={label}
                    scrolling={page ? "no" : "auto"}
                    style={{
                        width: "100%",
                        height: useFixedHeight
                            ? typeof height === "number"
                                ? `${height}px`
                                : height
                            : "100%",
                        border: 0,
                        display: "block",
                        background: "#1a1a1a",
                        // ページ指定時はスクロール/操作を無効化して該当ページに固定
                        pointerEvents: page ? "none" : "auto",
                    }}
                />
                <a
                    href={openSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        padding: "0.3rem 0.7rem",
                        background: "rgba(0,0,0,0.65)",
                        backdropFilter: "blur(6px)",
                        color: "#fff",
                        textDecoration: "none",
                        borderRadius: 6,
                        fontSize: "0.75rem",
                        border: "1px solid rgba(255,255,255,0.2)",
                    }}
                >
                    新規タブで開く ↗
                </a>
            </div>
            <figcaption
                style={{
                    fontSize: "0.8rem",
                    color: palette.muted,
                    marginTop: 6,
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 12,
                    flexWrap: "wrap",
                }}
            >
                <span>📄 {label}{page ? ` ─ p.${page}` : ""}</span>
                {caption && <span style={{ color: palette.sub }}>{caption}</span>}
            </figcaption>
        </figure>
    );
}

export function Labeled({ label, children }: { label: string; children: ReactNode }) {
    return (
        <div style={{ marginBottom: "1rem" }}>
            <div style={{ color: palette.muted, fontSize: "0.8rem", marginBottom: 4 }}>{label}</div>
            <div>{children}</div>
        </div>
    );
}
