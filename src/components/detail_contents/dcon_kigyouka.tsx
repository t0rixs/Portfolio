import { Link } from "react-router-dom";
import { Content } from "../shared/Contents";
import { Labeled, PdfCanvasPreview, Pill, Section, Stat, palette } from "./_detail_ui";

/**
 * 第3回 高専起業家サミット アイデア部門 優秀賞のサブ詳細ページ。
 * （本来はスタートアップ部門で出す予定だったが、エントリーをアイデア部門で送ってしまいアイデア部門での出場となった）
 * DCONメンター審査の5日後にあたる中間アウトプット。
 * 発表本人はチームリーダー。自分（＋メンバー1名）はサポートポジション。
 */

export default function DconKigyoukaDetail({ work: _work }: { work: Content }) {
    return (
        <div style={{ color: palette.text, lineHeight: 1.8 }}>
            {/* ── 親ページに戻る ── */}
            <div style={{ marginBottom: "1.4rem" }}>
                <Link
                    to="/works/dcon"
                    style={{
                        display: "inline-block",
                        padding: "0.4rem 0.8rem",
                        background: palette.card,
                        border: `1px solid ${palette.cardBorder}`,
                        borderRadius: 6,
                        color: palette.sub,
                        textDecoration: "none",
                        fontSize: "0.85rem",
                    }}
                >
                    ← DCON 本編ページに戻る
                </Link>
            </div>

            {/* ── サミットとは ── */}
            <Section title="第3回 高専起業家サミットとは">
                <p style={{ marginBottom: "0.8rem" }}>
                    <strong>高専起業家サミット</strong>は、全国の高専生によるビジネスプラン発表会。
                    第3回は<strong>「アイデア部門」「プロトタイプ部門」「スタートアップ部門」</strong>の3部門が設けられ、
                    全国33校35キャンパスから<strong>93チームの応募</strong>、書類選考を経て
                    <strong>45チームが本選出場</strong>。
                </p>
                <p style={{ marginBottom: "0.8rem", color: palette.sub, fontSize: "0.95rem" }}>
                    開催は<strong>2026年2月23日（月・祝）・24日（火）</strong>の2日間、
                    会場は東京・<strong>一橋講堂</strong>。
                    初日に開会式・ポスター発表・交流会、2日目にピッチ発表と表彰式が行われた。
                </p>
                <p style={{ fontSize: "0.9rem" }}>
                    関連リンク：
                    <a
                        href="https://startup.gekkan-kosen.com/report/3rd_2025/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#9cf" }}
                    >
                        第3回 高専起業家サミット 開催レポート
                    </a>
                </p>
            </Section>

            {/* ── 結果 ── */}
            <Section title="結果">
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 4 }}>
                    <Stat value="優秀賞" label="アイデア部門" />
                    <Stat value="93→45" label="全部門のエントリー → 本選チーム数" />
                </div>
                <p style={{ marginTop: "1rem", color: palette.sub, fontSize: "0.95rem" }}>
                    本来は<strong>スタートアップ部門</strong>（既にビジネスとして動いているプランを対象とする部門）で出す予定だったが、
                    エントリーを<strong>アイデア部門</strong>で送ってしまうミスもあり、結果的にアイデア部門での出場となった。
                    審査観点に対して第三者評価を取りに行く、
                    いわば<strong>DCON本選前の中間アウトプット</strong>として活用した。
                </p>
            </Section>

            {/* ── 案件サマリー ── */}
            <Section title="案件サマリー">
                <Labeled label="大会">第3回 高専起業家サミット（アイデア部門 ← 本来はスタートアップ部門で出す予定）</Labeled>
                <Labeled label="開催日">2026年2月23日（月・祝）・24日（火）</Labeled>
                <Labeled label="会場">一橋講堂（東京・千代田）</Labeled>
                <Labeled label="チーム">自分・もう1名のメンバー・リーダーの3名で出場</Labeled>
                <Labeled label="登壇">リーダーが本登壇／自分はサポート</Labeled>
                <Labeled label="位置付け">DCONメンター審査の<strong>5日後</strong>。本選前の中間アウトプットとして活用</Labeled>
                <div>
                    <Pill>アイデア部門</Pill>
                    <Pill>中間ピッチ</Pill>
                    <Pill>外部評価獲得</Pill>
                </div>
            </Section>

            {/* ── 発表資料 ── */}
            <Section title="発表資料">
                <p style={{ marginBottom: "0.6rem", color: palette.sub, fontSize: "0.95rem" }}>
                    当日使用した発表資料。スピーカーノートは後付。
                </p>
                <PdfCanvasPreview
                    file="DCON_KigyoukaSummit.pdf"
                    label="第3回 高専起業家サミット 発表資料"
                    caption="アイデア部門ピッチで使用"
                />
            </Section>

            {/* ── DCONとの関係 ── */}
            <Section title="DCONとの関係 ─ なぜ中間で出たのか">
                <p>
                    DCON本選に向けた仮説検証の途中で、<strong>外部の審査員から第三者評価を受け取る機会</strong>として
                    高専起業家サミットを活用した。
                    このときの課題設計は<strong>「人手不足 → ベテランの間接業務の圧迫」</strong>を起点に、
                    <strong>「既存業務の効率化」と「新人教育の効率化」</strong>の2軸で組んだバージョン。
                    DCON本選では、この設計が「スポットワーク」軸を加える／落とすの議論を経て大きく組み替わっていく。
                </p>
                <p style={{ marginTop: "0.6rem", color: palette.sub, fontSize: "0.95rem" }}>
                    ※ DCON本選用にどう設計を組み替えたか、メンバー間の激論については
                    {" "}
                    <Link to="/works/dcon" style={{ color: "#9cf" }}>
                        DCON本編ページ
                    </Link>
                    {" "}を参照。
                </p>
            </Section>

            {/* ── ナビ ── */}
            <Section title="関連">
                <Link
                    to="/works/dcon"
                    style={{
                        display: "block",
                        background: palette.card,
                        border: `1px solid ${palette.cardBorder}`,
                        borderLeft: "3px solid #9cf",
                        borderRadius: 10,
                        padding: "1rem 1.2rem",
                        color: palette.text,
                        textDecoration: "none",
                    }}
                >
                    <div style={{ fontSize: "0.75rem", color: palette.muted, marginBottom: 4 }}>
                        ← 親プロジェクト
                    </div>
                    <div style={{ fontSize: "1rem", color: "#fff", fontWeight: 600 }}>
                        DCON2026 本編
                    </div>
                    <div style={{ fontSize: "0.85rem", color: palette.sub, marginTop: 4 }}>
                        4位 / 文部科学大臣賞 / TOYOTA賞 / 企業評価額2億4000万円
                    </div>
                </Link>
            </Section>
        </div>
    );
}
