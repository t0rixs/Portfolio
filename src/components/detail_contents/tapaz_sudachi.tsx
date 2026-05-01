import { Content } from "../shared/Contents";
import { Labeled, PdfPreview, Pill, Section, palette } from "./_detail_ui";
import TapazSeriesNav from "./_tapaz_series_nav";

export default function TapazSudachiDetail({ work: _work }: { work: Content }) {
    return (
        <div style={{ color: palette.text, lineHeight: 1.8 }}>
            <Section title="案件サマリー">
                <Labeled label="プロジェクト">徳島県神山町・Green &amp; Social Tourism「すだちPJ」</Labeled>
                <Labeled label="案件種別">2日間合宿の最終コンテンツとして、関係人口化を促すワークショップを設計・実施</Labeled>
                <Labeled label="参加対象">企業の副業人材・神山まるごと高専生など</Labeled>
                <Labeled label="WS時間">3時間（13:00〜15:50）／6STEP構成</Labeled>
                <div>
                    <Pill>関係人口</Pill>
                    <Pill>地方創生</Pill>
                    <Pill>体験の自分ごと化</Pill>
                    <Pill>合宿ツアー組込み</Pill>
                    <Pill>1次産業 × ビジネス</Pill>
                </div>
            </Section>

            <Section title="クライアントの本質課題">
                <p>
                    神山町のすだち産地では <strong>農家の労働力不足</strong> が深刻化しており、
                    プロジェクトとしては「企業の副業人材や高専生を活かした
                    <strong>持続可能なビジネスモデル</strong>を作る」ことが最終目的。
                    そのために合宿型ツアーで参加者を呼び込んでも、
                    2日間の体験が <strong>非日常の特別な思い出で終わってしまい、
                    継続的な援農や神山との関わりに接続しない</strong> という構造的課題があった。
                </p>
            </Section>

            {/* ===== 提案フェーズ ===== */}
            <Section title="提案フェーズ ─ 「合宿の出口」をWSとして差し込む">
                <p>
                    提案書では、Tapazのスタンスを
                    <em>「問いを立て、共に考え、次の一歩を生む」</em> と明文化（提案書 p.2）。
                    単なるレクリエーションではなく、
                    <strong>参加者一人ひとりが地域課題を“自分ごと”として持ち帰る場</strong> として
                    WSを位置付けた。
                </p>

                <h4 style={{ color: "#fff", marginTop: "1.4rem", marginBottom: "0.4rem" }}>
                    ① プロジェクトの最終目的との接続
                </h4>
                <p style={{ marginTop: 0 }}>
                    プロジェクト最終目的（副業人材・高専生による <strong>労働力不足解消ビジネスモデル構築</strong> ＋
                    現地事業者の主体的・継続的取組への伴走）と
                    合宿の目的（循環型社会・地域とある働き方を学ぶ）を整理し、
                    WSが担うべき役割を <strong>「問いに対して自分なりの解を持ち、継続的な援農・神山への関与に踏み出す起点」</strong>
                    と明確化（p.3）。
                </p>
                <PdfPreview
                    file="すだちPJ_提案書.pdf"
                    label="提案書"
                    page={3}
                    caption="プロジェクト最終目的と合宿目的の整理"
                />

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ② WSの意義
                </h4>
                <p style={{ marginTop: 0 }}>
                    WSのゴールは <strong>「企業人として、個人として、これからの社会に何ができるのか
                    アウトプットして自分なりの解を持ってもらう」</strong>。
                    その解を起点にして、合宿後の継続的な援農・神山への関与にまで橋を架けることを意図した（p.4）。
                </p>
                <PdfPreview
                    file="すだちPJ_提案書.pdf"
                    label="提案書"
                    page={4}
                    caption="WSの意義（合宿後の関係人口化への接続）"
                />
            </Section>

            {/* ===== 実行フェーズ ===== */}
            <Section title="実行フェーズ ─ 体験 → 価値観 → 自分のリソース → 問い → 行動 の6STEP設計">
                <p>
                    3時間で <strong>「体験を自分ごと化し、1年間のアクションプランまで落とす」</strong>
                    ところまで運ぶため、
                    抽象 → 具体を6段階で順番に積み上げる構成にした。
                    各STEPの冒頭で同じタイムスケジュールスライドを <strong>該当箇所をハイライトして再提示</strong>し、
                    参加者が自分の現在地を常に把握できるようにしている。
                </p>

                <h4 style={{ color: "#fff", marginTop: "1.4rem", marginBottom: "0.4rem" }}>
                    ① イントロ：「2日間の体験を自分ごと化」する宣言
                </h4>
                <p style={{ marginTop: 0 }}>
                    冒頭で「2日間の体験は一度きりの特別な思い出ではなく、
                    これまでの生活・これからの毎日とつながっている」というメッセージを提示。
                    WSのゴールを <strong>「神山と自分のワクワクするような関わり方を見つけ、
                    これからの神山との関わりプランを作る」</strong> に統一した。
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1rem" }}>
                    <PdfPreview file="すだちワークショップ_当日資料.pdf" label="当日資料" page={5} caption="2日間の体験を自分ごと化" />
                    <PdfPreview file="すだちワークショップ_当日資料.pdf" label="当日資料" page={8} caption="プログラム説明（3時間6STEP）" />
                </div>

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ② STEP 1 発見整理（25min）── 感情と気づきの切り分け
                </h4>
                <p style={{ marginTop: 0 }}>
                    神山到着後に感じたことを、<strong>2軸マトリクス（楽しみ ⇄ 使命感 × ポジティブ ⇄ ネガティブ）</strong>
                    で付箋分類。
                    会話しながら追加し続けることで <strong>感情と気づきを言語のレベルで切り分ける</strong>
                    狙いを置いた。
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1rem" }}>
                    <PdfPreview file="すだちワークショップ_当日資料.pdf" label="当日資料" page={10} caption="STEP1：発見整理 タイムスケジュール" />
                    <PdfPreview file="すだちワークショップ_当日資料.pdf" label="当日資料" page={13} caption="2軸マトリクスでの付箋分類" />
                </div>

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ③ STEP 2 自分の理想（10min）── 価値観の言語化
                </h4>
                <p style={{ marginTop: 0 }}>
                    「あなたが <strong>今</strong> 大切にしている価値観は？」「これから <strong>今後</strong> 大切にしたい価値観は？」の
                    2問でワークシートを埋め、
                    神山体験を <strong>自分の人生軸の文脈に乗せる</strong> 準備をする。
                    例示には「人に対して嘘をつかず信頼関係を大切にする → 短期的でなく継続して関わり続けられる生き方」など、
                    具体的に踏み込んだサンプルを提示した。
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1rem" }}>
                    <PdfPreview file="すだちワークショップ_当日資料.pdf" label="当日資料" page={16} caption="STEP2：自分の理想 タイムスケジュール" />
                    <PdfPreview file="すだちワークショップ_当日資料.pdf" label="当日資料" page={19} caption="価値観ワークシート記入例" />
                </div>

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ④ STEP 3 リソース探し（35min）── 自分 × 神山の交点を作る
                </h4>
                <p style={{ marginTop: 0 }}>
                    自分の <strong>スキル／好き／持っている課題</strong> を付箋で書き出し、
                    並行して「神山リスト」から気になる項目を抽出。
                    模造紙の中央に <strong>神山の課題</strong>を集め、
                    周囲に自分のリソース付箋を貼り、<strong>掛け合わせられそうな組み合わせを線で物理的に繋ぐ</strong>
                    という手作業の構造化により、抽象的な「貢献したい」を具体的な接点まで落とした。
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1rem" }}>
                    <PdfPreview file="すだちワークショップ_当日資料.pdf" label="当日資料" page={22} caption="STEP3 狙い：リソースの可視化" />
                    <PdfPreview file="すだちワークショップ_当日資料.pdf" label="当日資料" page={25} caption="自分のリソース＋神山リスト" />
                    <PdfPreview file="すだちワークショップ_当日資料.pdf" label="当日資料" page={28} caption="課題×リソースを線で繋ぐ" />
                </div>

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ⑤ STEP 4 深掘り（30min）── Why me? / Why here? / Why now?
                </h4>
                <p style={{ marginTop: 0 }}>
                    出てきた問いを <strong>「Why me? / Why here? / Why now?」</strong> の3視点で深掘りカードに整理。
                    「神山に貢献ver（デザインスキル × 直売所の魅力発信）」「自分自身を見つめ直すver（PC中心生活 × 自然の中で身体を使う豊かさ）」
                    という具体例で、貢献軸と自己軸の両方を提示した。
                    その後 <strong>(2分力説 + 2分FB) × 4ペア</strong> のピッチ＆フィードバックで言葉を磨き、撮影してLINEアルバム共有まで含めた。
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1rem" }}>
                    <PdfPreview file="すだちワークショップ_当日資料.pdf" label="当日資料" page={31} caption="STEP4：問いを立てる" />
                    <PdfPreview file="すだちワークショップ_当日資料.pdf" label="当日資料" page={34} caption="Why me? / here? / now? の例（貢献ver / 自分ver）" />
                    <PdfPreview file="すだちワークショップ_当日資料.pdf" label="当日資料" page={37} caption="(2+2)min × 4 のピッチ&FB" />
                </div>

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ⑥ STEP 6 アクション決定（50min）── 行動心理学で「続く」プランへ
                </h4>
                <p style={{ marginTop: 0 }}>
                    最終STEPでは <strong>明日 → 1週間後 → 1ヶ月後 → 3ヶ月後 → 半年後 → 1年後</strong> の時間軸ワークシートで
                    具体的アクションを段階的に書き出す。
                    その下敷きとして <strong>3つの行動心理学</strong>を提示：
                    <strong>Tiny Habits</strong>（小さく始める）／<strong>If-Then Planning</strong>（トリガーを決める）／<strong>Positive Reinforcement</strong>（ご褒美を設定）。
                    記入例には実際の参加者プランを掲載し、抽象的でない実行可能なフォーマットを示した。
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1rem" }}>
                    <PdfPreview file="すだちワークショップ_当日資料.pdf" label="当日資料" page={40} caption="STEP6：アクション決定" />
                    <PdfPreview file="すだちワークショップ_当日資料.pdf" label="当日資料" page={43} caption="行動心理学の3ポイント" />
                    <PdfPreview file="すだちワークショップ_当日資料.pdf" label="当日資料" page={49} caption="1年間アクションプラン記入例" />
                </div>
            </Section>

            <Section title="成果">
                <ul style={{ paddingLeft: "1.2rem" }}>
                    <li style={{ marginBottom: "0.4rem" }}>
                        2日間の合宿体験を <strong>「自分の価値観 × 自分のリソース × 神山の課題」</strong> に接続させ、
                        参加者全員が <strong>具体的な1年間アクションプラン</strong> を持ち帰る状態を実現。
                    </li>
                    <li style={{ marginBottom: "0.4rem" }}>
                        「Why me? / here? / now?」という再現性の高いフレームと
                        行動心理学を組み合わせたフォーマットを納品し、
                        <strong>ツアー事業者の継続コンテンツ</strong>として再利用可能に。
                    </li>
                    <li>
                        単発の観光体験を <strong>関係人口化への入口</strong> へと変換する設計を実証した。
                    </li>
                </ul>
            </Section>

            <TapazSeriesNav currentId="tapaz_sudachi" />
        </div>
    );
}
