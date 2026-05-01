import { Content } from "../shared/Contents";
import { Labeled, PdfPreview, Pill, Section, palette } from "./_detail_ui";
import TapazSeriesNav from "./_tapaz_series_nav";

export default function TapazFuneralDetail({ work: _work }: { work: Content }) {
    return (
        <div style={{ color: palette.text, lineHeight: 1.8 }}>
            <Section title="案件サマリー">
                <Labeled label="クライアント">葬儀社（岡さん／代表取締役）</Labeled>
                <Labeled label="案件種別">社内向けワークショップ／全3回シリーズ</Labeled>
                <Labeled label="参加規模">1回あたり社員約12名 × 3回（社員全体を分割実施）</Labeled>
                <div>
                    <Pill>BtoB</Pill>
                    <Pill>社内変革</Pill>
                    <Pill>シリーズ設計</Pill>
                    <Pill>リピート受注</Pill>
                </div>
            </Section>

            <Section title="クライアントの本質課題">
                <p>
                    最初の依頼内容は「宗教儀礼が薄れる中で新しい葬儀の形を考えたい」という
                    一見テーマ型のオーダー。だが社長と1回目実施後に再ヒアリングした結果、本来の狙いは
                    <strong>「社員にもっと未来軸で自社事業を語れるようになってほしい」</strong>
                    という社内変革にあることが判明した。
                </p>
                <p>
                    そこで2回目以降は、表層テーマ（葬儀の形）に答えるのではなく、
                    <strong>社員が自社の未来を自走的に語れるようになる思考トレーニング</strong>
                    として WS を再設計した。
                </p>
            </Section>

            {/* ===== WS 01 ===== */}
            <Section title="WS 01 ─ 一時間の葬儀プラスアルファ案を考える">
                <p>
                    <strong>ゴール</strong>：3ヶ月後に実現できる「一時間の葬儀＋α」案を、社員自身の手で形にする。
                </p>

                <h4 style={{ color: "#fff", marginTop: "1.4rem", marginBottom: "0.4rem" }}>
                    ① イベントゴールとタイムスケジュール
                </h4>
                <p style={{ marginTop: 0 }}>
                    冒頭で「3ヶ月後に1時間で実現可能な葬儀＋α」というゴールを共有し、
                    そこに辿り着くための時間配分を提示。
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1rem" }}>
                    <PdfPreview
                        file="岡さん1stWS_当日スライド.pdf"
                        label="1st 当日スライド"
                        page={5}
                        caption="イベントゴール"
                    />
                    <PdfPreview
                        file="岡さん1stWS_当日スライド.pdf"
                        label="1st 当日スライド"
                        page={6}
                        caption="タイムスケジュール"
                    />
                </div>

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ② ワールドカフェ ─ 5分で分析、10分で案出し
                </h4>
                <p style={{ marginTop: 0 }}>
                    3テーブル構成。メンバーを入れ替えながら、各テーブルで
                    <strong>5分で葬儀の分析 → 10分でテーブルの案出し</strong> を回す。
                    短い時間に区切ることで、思考が止まらず議論が広がる構造に。
                </p>

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ③ ブレインライティング ─ 一人で書き、4人で回す
                </h4>
                <p style={{ marginTop: 0 }}>
                    まず一人で案を書き、テーブル内4人で紙を回し合いながら
                    他者の案に追記・更新していく形式。
                </p>
                <PdfPreview
                    file="岡さん1stWS_当日スライド.pdf"
                    label="1st 当日スライド"
                    page={27}
                    caption="ブレインライティングの手法説明"
                />

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ④ 振り返り → A4一枚で個人発表
                </h4>
                <p style={{ marginTop: 0 }}>
                    自分が発案した案がどの観点でどう変わったかを確認し、
                    最終的に A4 一枚にまとめて発表。実際のアウトプット例を掲載。
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
                    {[31, 32, 33, 34, 35, 36, 37, 38].map((p) => (
                        <PdfPreview
                            key={p}
                            file="岡さん1stWS_当日スライド.pdf"
                            label="1st 当日スライド"
                            page={p}
                            caption={`参加者アイデア ${p - 30}`}
                        />
                    ))}
                </div>
            </Section>

            {/* ===== WS 02 ===== */}
            <Section title="WS 02 ─ ヒアリング起点で「丁寧に深ぼる」WSへ再設計">
                <p>
                    1回目は依頼者ヒアリングが浅く、「深掘りと実現性を考える時間が足りなかった」という反省があった。
                    そこでまずオンライン打ち合わせを実施したうえで、
                    <strong>WS提案書</strong> を作成して提出。
                    クライアントの本来の狙い（社員の意識変革）に正面から応える形で構造を全面刷新した。
                </p>

                <h4 style={{ color: "#fff", marginTop: "1.4rem", marginBottom: "0.4rem" }}>
                    ① 提案書 ─ プロジェクト最終目的とWSの位置付けを言語化
                </h4>
                <p style={{ marginTop: 0 }}>
                    プロジェクトの最終目的を
                    「未来にふさわしい葬儀の形を築くために、<strong>現場で働く一人ひとりが自らの手で業界を変えていく意識を持つこと</strong>」と定義（p.3）。
                    WSはその意識変革の起点として位置付け、3月（企画準備）→ 4月（WS開催）→ 5月以降（継続・発展）の全体像の中で
                    我々が担う範囲（WS設計・運営・成果まとめ・次回テーマ決定）を明確化（p.5・p.7）。
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1rem" }}>
                    <PdfPreview
                        file="岡さん2ndWS_提案書.pdf"
                        label="2nd 提案書"
                        page={3}
                        caption="プロジェクト最終目的"
                    />
                    <PdfPreview
                        file="岡さん2ndWS_提案書.pdf"
                        label="2nd 提案書"
                        page={5}
                        caption="プロジェクト全体像 / 担当範囲"
                    />
                    <PdfPreview
                        file="岡さん2ndWS_提案書.pdf"
                        label="2nd 提案書"
                        page={8}
                        caption="提案タイムスケジュール"
                    />
                </div>

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ② 当日 ─ 「葬儀の変化 → 未来予測 → 身近に落とし込む」3段階フロー
                </h4>
                <p style={{ marginTop: 0 }}>
                    1回目で発見した「実現性議論まで届かない」課題を解消するため、
                    <strong>抽象（歴史・社会構造）と具体（自社の10年後）を往復する3段階</strong>に再構成。
                    イベントのゴールを「10年後のセレモニー心の姿を想像する」と具体化し、
                    各STEPと所要時間をタイムスケジュール上で対応させた。
                </p>
                <PdfPreview
                    file="岡さん2ndWS_当日スライド.pdf"
                    label="2nd 当日スライド"
                    page={14}
                    caption="イベントのゴール"
                />
                <PdfPreview
                    file="岡さん2ndWS_当日スライド.pdf"
                    label="2nd 当日スライド"
                    page={15}
                    caption="3段階フロー（① 葬儀の変化 ② 未来予測 ③ 身近に落とし込む）"
                />

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ③ STEP 1：葬儀の歴史を時代分担でリサーチ → 対話
                </h4>
                <p style={{ marginTop: 0 }}>
                    「葬儀はなぜ生まれたのか」「現代の葬儀は役割を果たしているのか」をテーブルで対話。
                    <strong>縄文〜古墳／〜江戸／江戸〜現代</strong> の3時代を役割分担でリサーチし、
                    メモを30秒ずつ回して情報を共有 → 全員で対話、という流れで歴史的視点を全員に揃えた。
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1rem" }}>
                    <PdfPreview file="岡さん2ndWS_当日スライド.pdf" label="2nd 当日スライド" page={31} caption="お題：葬儀はなぜ生まれたのか" />
                    <PdfPreview file="岡さん2ndWS_当日スライド.pdf" label="2nd 当日スライド" page={38} caption="時代分担リサーチ（3時代）" />
                </div>

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ④ STEP 2：PEST分析で10年後を予測
                </h4>
                <p style={{ marginTop: 0 }}>
                    葬儀領域を一旦離れ、政治・経済・社会・技術の <strong>PEST分析</strong> で
                    社会全体の10年後を構造的に予測。学生がGPTを活用してPEST分析を行い、
                    そこから得た情報をもとに参加者がグループで対話 → 模造紙にメモする手順を設計した。
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1rem" }}>
                    <PdfPreview file="岡さん2ndWS_当日スライド.pdf" label="2nd 当日スライド" page={47} caption="PEST分析の説明" />
                    <PdfPreview file="岡さん2ndWS_当日スライド.pdf" label="2nd 当日スライド" page={49} caption="未来予測ワークの進め方" />
                </div>

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ⑤ STEP 3：身近に落とし込み → 個人発表
                </h4>
                <p style={{ marginTop: 0 }}>
                    抽象議論で得た視点を「セレモニー心の10年後」に落とし込む個人ワーク（25分）→ 発表会。
                    抽象 ↔ 具体を強制的に往復させる構造により、
                    <strong>社員自身が自社の未来を語る</strong> ところまで議論を運べる設計にした。
                </p>
                <PdfPreview
                    file="岡さん2ndWS_当日スライド.pdf"
                    label="2nd 当日スライド"
                    page={56}
                    caption="STEP 3：セレモニー心の10年後"
                />
            </Section>

            {/* ===== WS 03 ===== */}
            <Section title="WS 03 ─ 「変わるもの／変わらないもの」へ問いを進化させる">
                <p>
                    2回目の構造（葬儀の変化 → 未来予測 → 身近に落とし込む）が非常に完成度が高かったため、
                    3回目は <strong>骨格を維持したままデザインと問いを磨き込む方針</strong> に。
                    1stと2ndの実際のアウトプットを冒頭で紹介して、シリーズの蓄積を見せる構成にした。
                </p>

                <h4 style={{ color: "#fff", marginTop: "1.4rem", marginBottom: "0.4rem" }}>
                    ① 過去回の蓄積をスタートラインに
                </h4>
                <p style={{ marginTop: 0 }}>
                    2回目の参加者アウトプット（10年後の社会・葬儀業界の予測）を引用紹介。
                    「丁寧に深ぼって考えるWHへ」というスタンスを今回も継承する宣言から始めることで、
                    シリーズ全体の連続性を担保した。
                </p>
                <PdfPreview
                    file="岡さん3rdWS_当日スライド.pdf"
                    label="3rd 当日スライド"
                    page={9}
                    caption="2nd 参加者アウトプットの引用"
                />

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ② STEP 1 を「変わるもの／変わらないもの」へ昇華
                </h4>
                <p style={{ marginTop: 0 }}>
                    2回目では「葬儀の変化について考える」だった STEP 1 を、
                    <strong>「変わるもの／変わらないもの」</strong> という軸に置き換え、
                    時代別リサーチで <strong>「変わった要因 / 変わる前の状態 / 変わった後の状態」</strong> をワークシートに整理。
                    その上で「変わらない葬儀の意義とは？」という問いを設けて、
                    <strong>表層の変化 → 不変の本質</strong> へ抽象度を引き上げる構造を追加した。
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1rem" }}>
                    <PdfPreview file="岡さん3rdWS_当日スライド.pdf" label="3rd 当日スライド" page={20} caption="時代別「変わった要因」シート" />
                    <PdfPreview file="岡さん3rdWS_当日スライド.pdf" label="3rd 当日スライド" page={23} caption="変わらない葬儀の「意義」とは？" />
                </div>

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ③ デザイン・導線を全面リファイン
                </h4>
                <p style={{ marginTop: 0 }}>
                    タイムスケジュールはより読みやすい一覧形式へ刷新、
                    各STEPの目的表示を簡潔な番号付き表記（❶❷❸）に統一、
                    アイスブレイクのお題も「休日の過ごし方／今週の Good & New／高校時代の思い出」と
                    親しみやすい複数選択式に変更。<strong>議論密度を落とさずに当日の導入摩擦を減らす</strong> 調整を入れた。
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1rem" }}>
                    <PdfPreview file="岡さん3rdWS_当日スライド.pdf" label="3rd 当日スライド" page={14} caption="刷新したタイムスケジュール" />
                    <PdfPreview file="岡さん3rdWS_当日スライド.pdf" label="3rd 当日スライド" page={17} caption="アイスブレイクの選択式お題" />
                </div>
            </Section>

            <Section title="成果">
                <ul style={{ paddingLeft: "1.2rem" }}>
                    <li style={{ marginBottom: "0.4rem" }}>
                        社長から「社員がここまで考えられるとは思わなかった」とのフィードバックを獲得。
                    </li>
                    <li style={{ marginBottom: "0.4rem" }}>
                        2回目・3回目への <strong>リピート発注</strong> へ繋がり、シリーズ案件として継続。
                    </li>
                    <li>他のクライアントへの紹介経由の受注にも繋がった。</li>
                </ul>
            </Section>

            <TapazSeriesNav currentId="tapaz_funeral" />
        </div>
    );
}
