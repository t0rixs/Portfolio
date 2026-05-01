import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import ReactMarkdown from "react-markdown";
import { Content } from "./Contents";

const markdownFiles = import.meta.glob('../detail_contents/*.md', { query: '?raw', import: 'default' });
const customComponents = import.meta.glob('../detail_contents/*.tsx', { eager: true }) as Record<string, { default: ComponentType<{ work: Content }> }>;

function resolveCustomComponent(id: string): ComponentType<{ work: Content }> | null {
    const path = `../detail_contents/${id}.tsx`;
    return customComponents[path]?.default ?? null;
}

export default function Details({ work, variant = "popup" }: { work: Content; variant?: "popup" | "page" }) {
    const [markdownContent, setMarkdownContent] = useState<string>("");
    const CustomComponent = resolveCustomComponent(work.id);

    useEffect(() => {
        if (CustomComponent) return;
        const loadMarkdown = async () => {
            const path = `../detail_contents/${work.id}.md`;
            if (path in markdownFiles) {
                try {
                    const content = await markdownFiles[path]() as string;
                    setMarkdownContent(content);
                } catch (error) {
                    console.error(error);
                    setMarkdownContent("コンテンツの読み込みに失敗しました。");
                }
            } else {
                setMarkdownContent("");
            }
        };
        loadMarkdown();
    }, [work]);

    const isPage = variant === "page";

    // ----- Page variant: 普通の記事レイアウト (popup chrome なし) -----
    if (isPage) {
        return (
            <article style={{ color: "#e0e0e0", width: "100%" }}>
                {work.img && (
                    <div
                        style={{
                            width: "100%",
                            height: "clamp(220px, 38vh, 420px)",
                            overflow: "hidden",
                            borderRadius: 12,
                            marginBottom: "2rem",
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
                                filter: work.img_brt ? `brightness(${work.img_brt})` : "none",
                            }}
                        />
                    </div>
                )}

                <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", margin: "0 0 0.8rem", color: "#fff", lineHeight: 1.2 }}>
                    {work.title}
                </h1>
                <p style={{ fontSize: "1.05rem", color: "#aaa", margin: "0 0 2.5rem", lineHeight: 1.7 }}>
                    {work.description}
                </p>

                {CustomComponent ? (
                    <CustomComponent work={work} />
                ) : markdownContent ? (
                    <div className="markdown-content" style={{ lineHeight: 1.8 }}>
                        <ReactMarkdown
                            components={{
                                h1: ({ children }) => <h2 style={{ fontSize: "1.6rem", marginTop: "2rem", marginBottom: "1rem", color: "#fff" }}>{children}</h2>,
                                h2: ({ children }) => <h3 style={{ fontSize: "1.3rem", marginTop: "1.5rem", marginBottom: "0.8rem", color: "#ddd" }}>{children}</h3>,
                                p: ({ children }) => <p style={{ marginBottom: "1rem" }}>{children}</p>,
                                ul: ({ children }) => <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem" }}>{children}</ul>,
                                li: ({ children }) => <li style={{ marginBottom: "0.5rem" }}>{children}</li>,
                                blockquote: ({ children }) => <blockquote style={{ borderLeft: "4px solid #666", paddingLeft: "1rem", color: "#888", fontStyle: "italic", margin: "1rem 0" }}>{children}</blockquote>,
                                a: ({ href, children }) => <a href={href} style={{ color: "#646cff", textDecoration: "underline" }} target="_blank" rel="noopener noreferrer">{children}</a>,
                                img: ({ src, alt }) => {
                                    if (src?.endsWith(".mov") || src?.endsWith(".mp4")) {
                                        return (
                                            <video controls width="100%" style={{ borderRadius: 8, marginTop: "1rem" }}>
                                                <source src={src} type="video/mp4" />
                                                {alt}
                                            </video>
                                        );
                                    }
                                    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/;
                                    const match = src?.match(youtubeRegex);
                                    if (match) {
                                        const videoId = match[4];
                                        return (
                                            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", maxWidth: "100%", borderRadius: 8, marginTop: "1rem", marginBottom: "1rem" }}>
                                                <iframe
                                                    src={`https://www.youtube.com/embed/${videoId}`}
                                                    title={alt || "YouTube video player"}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                                                />
                                            </div>
                                        );
                                    }
                                    return <img src={src} alt={alt} style={{ maxWidth: "100%", height: "auto", borderRadius: 8 }} />;
                                },
                            }}
                        >
                            {markdownContent}
                        </ReactMarkdown>
                    </div>
                ) : (
                    <div style={{ padding: "2rem", textAlign: "center", color: "#666", border: "1px dashed #444", borderRadius: 8 }}>
                        準備中です...
                    </div>
                )}

                {work.url && (
                    <div style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid #333", display: "flex", justifyContent: "flex-end" }}>
                        <a
                            href={work.url}
                            target="_blank"
                            rel="noreferrer"
                            style={{ padding: "0.8rem 1.5rem", backgroundColor: "#333", color: "white", borderRadius: 4, textDecoration: "none", fontWeight: "bold" }}
                        >
                            View on {work.url_type}
                        </a>
                    </div>
                )}
            </article>
        );
    }

    // ----- Popup variant (従来通り) -----
    return (
        <div style={{
            backgroundColor: "#1a1a1a",
            padding: 0,
            borderRadius: 12,
            maxWidth: 800,
            width: "90vw",
            maxHeight: "90vh",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            color: "#e0e0e0",
            position: "relative",
            boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
        }}>
            <div style={{ flex: 1, overflowY: "auto", padding: "2rem" }}>
                {work.img && (
                    <div style={{ width: "100%", height: 250, overflow: "hidden", borderRadius: 8, marginBottom: "1.5rem" }}>
                        <img src={work.img} alt={work.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: work.img_pos || "center", filter: work.img_brt ? `brightness(${work.img_brt})` : "none" }} />
                    </div>
                )}
                <h1 style={{ fontSize: "2rem", marginBottom: "1rem", borderBottom: "1px solid #333", paddingBottom: "0.5rem", color: "#fff" }}>{work.title}</h1>
                <p style={{ fontSize: "1.1rem", color: "#aaa", marginBottom: "2rem" }}>{work.description}</p>
                {CustomComponent ? (
                    <CustomComponent work={work} />
                ) : markdownContent ? (
                    <div className="markdown-content" style={{ lineHeight: "1.8" }}>
                        <ReactMarkdown>{markdownContent}</ReactMarkdown>
                    </div>
                ) : (
                    <div style={{ padding: "2rem", textAlign: "center", color: "#666", border: "1px dashed #444", borderRadius: 8 }}>準備中です...</div>
                )}
            </div>
            {work.url && (
                <div style={{ padding: "1.5rem 2rem", display: "flex", justifyContent: "flex-end", borderTop: "1px solid #333", backgroundColor: "#1a1a1a" }}>
                    <a href={work.url} target="_blank" rel="noreferrer" style={{ padding: "0.8rem 1.5rem", backgroundColor: "#333", color: "white", borderRadius: 4, textDecoration: "none", fontWeight: "bold" }}>
                        View on {work.url_type}
                    </a>
                </div>
            )}
        </div>
    );
}
