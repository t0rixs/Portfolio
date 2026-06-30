import { Link } from "react-router-dom";
import { Content } from "../shared/Contents";
import { Labeled, PdfCanvasPreview, Pill, Section, Stat, palette } from "./_detail_ui";

const BASE = import.meta.env.BASE_URL;
const YT_VIDEO_ID = "5LCJDsg9ejw";
const PITCH_START = 4935; // 自チームのピッチ開始
const CLIP_SCOUTER = 5013;
const CLIP_VOICE = 5045;
const CLIP_SCREEN = 5062;

/** macOSのファイル名はNFD保存。URLもNFDで符号化する */
function assetUrl(relPath: string) {
    return `${BASE}${relPath.split("/").map((seg) => encodeURIComponent(seg.normalize("NFD"))).join("/")}`;
}

type WhiteboardItem = { file: string; caption: string };
const whiteboardItems: WhiteboardItem[] = [
    { file: "激論俯瞰.jpg", caption: "激論の俯瞰（その1）" },
    { file: "激論俯瞰2.jpg", caption: "激論の俯瞰（その2）" },
    { file: "3軸で行こうとしてたリーダのプレゼンフロー.jpg", caption: "3軸構成で行こうとしていたリーダーのプレゼンフロー" },
    { file: "3軸の説明(他のメンバー).jpg", caption: "3軸の説明（他のメンバーが書いたもの）" },
    { file: "2軸を無理やり一軸にまとめようとして私が考えたもの。少し無理があるのと前提が膨らみすぎる.jpg", caption: "2軸を1軸に統合しようとして自分が書いたもの（前提が膨らみすぎ）" },
    { file: "赤文字が私の考えた業務効率化のみのフロー.jpg", caption: "既存業務効率化に1軸で寄せた自分の案（赤文字部分）" },
    { file: "人件費削減の根拠.jpg", caption: "人件費削減の根拠" },
];

/**
 * DCON2026 詳細ページ。
 * 大会概要 → 結果 → サマリー → テーマ → ピボット → 動画/スライド → 動画制作 → 激論 →
 * VC講評と反省 → 高専起業家サミット連携 → 持ち帰り
 */

function ytEmbedSrc(start: number) {
    return `https://www.youtube.com/embed/${YT_VIDEO_ID}?start=${start}`;
}
function ytLiveUrl(start: number) {
    return `https://www.youtube.com/live/${YT_VIDEO_ID}?t=${start}`;
}

function YouTubeEmbed({ start, title }: { start: number; title: string }) {
    return (
        <div
            style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
                borderRadius: 8,
                border: `1px solid ${palette.cardBorder}`,
                background: "#000",
            }}
        >
            <iframe
                src={ytEmbedSrc(start)}
                title={title}
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            />
        </div>
    );
}

function Callout({
    tone = "info",
    title,
    children,
}: {
    tone?: "warn" | "info" | "good" | "regret";
    title: string;
    children: React.ReactNode;
}) {
    const color =
        tone === "warn" ? "#ffb347" :
            tone === "good" ? "#7adf94" :
                tone === "regret" ? "#ff7a90" :
                    "#9cf";
    const bg =
        tone === "warn" ? "rgba(255,179,71,0.07)" :
            tone === "good" ? "rgba(122,223,148,0.07)" :
                tone === "regret" ? "rgba(255,122,144,0.07)" :
                    "rgba(156,207,255,0.07)";
    return (
        <div
            style={{
                margin: "0.8rem 0",
                padding: "0.7rem 0.95rem",
                background: bg,
                border: `1px solid ${color}55`,
                borderLeft: `3px solid ${color}`,
                borderRadius: 6,
            }}
        >
            <div style={{ fontSize: "0.75rem", color, fontWeight: 700, letterSpacing: "0.05em", marginBottom: "0.3rem" }}>
                {title}
            </div>
            <div style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>{children}</div>
        </div>
    );
}

