import { useNavigate } from "react-router-dom";
import { contents } from "./Contents";
import { FadeInFromLeft } from "./components";

const FEATURED_IDS = ["routepia", "tapaz", "handy"];

// id ごとにカードへ追加表示する情報（リリース告知や補足説明）
const FEATURED_OVERRIDES: Record<string, { badge?: string; extra?: string }> = {
    routepia: {
        badge: "近日リリース予定",
        extra: "App Store / Google Play への公開準備中。人生の足跡を地図に刻む新しい記録体験を、もうすぐ世に出します。",
    },
};

const tagLabel = (location: string) =>
    location === "Tech" ? "エンジニア" : location === "Activity" ? "ビジネス" : location;

const tagColor = (location: string) =>
    location === "Tech"
        ? { bg: "rgba(80, 160, 255, 0.15)", border: "rgba(80, 160, 255, 0.5)", color: "#7fb8ff" }
        : { bg: "rgba(255, 160, 80, 0.15)", border: "rgba(255, 160, 80, 0.5)", color: "#ffb87f" };

export default function Featured() {
    const navigate = useNavigate();

    const featured = FEATURED_IDS
        .map((id) => contents.find((c) => c.id === id))
        .filter((c): c is NonNullable<typeof c> => Boolean(c));

    return (
        <div id="featured">
            <style>{`
                .featured-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                    align-items: stretch;
                }
                @media (max-width: 768px) {
                    .featured-grid {
                        grid-template-columns: 1fr;
                    }
                }
                @keyframes featured-pulse {
                    0%, 100% { transform: scale(1); box-shadow: 0 2px 8px rgba(255,107,107,0.4); }
                    50% { transform: scale(1.05); box-shadow: 0 4px 16px rgba(255,107,107,0.6); }
                }
            `}</style>
            <FadeInFromLeft>
                <h2 style={{ fontSize: '3rem', marginBottom: '3rem', fontWeight: '200', letterSpacing: '0.1em' }}>
                    <span style={{ borderBottom: '1px solid #fff', paddingBottom: '0.5rem' }}>Featured</span>
                </h2>
            </FadeInFromLeft>
            <FadeInFromLeft>
                <p style={{ opacity: 0.7, marginBottom: '2rem', fontSize: '1rem' }}>
                    数ある取り組みの中から、これだけは見てほしい3つ。
                </p>
            </FadeInFromLeft>
            <FadeInFromLeft>
                <div
                    className="featured-grid"
                >
                    {featured.map((work) => {
                        const tc = tagColor(work.location);
                        const override = FEATURED_OVERRIDES[work.id] ?? {};
                        return (
                            <div
                                key={work.id}
                                onClick={() => navigate(`/works/${work.id}`)}
                                style={{
                                    position: 'relative',
                                    height: '320px',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    border: '1px solid rgba(128,128,128,0.25)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <img
                                    src={work.img}
                                    alt={work.title}
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: work.img_pos ?? 'center',
                                        filter: `brightness(${work.img_brt})`,
                                        zIndex: 0,
                                    }}
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%)',
                                        zIndex: 1,
                                    }}
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '1rem',
                                        left: '1rem',
                                        zIndex: 2,
                                        padding: '0.3rem 0.8rem',
                                        borderRadius: '999px',
                                        fontSize: '0.75rem',
                                        letterSpacing: '0.1em',
                                        background: tc.bg,
                                        border: `1px solid ${tc.border}`,
                                        color: tc.color,
                                        backdropFilter: 'blur(6px)',
                                    }}
                                >
                                    {tagLabel(work.location)}
                                </div>
                                {override.badge && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '1rem',
                                            right: '1rem',
                                            zIndex: 2,
                                            padding: '0.3rem 0.7rem',
                                            borderRadius: '999px',
                                            fontSize: '0.7rem',
                                            fontWeight: 600,
                                            letterSpacing: '0.05em',
                                            background: 'linear-gradient(135deg, #ff6b6b, #ffa94d)',
                                            color: '#fff',
                                            boxShadow: '0 2px 8px rgba(255,107,107,0.4)',
                                            animation: 'featured-pulse 2s ease-in-out infinite',
                                        }}
                                    >
                                        {override.badge}
                                    </div>
                                )}
                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        padding: '1.2rem',
                                        zIndex: 2,
                                    }}
                                >
                                    <h4 style={{ margin: 0, marginBottom: '0.4rem', fontSize: '1.5rem' }}>{work.title}</h4>
                                    <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.85 }}>{work.description}</p>
                                    {override.extra && (
                                        <p style={{ margin: '0.5rem 0 0', fontSize: '0.8rem', opacity: 0.75, lineHeight: 1.5 }}>
                                            {override.extra}
                                        </p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </FadeInFromLeft>
        </div>
    );
}
