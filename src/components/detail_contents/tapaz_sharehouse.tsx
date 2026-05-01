import { Content } from "../shared/Contents";
import { Labeled, PdfPreview, Pill, Section, palette } from "./_detail_ui";
import TapazSeriesNav from "./_tapaz_series_nav";

export default function TapazSharehouseDetail({ work: _work }: { work: Content }) {
    return (
        <div style={{ color: palette.text, lineHeight: 1.8 }}>
            <Section title="案件サマリー">
                <Labeled label="クライアント">美馬合資会社 取締役 美馬香都子さん</Labeled>
                <Labeled label="テーマ">徳島県佐古地区・閉鎖デイサービス跡地を国際交流シェアハウスへ転用するアイデアソン</Labeled>
                <Labeled label="参加規模">参加者20名／建築士4名／ファシリテーター5名</Labeled>
                <Labeled label="開催">2025年5月（3月企画準備 → 4月集客 → 5月開催）</Labeled>
                <div>
                    <Pill>新規事業</Pill>
                    <Pill>需要検証</Pill>
                    <Pill>0→1</Pill>
                    <Pill>建築士招聘</Pill>
                    <Pill>国際交流</Pill>
                </div>
            </Section>

            <Section title="クライアントの本質課題">
                <p>
                    美馬さんは佐古エリアで <strong>閉鎖されたデイサービス施設をシェアハウスとして活用するプロジェクト</strong> を計画。
                    単なる住居ではなく、若年層・多国籍の人々が
                    <strong>国際的でエシカルな価値観を共有</strong> しながら暮らせる拠点にしたいという構想を持っていた。
                    一方で「実際に住みたいと思える具体的なシェアハウス像」が固まっておらず、
                    意思決定の前提となる一次情報が不足していた。
                </p>
            </Section>

            {/* ===== 提案フェーズ ===== */}
            <Section title="提案フェーズ ─ アイデアソンの位置付けと範囲を明文化">
                <p>
                    クライアントの「シェアハウスにしたい」という抽象オーダーを、
                    <strong>需要検証 + 設計フィードバック + 実現性確認</strong>
                    を一度に得られるWS設計として提案。提案書は
                    「<em>本プロジェクトに興味・関心を持つ参加者と共に、『実際に自分が住んでみたい』と思える具体的なシェアハウスのアイデアを考える</em>」
                    と位置付けを明記し、関係者間の認識齟齬を防ぐ役割も持たせた。
                </p>

                <h4 style={{ color: "#fff", marginTop: "1.4rem", marginBottom: "0.4rem" }}>
                    ① プロジェクト最終目的とWSの意義
                </h4>
                <p style={{ marginTop: 0 }}>
                    最終目的は <strong>「単なる住居ではなく、若年層・多国籍の人々が国際的でエシカルな価値観を共有し、交流しながら暮らせる拠点を作る」</strong>（提案書 p.3）。
                    アイデアソンは、その理想を考案するための <strong>多角的なアイデア収集と評価の場</strong> として位置付けた（p.4）。
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1rem" }}>
                    <PdfPreview file="美馬さん - 提案書.pdf" label="提案書" page={3} caption="プロジェクト最終目的" />
                    <PdfPreview file="美馬さん - 提案書.pdf" label="提案書" page={4} caption="WSの意義" />
                </div>

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ② プロジェクト全体像と担当範囲
                </h4>
                <p style={{ marginTop: 0 }}>
                    3月（企画準備）→ 4月（告知/集客）→ 5月（WS開催）→ 6月以降（案の具体化）の全体像を描き、
                    我々が責任を持つ範囲（青字）と美馬さん側で担う範囲を明確に分割（p.5・p.8）。
                    意思決定権限と運営作業の境界線を最初にすり合わせた。
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1rem" }}>
                    <PdfPreview file="美馬さん - 提案書.pdf" label="提案書" page={5} caption="プロジェクト全体像" />
                    <PdfPreview file="美馬さん - 提案書.pdf" label="提案書" page={8} caption="Tapaz が担う範囲（青字）" />
                </div>

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ③ 成功指標を「アイデア発掘」と「周知」の2軸で定義
                </h4>
                <p style={{ marginTop: 0 }}>
                    抽象的な「良いWS」を避けるため、定量的な成功指標を設置（p.7）。
                    アイデア面では <strong>4件以上の具体提案</strong> ＋ 事後アンケートで「住みたい」と答える参加者20名以上、
                    周知面では <strong>申込30名以上／告知媒体2箇所以上</strong>。
                </p>
                <PdfPreview file="美馬さん - 提案書.pdf" label="提案書" page={7} caption="成功指標と評価方法" />

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ④ タイムスケジュールとリスク
                </h4>
                <p style={{ marginTop: 0 }}>
                    180分のタイムスケジュール（p.10）に加え、現地が <strong>未通電</strong> である点や
                    参加者集客の不確実性をリスクとして提案書に明記（p.11）。事前に解決策（招待制併用・代替機材）まで盛り込んだ。
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1rem" }}>
                    <PdfPreview file="美馬さん - 提案書.pdf" label="提案書" page={10} caption="180分タイムスケジュール" />
                    <PdfPreview file="美馬さん - 提案書.pdf" label="提案書" page={11} caption="想定リスクと対処" />
                </div>
            </Section>

            {/* ===== 実行フェーズ ===== */}
            <Section title="実行フェーズ ─ 「準備ワーク → 個人ワーク → グループワーク」3段構成">
                <p>
                    アイデアソン本番は <strong>跡地そのものを会場</strong> にして開催。
                    180分を ① 準備ワーク（造詣を深める） → ② 個人ワーク（理想を膨らませる） → ③ グループワーク（建築士と具体化）
                    の3段で構成し、抽象 → 個人具体 → 集団具体 へ段階的に絞り込む設計にした。
                </p>

                <h4 style={{ color: "#fff", marginTop: "1.4rem", marginBottom: "0.4rem" }}>
                    ① イベント趣旨の共有 ─ なぜ国際交流／なぜエシカルか
                </h4>
                <p style={{ marginTop: 0 }}>
                    冒頭で美馬さんが構想の経緯を語り、徳島の人口あたり外国人比率（1.3%、全国2.8%対比）と
                    県内外国人内訳（ベトナム・中国・フィリピンなど）の客観データを示して
                    「なぜいま国際交流シェアハウスか」の納得感を作った。
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1rem" }}>
                    <PdfPreview file="シェアハウスワークショップ_当日スライド.pdf" label="当日スライド" page={16} caption="人口あたり外国人比率" />
                    <PdfPreview file="シェアハウスワークショップ_当日スライド.pdf" label="当日スライド" page={18} caption="徳島県内の外国人内訳" />
                </div>

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ② 3段構成の宣言とタイムスケジュール
                </h4>
                <p style={{ marginTop: 0 }}>
                    ①準備ワーク・②個人ワーク・③グループワークの3STEPを最初に宣言し、
                    各STEPに入るタイミングで対応するセクションをハイライトしたタイムスケジュールを毎回提示。
                    参加者が「いま全体のどこにいるか」を常に把握できるようにした。
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1rem" }}>
                    <PdfPreview file="シェアハウスワークショップ_当日スライド.pdf" label="当日スライド" page={28} caption="3STEP の宣言" />
                    <PdfPreview file="シェアハウスワークショップ_当日スライド.pdf" label="当日スライド" page={30} caption="タイムスケジュール（②ハイライト）" />
                </div>

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ③ STEP 1 準備ワーク：施設見学 → 思考タイム → 価値観の選択
                </h4>
                <p style={{ marginTop: 0 }}>
                    跡地そのものを会場にした強みを活かし、まず <strong>施設見学</strong>（実際の間取り・1Fスペースを体感）→ 思考タイム。
                    そのうえで「国際交流をする利点は？」を <strong>4つの選択肢＋オリジナル案</strong> から選び理由とセットで言語化させ、
                    ペアでインタビュー交換（2分×2）して言葉を磨く流れに設計した。
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1rem" }}>
                    <PdfPreview file="シェアハウスワークショップ_当日スライド.pdf" label="当日スライド" page={35} caption="施設見学" />
                    <PdfPreview file="シェアハウスワークショップ_当日スライド.pdf" label="当日スライド" page={39} caption="国際交流の利点ワーク（選択式）" />
                    <PdfPreview file="シェアハウスワークショップ_当日スライド.pdf" label="当日スライド" page={40} caption="ペアインタビュー" />
                </div>

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ④ STEP 2 個人ワーク：1Fスペースの理想を一言で
                </h4>
                <p style={{ marginTop: 0 }}>
                    両面ワークシートを使い、<strong>「ここがシェアハウスになった時の1Fの理想の使い方を一言で」</strong>
                    という制約を与えて発想を強制的に具体化。説明・イメージ図・選んだ要素とのつながりまで一枚にまとめさせた。
                </p>
                <PdfPreview file="シェアハウスワークショップ_当日スライド.pdf" label="当日スライド" page={45} caption="個人ワーク用ワークシート" />

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ⑤ 留意点の共有：「日本人:外国人=1:1」「エシカルライフ」
                </h4>
                <p style={{ marginTop: 0 }}>
                    グループワークに入る前に、クライアントが守りたい価値観の制約条件を提示。
                    <strong>日本人と外国人の比率を1:1に保つ</strong>こと、<strong>エシカルライフ（人・社会・地域・環境への配慮）</strong>
                    という方針を共有することで、提案がコンセプトから乖離しないようにした。
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1rem" }}>
                    <PdfPreview file="シェアハウスワークショップ_当日スライド.pdf" label="当日スライド" page={47} caption="エシカルライフの定義" />
                    <PdfPreview file="シェアハウスワークショップ_当日スライド.pdf" label="当日スライド" page={48} caption="価値観の共有" />
                </div>

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ⑥ STEP 3 グループワーク：建築士を巻き込む2段フェーズ
                </h4>
                <p style={{ marginTop: 0 }}>
                    70分のグループワークを <strong>① 共有/方針決め 15分 → ② 建築士も入れて具体化 45分</strong> の2段で運用。
                    想定住人（年齢・性別・国籍・職業・趣味・国際交流で得たいこと）と <strong>平日/休日の生活タイムライン</strong>、
                    <strong>住みたい家賃</strong> までワークシートで定量化させる設計にした。
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1rem" }}>
                    <PdfPreview file="シェアハウスワークショップ_当日スライド.pdf" label="当日スライド" page={53} caption="グループワーク2段運用" />
                    <PdfPreview file="シェアハウスワークショップ_当日スライド.pdf" label="当日スライド" page={57} caption="想定住人＋生活タイムラインシート" />
                </div>

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ⑦ 建築士の動線設計とハサミの法則
                </h4>
                <p style={{ marginTop: 0 }}>
                    建築士4名が <strong>各グループを15分ずつ巡回 + Free 枠</strong> で回るタイムテーブルを図示し、
                    最終発表は <strong>「ハサミの法則：はっきり・最後まで・短く」</strong> を再掲して時間内に収まる議論を促した。
                </p>
                <PdfPreview file="シェアハウスワークショップ_当日スライド.pdf" label="当日スライド" page={60} caption="建築士の巡回スケジュール" />
            </Section>

            <Section title="成果">
                <ul style={{ paddingLeft: "1.2rem" }}>
                    <li style={{ marginBottom: "0.4rem" }}>
                        20名から <strong>5つの具体的なシェアハウス案</strong> を抽出（提案書の成功指標 4件以上をクリア）。
                    </li>
                    <li style={{ marginBottom: "0.4rem" }}>
                        想定住人像・生活タイムライン・想定家賃・1Fスペース活用方針を含む、
                        <strong>意思決定可能なレベルの一次情報</strong> をクライアントに納品。
                    </li>
                    <li style={{ marginBottom: "0.4rem" }}>
                        建築士4名のフィードバックが入った状態でアウトプットが出るため、
                        実現可能性のフィルタを通った提案のみが残る構造になった。
                    </li>
                    <li>
                        単発WSにとどまらず、<strong>需要検証 → 設計フィードバック → 実現性検証</strong> までを一連で提供。
                    </li>
                </ul>
            </Section>

            <TapazSeriesNav currentId="tapaz_sharehouse" />
        </div>
    );
}