export default function DconDetail({ work: _work }: { work: Content }) {
    return (
        <div style={{ color: palette.text, lineHeight: 1.8 }}>
            {/* ── DCONとは ── */}
            <Section title="DCONとは">
                <p style={{ marginBottom: "0.8rem" }}>
                    <strong>DCON（全国高等専門学校ディープラーニングコンテスト）</strong>は、
                    <a href="https://www.jdla.org/" target="_blank" rel="noopener noreferrer" style={{ color: "#9cf" }}>日本ディープラーニング協会</a>
                    ・全国高等専門学校連合会・NHK・NHKエンタープライズが主催する、
                    <strong>「ディープラーニング × ものづくり」で社会課題を解決する事業プラン</strong>を高専生が競うコンテスト。
                    審査員はVC・経営者・AI研究者で、各チームには
                    <strong>「もし上場したらいくらの企業評価額が付くか」</strong>という形で値段が付けられる、いわば
                    <strong>学生版スタートアップピッチ</strong>の場。
                </p>
                <p style={{ marginBottom: "0.8rem", color: palette.sub, fontSize: "0.95rem" }}>
                    自分が出場したのは <strong>DCON2026（第7回）</strong>。
                    本大会は <strong>過去最多119作品のエントリーから本選10チームを選抜</strong>、
                    2026年5月8日（技術審査会）・5月9日（本選プレゼンテーション）にヒカリエホール（渋谷）で開催された。
                </p>
                <p style={{ fontSize: "0.9rem" }}>
                    関連リンク：
                    <a href="https://dcon.ai/2026/" target="_blank" rel="noopener noreferrer" style={{ color: "#9cf" }}>
                        DCON2026 公式サイト
                    </a>
                    {" / "}
                    <a href="https://dcon.ai/results/" target="_blank" rel="noopener noreferrer" style={{ color: "#9cf" }}>
                        本選最終審査結果
                    </a>
                </p>
            </Section>

            {/* ── 結果 ── */}
            <Section title="結果">
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 4 }}>
                    <Stat value="4位 / 10" label="本選順位（119エントリーから選抜）" />
                    <Stat value="2億4000万円" label="審査員による企業評価額" />
                    <Stat value="文部科学大臣賞" label="受賞" />
                    <Stat value="TOYOTA賞" label="企業賞" />
                </div>
                <figure style={{ margin: "1.2rem 0 0" }}>
                    <img
                        src={`${BASE}contents/DCON_result.jpg`}
                        alt="DCON2026 本選表彰時の様子"
                        style={{
                            width: "100%",
                            maxHeight: 360,
                            objectFit: "cover",
                            objectPosition: "center",
                            borderRadius: 8,
                            border: `1px solid ${palette.cardBorder}`,
                        }}
                    />
                </figure>
                <Callout tone="good" title="TOYOTA賞 受賞理由（要旨）">
                    「自動車産業も、技術の伝承ができず、教えても人がやめてしまう課題がある。
                    このデバイスがあれば情報を伝えて、さらに改善できる。
                    <strong>時をまたいでも、工場をまたいでも、技術伝承ができるのではないか</strong>と思った。」
                </Callout>
            </Section>

            {/* ── 案件サマリー ── */}
            <Section title="案件サマリー">
                <Labeled label="大会">第7回 全国高等専門学校ディープラーニングコンテスト（DCON2026）</Labeled>
                <Labeled label="期間">2025年10月末 〜 2026年5月9日（約半年）</Labeled>
                <Labeled label="チーム">高専生6名チーム</Labeled>
                <Labeled label="自分のロール">
                    <strong>ビジネスモデル設計</strong>と<strong>本選プレゼン資料 / 機能紹介動画の制作</strong>を担当（リーダーではなくサブの立場）
                </Labeled>
                <Labeled label="審査フロー">
                    一次資料提出 → 二次資料提出 → メンター審査 → 本選プレゼン
                </Labeled>
                <div>
                    <Pill>顧客課題発見</Pill>
                    <Pill>30+施設ヒアリング</Pill>
                    <Pill>事業仮説設計</Pill>
                    <Pill>ビジネスモデル</Pill>
                    <Pill>ピッチ資料</Pill>
                    <Pill>機能紹介動画</Pill>
                    <Pill>5分プレゼン</Pill>
                </div>
            </Section>

            {/* ── テーマ ── */}
            <Section title="取り組んだテーマ ─ 介護士の「閲覧業務」を0にするARデバイス">
                <p style={{ marginBottom: "0.8rem" }}>
                    介護現場は人手不足が叫ばれて久しい。
                    しかしその裏側では、介護士が<strong>入居者と直接関わる以外</strong>の業務、
                    なかでも<strong>「過去の記録を見る」「いま起きたことを記録に残す」</strong>といった
                    情報取り扱いの業務に膨大な時間を奪われている。
                </p>
                <p>
                    30以上の介護施設を訪問してヒアリングを重ねた結果、
                    我々は<strong>「介護の前後に発生する『閲覧業務』をARで0にする」</strong>という結論に至った。
                    プロダクトは <strong>ARデバイス</strong> の形を取り、
                    介護士が入居者を見るだけで必要な記録情報が視界に重なる。
                    記録はその閲覧体験を支える機能として、ハンズフリーで残せる構造にした。
                </p>
            </Section>

            {/* ── 自分の担当領域 ── */}
            <Section title="自分の担当領域">
                <p style={{ marginBottom: "0.8rem" }}>
                    6人チームの中で、自分は<strong>「事業に翻訳する」</strong>ポジションを担った。
                </p>
                <ul style={{ paddingLeft: "1.2rem" }}>
                    <li style={{ marginBottom: "0.4rem" }}>
                        <strong>ビジネスモデル設計</strong>：誰が買い、どう使い、どこで儲かるのかの構造化。市場規模・収益モデルの整理。
                    </li>
                    <li style={{ marginBottom: "0.4rem" }}>
                        <strong>本選プレゼン資料の作成</strong>：5分制約下で、技術と事業の両立を狙ったスライド構成・ビジュアル設計。
                    </li>
                    <li style={{ marginBottom: "0.4rem" }}>
                        <strong>機能紹介動画の制作</strong>：施設に密着取材して素材を集めるところから編集まで一手に担当（後述）。
                    </li>
                    <li>
                        <strong>顧客課題の言語化</strong>：ヒアリングで得た一次情報を、審査員（VC・経営者）に刺さる言葉に翻訳する役割。
                    </li>
                </ul>
            </Section>

            {/* ── 課題定義の迷走とピボット ── */}
            <Section title="課題定義の迷走 ─ 仮説なきヒアリングが招いた2ヶ月">
                <p style={{ marginBottom: "0.8rem" }}>
                    今回の活動で<strong>一番痛かった、そして一番学びのあったフェーズ</strong>。
                </p>

                <h4 style={{ color: "#fff", marginTop: "1.2rem", marginBottom: "0.4rem" }}>
                    ① 最初のアイデア：HealthMirror
                </h4>
                <p style={{ marginTop: 0, marginBottom: "0.6rem" }}>
                    一次資料の段階で提出したのは、<strong>高齢者住宅向けのスマートミラー</strong>。
                    毎朝顔を映すだけで、家族に健康状態を自動送信できるデバイス、というコンセプトだった。
                </p>
                <figure style={{ margin: "0.6rem 0 1.2rem" }}>
                    <img
                        src={`${BASE}contents/DCON_HeathMirror.png`}
                        alt="DCON 一次資料に提出した HealthMirror のコンセプト"
                        style={{
                            width: "100%",
                            maxHeight: 360,
                            objectFit: "contain",
                            background: "#0c0c0c",
                            borderRadius: 8,
                            border: `1px solid ${palette.cardBorder}`,
                        }}
                    />
                    <figcaption style={{ fontSize: "0.8rem", color: palette.muted, marginTop: 6 }}>
                        DCON 一次資料に提出した HealthMirror の概念図
                    </figcaption>
                </figure>

                <h4 style={{ color: "#fff", marginTop: "1.4rem", marginBottom: "0.4rem" }}>
                    ② 介護施設へのヒアリングで、需要がないことが早々に判明
                </h4>
                <p style={{ marginTop: 0 }}>
                    現場に出てヒアリングを始めると、<strong>HealthMirror に対する需要がそもそも存在しない</strong>ことがすぐ分かった。
                    課題設定そのものを見直す必要があると判断し、ヒアリングを継続。
                </p>

                <h4 style={{ color: "#fff", marginTop: "1.4rem", marginBottom: "0.4rem" }}>
                    ③ 軸なしヒアリングがもたらした「個別課題の山」
                </h4>
                <p style={{ marginTop: 0 }}>
                    ところがここで罠にはまった。<strong>明確な仮説を持たないままヒアリングを重ねた</strong>結果、
                    出てくるのは<strong>大量の個別課題</strong>ばかり。
                    どれも切実だが、どれも局所的で、集約できない。
                    <strong>「本質的な問題は何なのか」が誰にも見えない状態</strong>が10〜11月いっぱい続いた。
                </p>

                <Callout tone="warn" title="この時期に学んだこと">
                    <strong>インサイトは「聞いて出てくるもの」ではない。</strong>
                    個別課題をいくら集めても、その中に勝手にインサイトが立ち現れることはない。
                    <strong>こちらが先に仮説を持ち、その仮説を検証/反証するために聞く</strong>のでなければ、
                    ヒアリングは情報量だけ増えてノイズも増える。
                    本来は <strong>ネットや既存研究から仮説を立てた上で現場に行く</strong>べきだった。
                </Callout>

                <h4 style={{ color: "#fff", marginTop: "1.4rem", marginBottom: "0.4rem" }}>
                    ④ 二次審査直前、それまでのヒアリングから無理やりアイデアをひねり出す
                </h4>
                <p style={{ marginTop: 0 }}>
                    結局、二次審査前のギリギリで、それまでの膨大な個別課題群の中から
                    <strong>共通項として浮かび上がってきた「介護士が情報の取り扱いに時間を取られている」</strong>
                    という構造を仮説化。
                    ここから「<strong>閲覧業務をARで0にする</strong>」というコアコンセプトに収束させた。
                </p>

                <h4 style={{ color: "#fff", marginTop: "1.4rem", marginBottom: "0.4rem" }}>
                    ⑤ 本選までの数ヶ月、仮説を磨き続けた
                </h4>
                <p style={{ marginTop: 0 }}>
                    二次以降は「仮説をどう磨くか」の戦いに変わった。
                    ユーザーシナリオの解像度を上げ、収益モデルを詰め、
                    本選ではこの一連の仮説検証ストーリーごと事業として提示した。
                </p>
            </Section>

            {/* ── 高専起業家サミット遷移カード ── */}
            <Section title="本選までの中間アウトプット ─ 高専起業家サミット 優秀賞">
                <p style={{ marginBottom: "0.8rem" }}>
                    DCONメンター審査の<strong>5日後</strong>に当たる
                    <strong>2026年2月23・24日</strong>、東京・一橋講堂で開催された
                    <strong>第3回 高専起業家サミット</strong>に、同じ事業プランで出場。
                    本来はスタートアップ部門で出す予定だったが、エントリーをアイデア部門で送ってしまい、
                    結果アイデア部門で <strong>優秀賞</strong> を受賞した。
                    詳細は別ページに：
                </p>
                <Link
                    to={`/works/dcon_kigyouka`}
                    style={{
                        display: "block",
                        background: palette.card,
                        border: `1px solid ${palette.cardBorder}`,
                        borderLeft: "3px solid #ffd27a",
                        borderRadius: 10,
                        padding: "1.1rem 1.3rem",
                        color: palette.text,
                        textDecoration: "none",
                        transition: "border-color 0.2s, transform 0.2s",
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.borderColor = "#ffd27a";
                        e.currentTarget.style.transform = "translateX(2px)";
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.borderColor = palette.cardBorder;
                        e.currentTarget.style.transform = "translateX(0)";
                    }}
                >
                    <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 4 }}>
                        <span style={{ fontFamily: "monospace", fontSize: "0.8rem", color: "#ffd27a", fontWeight: 700 }}>
                            SUB
                        </span>
                        <span style={{ fontSize: "0.75rem", color: palette.muted }}>2026.02.23–24 / 一橋講堂</span>
                    </div>
                    <h3 style={{ margin: "0.1rem 0 0.3rem", fontSize: "1.15rem", color: "#fff", fontWeight: 600 }}>
                        第3回 高専起業家サミット ─ スタートアップ部門 優秀賞
                    </h3>
                    <p style={{ margin: "0 0 0.6rem", color: palette.sub, fontSize: "0.9rem" }}>
                        DCON本選前の中間アウトプット。本選とは違う課題設計でピッチした。
                    </p>
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <span style={{ color: "#ffd27a", fontSize: "0.85rem" }}>詳細を見る →</span>
                    </div>
                </Link>
            </Section>

            {/* ── 本選ピッチ動画 ── */}
            <Section title="本選ピッチ動画">
                <p style={{ marginBottom: "0.4rem", color: palette.sub, fontSize: "0.95rem" }}>
                    DCON2026 本選アーカイブ（自チームのピッチ開始位置から再生）。
                </p>
                <figure style={{ margin: "0.8rem 0 0", padding: 0 }}>
                    <YouTubeEmbed start={PITCH_START} title="DCON2026 本選ピッチ" />
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
                        <span>▶ DCON2026 本選ピッチ</span>
                        <a href={ytLiveUrl(PITCH_START)} target="_blank" rel="noopener noreferrer" style={{ color: "#9cf" }}>
                            YouTube で開く ↗
                        </a>
                    </figcaption>
                </figure>
            </Section>

            {/* ── 本選プレゼン資料 ── */}
            <Section title="本選プレゼン資料">
                <p style={{ margin: 0, fontSize: "0.95rem", color: palette.sub }}>
                    本選当日に使用したスライド一式。
                </p>
                <PdfCanvasPreview
                    file="DCON_last_slide.pdf"
                    label="DCON2026 本選プレゼン資料"
                    caption="本選当日に使用したスライド一式（約32MB / canvas描画）"
                />
            </Section>

            {/* ── 動画制作の裏側 ── */}
            <Section title="機能紹介動画の制作 ─ 3本のクリップで何を見せたか">
                <p style={{ marginBottom: "0.8rem" }}>
                    5分のピッチで一番の山場になる<strong>機能紹介の3カット</strong>は、すべて自分で制作した。
                    本選のスライド中央に置いた3本のクリップは、それぞれ
                    <strong>「スカウター」「音声記録」「画面共有」</strong>を見せる短い動画。
                </p>

                <h4 style={{ color: "#fff", marginTop: "1.2rem", marginBottom: "0.4rem" }}>
                    機能1：スカウター機能（24秒）
                </h4>
                <YouTubeEmbed start={CLIP_SCOUTER} title="スカウター機能デモ" />
                <p style={{ fontSize: "0.85rem", marginTop: "0.4rem" }}>
                    <a href={ytLiveUrl(CLIP_SCOUTER)} target="_blank" rel="noopener noreferrer" style={{ color: "#9cf" }}>
                        該当箇所を YouTube で開く ↗
                    </a>
                </p>

                <h4 style={{ color: "#fff", marginTop: "1.4rem", marginBottom: "0.4rem" }}>
                    機能2：音声記録機能（16秒）
                </h4>
                <YouTubeEmbed start={CLIP_VOICE} title="音声記録機能デモ" />
                <p style={{ fontSize: "0.85rem", marginTop: "0.4rem" }}>
                    <a href={ytLiveUrl(CLIP_VOICE)} target="_blank" rel="noopener noreferrer" style={{ color: "#9cf" }}>
                        該当箇所を YouTube で開く ↗
                    </a>
                </p>

                <h4 style={{ color: "#fff", marginTop: "1.4rem", marginBottom: "0.4rem" }}>
                    機能3：画面共有機能（18秒）
                </h4>
                <YouTubeEmbed start={CLIP_SCREEN} title="画面共有機能デモ" />
                <p style={{ fontSize: "0.85rem", marginTop: "0.4rem" }}>
                    <a href={ytLiveUrl(CLIP_SCREEN)} target="_blank" rel="noopener noreferrer" style={{ color: "#9cf" }}>
                        該当箇所を YouTube で開く ↗
                    </a>
                </p>

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    制作プロセスで苦慮したこと
                </h4>
                <ul style={{ paddingLeft: "1.2rem", marginTop: 0 }}>
                    <li style={{ marginBottom: "0.5rem" }}>
                        <strong>素材は介護施設で撮るしかなかった</strong>。
                        どの機能をしっかり見せるか・機能の前にどんな文脈を置くかが
                        撮影前の時点で曖昧だったため、<strong>介護士1人に2時間密着</strong>して
                        現場で起きていることをまるごと素材として確保した。
                    </li>
                    <li>
                        <strong>プライバシー制約 vs 分かりやすさのトレードオフ</strong>。
                        本来「入居者の顔を見ると情報が出る」という体験を見せたいのに、
                        入居者の顔は当然映せない。
                        編集でこのギャップをどう埋めるかが一番苦労した部分で、
                        最終的にはカメラワーク・ガイドUI・ナレーションの設計で
                        <strong>「顔がなくても、何が起きているかが直感的に伝わる」</strong>状態に落とし込んだ。
                    </li>
                </ul>
            </Section>

            {/* ── 激論：何を残し、何を捨てたか ── */}
            <Section title="スライド設計の激論 ─ 何を残し、何を捨てたか">
                <p style={{ marginBottom: "0.8rem" }}>
                    本選プレゼンは<strong>持ち時間5分</strong>。
                    全機能・全顧客セグメントを語ろうとすれば破綻する制約のなかで、
                    <strong>何を捨てるか</strong>を巡って、チーム内で何度も衝突した。
                </p>

                <h4 style={{ color: "#fff", marginTop: "1.2rem", marginBottom: "0.4rem" }}>
                    ① 出発点（高専起業家サミット時点）の課題設計：人手不足 → ベテランの間接業務
                </h4>
                <p style={{ marginTop: 0 }}>
                    最初に整理した課題感は<strong>「人手不足」</strong>。
                    その内訳は<strong>「ベテランの間接業務が時間を圧迫していること」</strong>だと考え、
                    <strong>「既存業務の効率化」</strong>と<strong>「新人教育の効率化」</strong>の2軸で
                    ベテランの負担を減らし、人手不足を解く、という筋道を立てた。
                    これが高専起業家サミットで使った課題設計。
                </p>

                <h4 style={{ color: "#fff", marginTop: "1.4rem", marginBottom: "0.4rem" }}>
                    ② 大議論1：「スポットワーク」を入れるか入れないか（発表2週間前）
                </h4>
                <p style={{ marginTop: 0 }}>
                    DCON本選に向けてスライドを作り始めるにあたって議題に上ったのが、
                    <strong>これまで成立しなかった「介護のスポットワーク」を実現できるか</strong>という論点。
                    以前にも議論しては施設の人に渋い顔をされて諦めていたが、
                    施設の人が必ずしも介護業界の構造を知っているわけではない。
                    <strong>「施設職員が実現できると思うか」ではなく「自分たちが構造として実現できそうか」で判断すべき</strong>、
                    と立場を変えて、その実現性と、ピッチで説明できるかを<strong>1日かけて議論</strong>。
                    結論、「ビジョナリーに語ろう」となり、スポットワークを入れる方針に決まった。
                </p>

                <h4 style={{ color: "#fff", marginTop: "1.4rem", marginBottom: "0.4rem" }}>
                    ③ メンター審査で「複雑」と評価される（発表1週間前）
                </h4>
                <p style={{ marginTop: 0 }}>
                    そうして<strong>「ベテラン職員」「新人職員」「スポットワーカー」</strong>の3軸構成にして
                    DCONメンターレビューに臨んだところ、評価は
                    <strong>「複雑でわかりにくい」</strong>。
                    メンターからは「3つをもっと整理して語ろう」とアドバイスをもらった。
                </p>

                <h4 style={{ color: "#fff", marginTop: "1.4rem", marginBottom: "0.4rem" }}>
                    ④ 大議論2：3軸 vs 2軸 ─ リーダーとの10時間
                </h4>
                <p style={{ marginTop: 0, marginBottom: "0.6rem" }}>
                    そこで自分は再構成を提案した。
                </p>
                <ul style={{ paddingLeft: "1.2rem", marginTop: 0 }}>
                    <li style={{ marginBottom: "0.4rem" }}>
                        構造としては <strong>「業務効率化による省人化」</strong> と
                        <strong>「スポットワークによる人材流入」</strong> の2軸で十分。
                    </li>
                    <li>
                        この場合「ベテラン／新人」の分類は不要で、<strong>「既存職員」で統合</strong>できる。
                        ─ <strong>3軸 → 2軸 + 1セグメント</strong> に削るべき。
                    </li>
                </ul>
                <p style={{ marginTop: "0.6rem" }}>
                    これに対しリーダーは<strong>「3軸でも説明できるのなら、解像度の高い説明をするべき」</strong>と主張。
                    今振り返ると、リーダーは「説明できるなら全部入れたい」、
                    自分は「5分のピッチで分かりやすく刺すなら削るべき」という、
                    <strong>『情報量』と『刺さりやすさ』のどちらに振るか</strong>で衝突していた。
                </p>
                <p>
                    議論は<strong>10時間</strong>続いた。
                    決着しなかったため、もともと介護SaaSの会社で働いていた学校スタッフに協力を依頼し、
                    第三者視点で話を整理してもらった結果、<strong>シンプルに語れる自分の案で行く</strong>ことに。
                </p>

                <h4 style={{ color: "#fff", marginTop: "1.4rem", marginBottom: "0.4rem" }}>
                    ⑤ 大議論3：2軸でもまだ重い ─ 1軸に絞るか
                </h4>
                <p style={{ marginTop: 0 }}>
                    実際に2軸でスライドを組み始めると、新しい問題に気付いた。
                    <strong>「ピッチの黄金構造は、いくつかの課題 → 一つのインサイト → 一つの解決策 → いくつかの機能」</strong>。
                    ところがスポットワークと既存業務の解決はどちらも重要すぎて、
                    同時に語ろうとすると<strong>前提知識のロードが膨らみすぎ</strong>、
                    結局なにが言いたいのかボケる。
                </p>
                <p>
                    かといって「スポットワーク」一本に絞ると、
                    <strong>現場が今すぐ求めているわけではなく、誰が買うかが弱い</strong>ためビジネスモデルとして破綻する。
                    自分は<strong>「既存業務の効率化に1軸で落とすべき」</strong>と主張。
                    リーダーは依然「どちらも同時に語れる」と主張。
                    ここの議論は混沌としていて、途中経過はもはや覚えていない。
                </p>
                <Callout tone="info" title="議論の痕跡 ─ ホワイトボード">
                    当時ホワイトボードに残した思考の跡。
                    どの軸でどう語ろうとしていたか、なぜそれが破綻したのかが断片として残っている。
                </Callout>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                        gap: "0.8rem",
                        marginTop: "0.6rem",
                    }}
                >
                    {whiteboardItems.map((w) => (
                        <figure key={w.file} style={{ margin: 0 }}>
                            <a
                                href={assetUrl(`contents/DCON/WhiteBoard/${w.file}`)}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: "block" }}
                            >
                                <img
                                    src={assetUrl(`contents/DCON/WhiteBoard/${w.file}`)}
                                    alt={w.caption}
                                    loading="lazy"
                                    style={{
                                        width: "100%",
                                        aspectRatio: "4 / 3",
                                        objectFit: "cover",
                                        background: "#0c0c0c",
                                        borderRadius: 8,
                                        border: `1px solid ${palette.cardBorder}`,
                                        display: "block",
                                    }}
                                />
                            </a>
                            <figcaption style={{ fontSize: "0.78rem", color: palette.muted, marginTop: 4, lineHeight: 1.5 }}>
                                {w.caption}
                            </figcaption>
                        </figure>
                    ))}
                </div>

                <h4 style={{ color: "#fff", marginTop: "1.4rem", marginBottom: "0.4rem" }}>
                    ⑥ 着地：既存業務軸 ＋ スポットワークは未来像として
                </h4>
                <p style={{ marginTop: 0 }}>
                    最終的に、<strong>「既存業務の効率化」を1軸の幹に据え、
                        スポットワーク対応はデバイスの未来像として後半に見せる</strong>構成で着地。
                    プレゼン本番のスライドはこの形になっている。
                </p>
            </Section>

            {/* ── 結果発表後の振り返り ── */}
            <Section title="結果発表後の振り返り ─ VCに言われて見えた敗因">
                <Callout tone="regret" title="VCからのフィードバック（要旨）">
                    <strong>「介護 × AI」は、VCが見飽きるほど見ているテーマ</strong>。
                    あなたたちのプロダクトは、結局それらと同じものに見られてしまっていた。
                </Callout>
                <p style={{ marginTop: "0.8rem" }}>
                    既存の介護×AIプロダクトはほとんどが<strong>「記録の効率化」</strong>に主眼を置いている。
                    我々の本当の主眼は<strong>「情報のインプット時間を0にする＝閲覧業務を0にする」</strong>ことで、
                    記録機能はその閲覧体験を最大化するための従属機能でしかなかった。
                    それなのに、ピッチでは機能を3つ並べて見せたために、結果として
                    <strong>「介護記録SaaS」と同じ箱に分類されてしまった</strong>。
                </p>
                <p>
                    今思えば、<strong>機能の数を削り、
                        介護の「みる」一点に焦点を絞って差別化を立てるべきだった</strong>。
                    機能をシンプルに語ること自体は徹底できたが、
                    <strong>「どの軸で差別化するか」の選び方</strong>がまだ甘かった、
                    というのが結果発表後に得た最大の学び。
                </p>
            </Section>

            {/* ── 持ち帰り ── */}
            <Section title="この活動から持ち帰った力">
                <ul style={{ paddingLeft: "1.2rem" }}>
                    <li style={{ marginBottom: "0.4rem" }}>
                        <strong>仮説駆動のリサーチ感覚</strong>：
                        「仮説を持って現場に行く」と「現場で仮説を作ろうとする」では
                        到達できる解像度が決定的に違う、という体感ベースの理解。
                    </li>
                    <li style={{ marginBottom: "0.4rem" }}>
                        <strong>30施設の一次情報を構造に落とす力</strong>：
                        個別課題の山から共通構造を抽出し、プロダクトコンセプトに昇華するプロセスを経験した。
                    </li>
                    <li style={{ marginBottom: "0.4rem" }}>
                        <strong>「何を捨てるか」を意思決定し続ける力</strong>：
                        10時間の議論を通して、シンプルさを守る側に立ち続けるストレス耐性と
                        「<strong>第三者を入れて構造で決着させる</strong>」というチーム運営の作法を学んだ。
                    </li>
                    <li style={{ marginBottom: "0.4rem" }}>
                        <strong>VC・経営者に伝わるピッチ設計</strong>：
                        5分制約下で技術と事業を「投資判断のテーブル」に乗せる伝え方を、
                        評価額・受賞・VC講評という多角フィードバック付きで学べた。
                        <strong>差別化軸の選び方の甘さ</strong>という、次に持ち越す宿題も含めて。
                    </li>
                    <li>
                        <strong>サブポジションでの事業翻訳役</strong>：
                        リーダーではない位置から、技術チームの成果を事業価値に翻訳して外部に届ける役割の重要性を実感。
                        Tapaz（事業オーナー）とは対になる経験。
                    </li>
                </ul>
            </Section>
        </div>
    );
}
