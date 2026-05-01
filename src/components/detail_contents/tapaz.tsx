import { Link } from "react-router-dom";
import { Content } from "../shared/Contents";
import { Pill, Section, Stat, palette } from "./_detail_ui";
import { tapazSeries } from "./_tapaz_series";

export default function TapazDetail({ work: _work }: { work: Content }) {
    return (
        <div style={{ color: palette.text, lineHeight: 1.8 }}>
            {/* ── 概要 ── */}
            <Section title="概要">
                <p style={{ marginBottom: "1rem" }}>
                    <strong>Tapaz</strong> は、「学生の視点を企業に対して有償の価値として提供する」ことを検証した
                    学生主導の事業活動。代表として個人事業主登録し、
                    営業・WS設計・ファシリテーション・納品・請求まで一気通貫で運営した。
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 8 }}>
                    <Stat value="2年" label="活動期間（2023.10–2025.10）" />
                    <Stat value="4名" label="チーム規模（代表）" />
                    <Stat value="7社" label="延べ提携企業" />
                    <Stat value="11件" label="延べ受注件数" />
                    <Stat value="3件" label="紹介経由の受注" />
                    <Stat value="約60万円" label="累計売上" />
                    <Stat value="3万 → 10万円" label="1件あたり単価の推移" />
                </div>
            </Section>

            {/* ── 担当領域 ── */}
            <Section title="担当領域">
                <div>
                    <Pill>営業・企業折衝</Pill>
                    <Pill>WS設計（構成／問い／スライド）</Pill>
                    <Pill>当日ファシリテーション</Pill>
                    <Pill>事後レポート・成果物納品</Pill>
                    <Pill>請求・経理など事業運営</Pill>
                </div>
                <p style={{ marginTop: "0.8rem", color: palette.sub, fontSize: "0.95rem" }}>
                    立ち上げ時にチームで2日間かけて活動の目的・「学生の視点を価値にする」とは何を意味するのかを言語化。
                    意思決定の軸を揃えたうえで、各案件は上記領域を全員で分担する形で運営した。
                </p>
            </Section>

            {/* ── 受注プロセス ── */}
            <Section title="受注の作り方">
                <ul style={{ paddingLeft: "1.2rem" }}>
                    <li style={{ marginBottom: "0.5rem" }}>
                        徳島県内の経営者・企業との接点づくりからスタートし、
                        <strong>地域課題を学生主導で議論するワークショップ</strong>を実施。反応の良かった2社が初期顧客に。
                    </li>
                    <li style={{ marginBottom: "0.5rem" }}>
                        当初は「課題を聞いて解決策を出す」モデルを想定していたが、現場での反応から
                        <strong>「学生と一緒に考える時間そのものに価値がある」</strong>
                        という仮説に切り替え、WS提供型にピボット。
                    </li>
                    <li>
                        受注後の活動レポートを note で公開し続けたことで、
                        <strong>note経由および紹介経由で計3件の追加受注</strong>を獲得した。
                    </li>
                </ul>
            </Section>

            {/* ── 個別WSへのリンク（時系列タイムライン） ── */}
            <Section title="ワークショップ事例（時系列）">
                <p style={{ color: palette.sub, marginBottom: "1.5rem" }}>
                    1回あたり参加者10〜20名、所要時間は3時間〜2日。クライアントの本質課題に合わせて設計を都度組み直した。
                    Chapterを順に辿ると、Tapazが「最初の有償案件 → 0→1の需要検証 → 体験設計」と進化した過程が追えます。
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {tapazSeries.map((c) => (
                        <Link
                            key={c.id}
                            to={`/works/${c.id}`}
                            style={{
                                display: "block",
                                background: palette.card,
                                border: `1px solid ${palette.cardBorder}`,
                                borderLeft: `3px solid ${c.accent}`,
                                borderRadius: 10,
                                padding: "1.2rem 1.4rem",
                                color: palette.text,
                                textDecoration: "none",
                                transition: "border-color 0.2s, transform 0.2s",
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.borderColor = c.accent;
                                e.currentTarget.style.transform = "translateX(2px)";
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.borderColor = palette.cardBorder;
                                e.currentTarget.style.transform = "translateX(0)";
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 4 }}>
                                <span style={{ fontFamily: "monospace", fontSize: "0.8rem", color: c.accent, fontWeight: 700 }}>
                                    {c.chapter}
                                </span>
                                <span style={{ fontSize: "0.75rem", color: palette.muted }}>{c.period}</span>
                            </div>
                            <h3 style={{ margin: "0.1rem 0 0.3rem", fontSize: "1.2rem", color: "#fff", fontWeight: 600 }}>
                                {c.title}
                            </h3>
                            <p style={{ margin: "0 0 0.6rem", color: palette.sub, fontSize: "0.9rem" }}>
                                {c.subtitle}
                            </p>
                            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                <span style={{ color: c.accent, fontSize: "0.85rem" }}>詳細を見る →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>

            {/* ── 学び・撤退判断 ── */}
            <Section title="撤退判断と学び">
                <p style={{ marginBottom: "0.6rem" }}>
                    受注は安定する一方で、
                    <strong>「WSの価値はクライアントの実益（売上・コスト削減）として可視化しづらく、単価とスケールに構造的上限がある」</strong>
                    という事業上の限界に直面した。
                </p>
                <p>
                    「学生の価値を最大化し還元する」という当初目的に対して、現在の事業構造ではスケールできないと判断し、
                    成果と対価を結びつけやすい領域（ディープラーニングコンテスト等）に活動を移した。
                    Tapazは現在、後続メンバーに引き継ぎ法人化準備中。
                </p>
            </Section>

            {/* ── 持ち帰り ── */}
            <Section title="この活動から持ち帰った力">
                <ul style={{ paddingLeft: "1.2rem" }}>
                    <li style={{ marginBottom: "0.4rem" }}>
                        <strong>クライアントの表面的依頼から本質課題を再定義する</strong>
                        ヒアリング・提案力（葬儀WSの設計再構築が代表例）
                    </li>
                    <li style={{ marginBottom: "0.4rem" }}>
                        現地調査・ターゲットヒアリング・実証WSまでを自走で組み立てる
                        <strong>0→1の需要検証スキル</strong>（シェアハウス案件）
                    </li>
                    <li style={{ marginBottom: "0.4rem" }}>
                        営業・契約・請求・納品まで含めた
                        <strong>小規模事業のオペレーション運営経験</strong>
                    </li>
                    <li>
                        事業の構造的限界を直視し、
                        <strong>続ける／撤退するの意思決定を下す経営判断</strong>
                    </li>
                </ul>
            </Section>
        </div>
    );
}
