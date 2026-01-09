import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Content } from "./Contents";

// ../detail_contents 以下の .md ファイルをすべて取得できるようにする
const markdownFiles = import.meta.glob('../detail_contents/*.md', { query: '?raw', import: 'default' });

export default function Details({ work }: { work: Content }) {
    const [markdownContent, setMarkdownContent] = useState<string>("");

    useEffect(() => {
        const loadMarkdown = async () => {
            // タイトルと一致するファイルパスを構築
            // 例: Title が "Tapaz" なら "../detail_contents/Tapaz.md"
            const path = `../detail_contents/${work.title}.md`;

            if (path in markdownFiles) {
                try {
                    const content = await markdownFiles[path]() as string;
                    setMarkdownContent(content);
                } catch (error) {
                    console.error(error);
                    setMarkdownContent("コンテンツの読み込みに失敗しました。");
                }
            } else {
                setMarkdownContent(""); // ファイルがない場合は何も表示しない（あるいは準備中メッセージ）
            }
        };

        loadMarkdown();
    }, [work]);

    return (
        <div style={{
            backgroundColor: '#1a1a1a',
            padding: '0',
            borderRadius: '12px',
            maxWidth: '800px',
            width: '90vw',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            color: '#e0e0e0',
            position: 'relative',
            boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
        }}>
            <div style={{ flex: 1, overflowY: 'auto', padding: '2rem' }}>
                {/* ヘッダー画像 */}
                {work.img && (
                    <div style={{ width: '100%', height: '250px', overflow: 'hidden', borderRadius: '8px', marginBottom: '1.5rem' }}>
                        <img
                            src={work.img}
                            alt={work.title}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: work.img_pos || 'center',
                                filter: work.img_brt ? `brightness(${work.img_brt})` : 'none'
                            }}
                        />
                    </div>
                )}

                <h1 style={{ fontSize: '2rem', marginBottom: '1rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem', color: '#fff' }}>
                    {work.title}
                </h1>

                {/* 基本説明文 */}
                <p style={{ fontSize: '1.1rem', color: '#aaa', marginBottom: '2rem' }}>
                    {work.description}
                </p>

                {/* Markdown表示エリア */}
                {markdownContent ? (
                    <div className="markdown-content" style={{ lineHeight: '1.8' }}>
                        <ReactMarkdown
                            components={{
                                h1: ({ children }) => <h2 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '1rem', color: '#fff' }}>{children}</h2>,
                                h2: ({ children }) => <h3 style={{ fontSize: '1.3rem', marginTop: '1.2rem', marginBottom: '0.8rem', color: '#ddd' }}>{children}</h3>,
                                p: ({ children }) => <p style={{ marginBottom: '1rem' }}>{children}</p>,
                                ul: ({ children }) => <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>{children}</ul>,
                                li: ({ children }) => <li style={{ marginBottom: '0.5rem' }}>{children}</li>,
                                blockquote: ({ children }) => <blockquote style={{ borderLeft: '4px solid #666', paddingLeft: '1rem', color: '#888', fontStyle: 'italic', margin: '1rem 0' }}>{children}</blockquote>,
                                a: ({ href, children }) => <a href={href} style={{ color: '#646cff', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">{children}</a>
                            }}
                        >
                            {markdownContent}
                        </ReactMarkdown>
                    </div>
                ) : (
                    <div style={{ padding: '2rem', textAlign: 'center', color: '#666', border: '1px dashed #444', borderRadius: '8px' }}>
                        MDファイル準備中です...
                    </div>
                )}
            </div>

            {/* リンクボタン */}
            {work.url && (
                <div style={{
                    padding: '1.5rem 2rem',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    borderTop: '1px solid #333',
                    backgroundColor: '#1a1a1a'
                }}>
                    <a
                        href={work.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            padding: '0.8rem 1.5rem',
                            backgroundColor: '#333',
                            color: 'white',
                            borderRadius: '4px',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            transition: 'background 0.3s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#444'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#333'}
                    >
                        View on {work.url_type}
                    </a>
                </div>
            )}
        </div>
    );
}