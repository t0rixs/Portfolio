import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { contents, Content } from "../shared/Contents";

type ShowcaseItem = {
    id: string;
    label: string;
    eyebrow: string;
    description: string;
    /** /works/:id 以外へ遷移したい場合に指定 */
    href?: string;
};

const showcaseDef: ShowcaseItem[] = [
    {
        id: "tapaz",
        eyebrow: "01 / Business",
        label: "Tapaz",
        description: "学生視点を企業に売る ─ 2年・代表・受注11件・累計60万円。",
    },
    {
        id: "handy",
        eyebrow: "02 / Business",
        label: "handy インターン",
        description: "急成長スタートアップで biz職遂行 / 新規事業の提案。",
    },
    {
        id: "dcon",
        eyebrow: "03 / Activity",
        label: "DCON",
        description: "介護現場の業務を、ディープラーニングで変える挑戦。",
    },
    {
        id: "souka",
        eyebrow: "04 / Others",
        label: "その他",
        description: "文化祭出店「爽果の雫」など、その他の活動。",
        href: "/activity/others",
    },
];

const STORAGE_KEY = "acts.activeIdx";

export default function Acts() {
    const navigate = useNavigate();
    const scrollerRef = useRef<HTMLDivElement | null>(null);
    const [activeIdx, setActiveIdx] = useState<number>(() => {
        const saved = sessionStorage.getItem(STORAGE_KEY);
        const n = saved ? parseInt(saved, 10) : 0;
        return Number.isFinite(n) ? n : 0;
    });

    const items = showcaseDef
        .map((s) => ({ def: s, content: contents.find((c) => c.id === s.id) }))
        .filter((x): x is { def: ShowcaseItem; content: Content } => Boolean(x.content));

    const realCount = items.length;
    // ループ用に [最後のクローン, ...items, 最初のクローン] という並びでレンダリング
    const rendered = realCount > 0
        ? [
            { ...items[realCount - 1], _clone: "tail" as const },
            ...items.map((it) => ({ ...it, _clone: null as null })),
            { ...items[0], _clone: "head" as const },
        ]
        : [];

    // 初期表示位置を activeIdx に合わせる（保存済みなら復元）
    useLayoutEffect(() => {
        const el = scrollerRef.current;
        if (!el || realCount === 0) return;
        // rendered における実体 idx の物理位置は (idx + 1)
        el.scrollTo({ left: (activeIdx + 1) * el.clientWidth, behavior: "auto" });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const el = scrollerRef.current;
        if (!el || realCount === 0) return;

        let snapTimer: number | undefined;
        const handler = () => {
            const { scrollLeft, clientWidth } = el;
            if (clientWidth === 0) return;
            const physical = Math.round(scrollLeft / clientWidth);

            // physical: 0 → 末尾クローン / realCount+1 → 先頭クローン
            // 実際の idx を計算
            let real: number;
            if (physical === 0) real = realCount - 1;
            else if (physical === realCount + 1) real = 0;
            else real = physical - 1;

            setActiveIdx(real);

            // クローン位置に到達したらスクロール位置をシームレスに本体側へ補正
            if (snapTimer) window.clearTimeout(snapTimer);
            snapTimer = window.setTimeout(() => {
                if (physical === 0) {
                    el.scrollTo({ left: realCount * clientWidth, behavior: "auto" });
                } else if (physical === realCount + 1) {
                    el.scrollTo({ left: 1 * clientWidth, behavior: "auto" });
                }
            }, 80);
        };
        el.addEventListener("scroll", handler, { passive: true });
        return () => {
            el.removeEventListener("scroll", handler);
            if (snapTimer) window.clearTimeout(snapTimer);
        };
    }, [realCount]);

    // activeIdx を sessionStorage に保存（戻ってきた時に同じ位置で復元）
    useEffect(() => {
        sessionStorage.setItem(STORAGE_KEY, String(activeIdx));
    }, [activeIdx]);

    const goToReal = (real: number, smooth = true) => {
        const el = scrollerRef.current;
        if (!el) return;
        const wrapped = ((real % realCount) + realCount) % realCount;
        el.scrollTo({ left: (wrapped + 1) * el.clientWidth, behavior: smooth ? "smooth" : "auto" });
    };

    return (
        <div
            style={{
                position: "relative",
                marginLeft: "calc(50% - 50vw)",
                marginRight: "calc(50% - 50vw)",
                width: "100vw",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
            }}
        >
            {/* スロットマシン風 横スクロール本体（先頭/末尾にクローンを配置してループ） */}
            <div
                ref={scrollerRef}
                className="acts-slot"
                style={{
                    display: "flex",
                    overflowX: "scroll",
                    overflowY: "hidden",
                    scrollSnapType: "x mandatory",
                    scrollbarWidth: "none",
                    WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
                    maskImage:
                        "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
                }}
            >
                <style>{`
                    .acts-slot::-webkit-scrollbar { display: none; }
                `}</style>
                {rendered.map((entry, physicalIdx) => {
                    const { def, content } = entry;
                    // 物理位置 → 実 idx
                    let realIdx: number;
                    if (physicalIdx === 0) realIdx = realCount - 1;
                    else if (physicalIdx === realCount + 1) realIdx = 0;
                    else realIdx = physicalIdx - 1;

                    const isClone = entry._clone !== null;
                    const distance = Math.abs(realIdx - activeIdx);
                    const isActive = distance === 0 && !isClone;
                    const opacity = isActive ? 1 : Math.max(0.3, 1 - Math.min(distance, 2) * 0.4);
                    const scale = isActive ? 1 : 0.9;
                    return (
                        <div
                            key={`${def.id}-${physicalIdx}`}
                            style={{
                                flex: "0 0 100%",
                                scrollSnapAlign: "center",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "0.5rem max(1.5rem, 4vw)",
                                boxSizing: "border-box",
                            }}
                        >
                            <div
                                onClick={(e) => {
                                    // クリック時に現在位置を保存
                                    sessionStorage.setItem(STORAGE_KEY, String(realIdx));
                                    if ((e.metaKey || e.ctrlKey) && content.url) {
                                        window.open(content.url, "_blank");
                                    } else if (def.href) {
                                        navigate(def.href);
                                    } else {
                                        navigate(`/works/${content.id}`);
                                    }
                                }}
                                style={{
                                    position: "relative",
                                    width: "min(1100px, 92vw)",
                                    aspectRatio: "16 / 7",
                                    maxHeight: "calc(100vh - var(--nav-height) - 6rem)",
                                    borderRadius: 18,
                                    overflow: "hidden",
                                    cursor: "pointer",
                                    border: "1px solid rgba(255,255,255,0.12)",
                                    boxShadow: "0 24px 60px rgba(0,0,0,0.55)",
                                    opacity,
                                    transform: `scale(${scale})`,
                                    transition: "opacity 0.4s ease, transform 0.4s ease, border-color 0.3s ease",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                                }}
                            >
                                <img
                                    src={content.img}
                                    alt={def.label}
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        objectPosition: content.img_pos || "center",
                                        filter: `brightness(${(content.img_brt ?? 1) * 0.85})`,
                                    }}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background:
                                            "linear-gradient(100deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.4) 100%)",
                                    }}
                                />
                                <div
                                    style={{
                                        position: "relative",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        padding: "clamp(1.5rem, 3.5vw, 2.5rem)",
                                        color: "#fff",
                                    }}
                                >
                                    <div
                                        style={{
                                            fontFamily: "monospace",
                                            fontSize: "0.8rem",
                                            letterSpacing: "0.25em",
                                            color: "rgba(255,255,255,0.7)",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        {def.eyebrow}
                                    </div>
                                    <div>
                                        <h2
                                            style={{
                                                margin: 0,
                                                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                                                fontWeight: 800,
                                                letterSpacing: "0.01em",
                                                lineHeight: 1.1,
                                            }}
                                        >
                                            {def.label}
                                        </h2>
                                        <p
                                            style={{
                                                margin: "0.8rem 0 1rem",
                                                fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)",
                                                color: "rgba(255,255,255,0.85)",
                                                maxWidth: 640,
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            {def.description}
                                        </p>
                                        <span
                                            style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: 8,
                                                padding: "0.5rem 1rem",
                                                background: "rgba(255,255,255,0.1)",
                                                border: "1px solid rgba(255,255,255,0.3)",
                                                borderRadius: 999,
                                                fontSize: "0.85rem",
                                                letterSpacing: "0.08em",
                                            }}
                                        >
                                            詳細を見る <span>→</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* インジケータ + 矢印（左右ループ可） */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.2rem", marginTop: "1.2rem" }}>
                <button
                    onClick={() => goToReal(activeIdx - 1)}
                    aria-label="前へ"
                    style={{
                        background: "transparent",
                        border: "1px solid rgba(255,255,255,0.3)",
                        color: "#fff",
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        cursor: "pointer",
                    }}
                >
                    ←
                </button>
                <div style={{ display: "flex", gap: 10 }}>
                    {items.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goToReal(idx)}
                            aria-label={`item ${idx + 1}`}
                            style={{
                                width: idx === activeIdx ? 28 : 10,
                                height: 4,
                                background: idx === activeIdx ? "#fff" : "rgba(255,255,255,0.3)",
                                border: "none",
                                borderRadius: 2,
                                cursor: "pointer",
                                transition: "width 0.3s ease, background 0.3s ease",
                                padding: 0,
                            }}
                        />
                    ))}
                </div>
                <button
                    onClick={() => goToReal(activeIdx + 1)}
                    aria-label="次へ"
                    style={{
                        background: "transparent",
                        border: "1px solid rgba(255,255,255,0.3)",
                        color: "#fff",
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        cursor: "pointer",
                    }}
                >
                    →
                </button>
            </div>
        </div>
    );
}
