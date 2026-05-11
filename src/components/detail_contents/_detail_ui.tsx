import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

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

/**
 * PDF.js を使い PDF を canvas に直接描画する真のインライン表示。
 * ブラウザのPDFビューワー設定（ダウンロード強制、拡張機能の干渉）に左右されない。
 * 大容量PDFでも確実にページ単位で描画できる。
 */
export function PdfCanvasPreview({
    file,
    label,
    caption,
    maxPages,
    aspect = "16 / 9",
}: {
    file: string;
    label: string;
    caption?: ReactNode;
    /** 描画するページ数の上限。省略時は全ページ */
    maxPages?: number;
    /** 表示枠のアスペクト比（スライド1枚分の見え）。省略時 16/9 */
    aspect?: string;
}) {
    const url = pdfUrl(file);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
    const [progress, setProgress] = useState<{ loaded: number; total: number } | null>(null);
    const [pageCount, setPageCount] = useState(0);
    const [errorMsg, setErrorMsg] = useState<string>("");

    useEffect(() => {
        let cancelled = false;
        const container = containerRef.current;
        if (!container) return;
        container.innerHTML = "";

        const task = pdfjsLib.getDocument({ url });
        task.onProgress = (p: { loaded: number; total: number }) => {
            if (!cancelled) setProgress(p);
        };

        (async () => {
            try {
                const pdf = await task.promise;
                if (cancelled) return;
                const total = maxPages ? Math.min(maxPages, pdf.numPages) : pdf.numPages;
                setPageCount(pdf.numPages);

                const dpr = Math.min(window.devicePixelRatio || 1, 2);
                const containerWidth = container.clientWidth || 800;

                for (let i = 1; i <= total; i++) {
                    if (cancelled) return;
                    const page = await pdf.getPage(i);
                    const viewport0 = page.getViewport({ scale: 1 });
                    const scale = (containerWidth / viewport0.width) * dpr;
                    const viewport = page.getViewport({ scale });

                    const canvas = document.createElement("canvas");
                    canvas.width = Math.floor(viewport.width);
                    canvas.height = Math.floor(viewport.height);
                    canvas.style.width = "100%";
                    canvas.style.height = "auto";
                    canvas.style.display = "block";
                    canvas.style.background = "#fff";
                    canvas.style.marginBottom = "8px";
                    canvas.style.borderRadius = "4px";

                    const ctx = canvas.getContext("2d");
                    if (!ctx) continue;
                    container.appendChild(canvas);
                    await page.render({ canvasContext: ctx, viewport }).promise;
                }
                if (!cancelled) setStatus("ready");
            } catch (e: unknown) {
                if (!cancelled) {
                    setStatus("error");
                    setErrorMsg(e instanceof Error ? e.message : String(e));
                }
            }
        })();

        return () => {
            cancelled = true;
            task.destroy();
        };
    }, [url, maxPages]);

    return (
        <figure style={{ margin: "1.2rem 0", padding: 0 }}>
            <div
                style={{
                    position: "relative",
                    background: "#111",
                    border: `1px solid ${palette.cardBorder}`,
                    borderRadius: 8,
                    overflow: "hidden",
                    aspectRatio: aspect,
                    width: "100%",
                }}
            >
                <div
                    ref={containerRef}
                    style={{
                        position: "absolute",
                        inset: 0,
                        overflowY: "auto",
                        overflowX: "hidden",
                        padding: 8,
                        scrollbarWidth: "thin",
                    }}
                />
                {status === "loading" && (
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: palette.sub,
                            fontSize: "0.85rem",
                            pointerEvents: "none",
                        }}
                    >
                        PDF読み込み中…
                        {progress && progress.total > 0
                            ? ` ${Math.round((progress.loaded / progress.total) * 100)}%`
                            : ""}
                    </div>
                )}
                {status === "error" && (
                    <div style={{ color: "#ff7676", fontSize: "0.85rem", padding: "1rem" }}>
                        PDFの読み込みに失敗しました: {errorMsg}
                    </div>
                )}
                <a
                    href={url}
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
                        zIndex: 2,
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
                <span>📄 {label}{pageCount ? ` ─ 全${pageCount}ページ（枠内をスクロール）` : ""}</span>
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
