import { Content } from "../shared/Contents";
import { Labeled, Pill, Section, palette } from "./_detail_ui";

const BASE = import.meta.env.BASE_URL;

type Panel = {
    src: string;
    label: string;            // 例: "Before" / "After" / "参考" / "適用案"
    labelColor?: string;      // バッジ色
    title?: string;           // 画像上部の見出し
    note?: string;            // 画像下の詳細キャプション
};

function Panel({ p, maxH = 220 }: { p: Panel; maxH?: number }) {
    const color = p.labelColor ?? "rgba(255,255,255,0.18)";
    return (
        <div style={{ flex: "1 1 240px", maxWidth: 360, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.3rem" }}>
                <span style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    padding: "0.15rem 0.5rem",
                    borderRadius: 4,
                    background: color,
                    color: "#fff",
                }}>{p.label}</span>
                {p.title && (
                    <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>{p.title}</span>
                )}
            </div>
            <img
                src={`${BASE}${p.src}`}
                alt={p.title ?? p.label}
                style={{
                    width: "100%",
                    maxHeight: maxH,
                    objectFit: "contain",
                    objectPosition: "top",
                    borderRadius: 6,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "#0c0c0c",
                    display: "block",
                }}
            />
            {p.note && (
                <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", margin: "0.3rem 0 0", lineHeight: 1.5 }}>
                    {p.note}
                </p>
            )}
        </div>
    );
}

/** Before → After (もしくは 参考 → 適用案) を矢印と改善ポイント付きで並べる */
function BeforeAfter({
    before,
    after,
    proposals,
    maxH = 220,
}: {
    before: Panel;
    after: Panel;
    proposals?: string[];
    maxH?: number;
}) {
    return (
        <div style={{ margin: "0.8rem 0 0" }}>
            <div style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.6rem",
                flexWrap: "wrap",
            }}>
                <Panel p={before} maxH={maxH} />
                <div style={{
                    alignSelf: "center",
                    fontSize: "1.4rem",
                    color: "#9cf",
                    fontWeight: 700,
                    padding: "0 0.2rem",
                }}>→</div>
                <Panel p={after} maxH={maxH} />
            </div>
            {proposals && proposals.length > 0 && (
                <div style={{
                    marginTop: "0.6rem",
                    padding: "0.55rem 0.8rem",
                    background: "rgba(156,207,255,0.06)",
                    border: "1px solid rgba(156,207,255,0.2)",
                    borderRadius: 6,
                }}>
                    <div style={{ fontSize: "0.72rem", color: "#9cf", fontWeight: 700, marginBottom: "0.3rem", letterSpacing: "0.05em" }}>
                        提案した改善ポイント
                    </div>
                    <ul style={{ margin: 0, paddingLeft: "1.1rem", fontSize: "0.85rem", lineHeight: 1.6 }}>
                        {proposals.map((t, i) => <li key={i} style={{ marginBottom: "0.15rem" }}>{t}</li>)}
                    </ul>
                </div>
            )}
        </div>
    );
}

/** 単一画像をコンパクトに表示 */
function SinglePanel({ p, maxH = 220 }: { p: Panel; maxH?: number }) {
    return (
        <div style={{ margin: "0.8rem 0 0", display: "flex", justifyContent: "flex-start" }}>
            <Panel p={p} maxH={maxH} />
        </div>
    );
}

export default function HandyDetail({ work: _work }: { work: Content }) {
    return (
        <div style={{ color: palette.text, lineHeight: 1.8 }}>
            <Section title="案件サマリー">
                <Labeled label="企業">Handy株式会社（高校求人票のデジタル管理SaaS）</Labeled>
                <Labeled label="期間">2025年3月1日〜31日（1ヶ月間）</Labeled>
                <Labeled label="ポジション">コーポレート部所属／COO直属で動く裁量型インターン</Labeled>
                <Labeled label="企業フェーズ">創業2023年・100名未満のベンチャー／高卒新卒求職者の約7割が利用するサービスへ急成長中</Labeled>
                <div>
                    <Pill>ビジネス職</Pill>
                    <Pill>UI/UX</Pill>
                    <Pill>社内ツール開発</Pill>
                    <Pill>市場リサーチ</Pill>
                    <Pill>新規事業提案</Pill>
                </div>
                <p style={{ marginTop: "0.8rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                    関連リンク：
                    <a href="https://handy.school/corporate" target="_blank" rel="noopener noreferrer" style={{ color: "#9cf" }}>
                        企業HP
                    </a>
                    {" / "}
                    <a
                        href="https://www.wantedly.com/companies/company_5984483/post_articles/1054205"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#9cf" }}
                    >
                        Wantedly インタビュー記事
                    </a>
                </p>
            </Section>

            <Section title="ポジションの位置付け">
                <p>
                    100人に満たないベンチャーで、<strong>COO から頼まれた仕事にコミット</strong>しながら、
                    最終的には自分の希望で <strong>「高専卒版handyを作るには」</strong> の市場調査と提案までを行うインターン。
                    所属はコーポレート部だが、それに縛られず UI/UX FB・社内ツール開発・チラシデザイン・商談同行・新規事業提案
                    まで <strong>領域を横断して動く裁量</strong>を与えられた。
                </p>
            </Section>

            {/* ===== 取り組んだ業務 ===== */}
            <Section title="取り組んだ業務 ─ 4つの軸で動く">
                <h4 style={{ color: "#fff", marginTop: "1.2rem", marginBottom: "0.4rem" }}>
                    ① UI/UX フィードバック ─ 高校生目線で1日24件の指摘
                </h4>
                <p style={{ marginTop: 0 }}>
                    入社初日に COO から「<strong>最初の感覚が鋭いうちにやってほしい</strong>」と依頼され、
                    <strong>1日で24個の指摘</strong>を提出。
                    UI/UX 指摘は感想に流れがちなため、以下の3点を徹底した：
                </p>
                <ul style={{ paddingLeft: "1.2rem", marginTop: "0.4rem" }}>
                    <li style={{ marginBottom: "0.3rem" }}>
                        前週の旅行で <strong>Airbnbの UI/UX</strong> から得た示唆を参照点として明示
                    </li>
                    <li style={{ marginBottom: "0.3rem" }}>
                        求人票の表示項目レイアウトについては、<strong>Figma で実際に修正案を作成</strong>して送付
                    </li>
                    <li>
                        「ここが使いにくい」で終わらせず、必ず
                        「<strong>こうすれば、ユーザーの気持ちはこう変わりそう</strong>」「これがあれば、もっと使ってもらいやすそう」
                        と <strong>定性的な提案</strong>とセットで伝える
                    </li>
                </ul>

                {/* === UI/UX 提案の具体例（公開可能分） === */}
                <h5 style={{ color: "#fff", marginTop: "1.4rem", marginBottom: "0.4rem", fontSize: "1rem" }}>
                    具体例 1：地図検索機能を Airbnb 型に
                </h5>
                <p style={{ marginTop: 0, fontSize: "0.95rem" }}>
                    handy の地図検索機能は、<strong>マップ操作とサイト全体スクロールが干渉</strong>してしまう（Androidで確認）。
                    一方、前週使った Airbnb は地図がメイン要素として独立していて干渉しない。
                    <strong>Airbnb 型の地図メイン構造に寄せたい</strong>。
                </p>
                <BeforeAfter
                    before={{
                        src: "img/handy/rhandy_map.png",
                        label: "現状（handy）",
                        labelColor: "#777",
                        title: "地図とリストの操作が競合",
                        note: "地図ピンが小さく、スクロール操作とパン/ズームが衝突。地図は補助要素扱い。",
                    }}
                    after={{
                        src: "img/handy/airbnb_map.png",
                        label: "参考（Airbnb）",
                        labelColor: "#2e7dd1",
                        title: "地図メインで操作干渉なし",
                        note: "地図が画面の主要素。リストは下部カードとして連動表示し、操作系が分離されている。",
                    }}
                    proposals={[
                        "マップを画面の主要素に格上げし、サイト全体スクロールと地図操作を分離",
                        "地図ピンをタップすると下部カードと連動して詳細表示",
                        "「住んでいる街から近い順」という高校生の実際の検索文脈にフィット",
                    ]}
                />

                <h5 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem", fontSize: "1rem" }}>
                    具体例 2：条件検索フィルタの UI 刷新
                </h5>
                <p style={{ marginTop: 0, fontSize: "0.95rem" }}>
                    条件検索の UI がレガシーで使いにくい。「来校あり」「二次募集あり」「指定校受け入れあり」のような
                    <strong>「なし」をわざわざ選ぶ必要がない項目はトグルボタン式で統一</strong>することで、
                    無駄な縦幅を抑えて設定が見やすく簡単になる。
                </p>
                <SinglePanel
                    p={{
                        src: "img/handy/rhandy_filter.png",
                        label: "改善案",
                        labelColor: "#2e7dd1",
                        title: "トグルボタン式に統一したフィルタ",
                        note: "ラジオボタン×2体系→トグル1つに集約し、縦スクロールを剧的に削減。",
                    }}
                    maxH={260}
                />

                <h5 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem", fontSize: "1rem" }}>
                    具体例 3：求人一覧表示の情報設計刷新
                </h5>
                <p style={{ marginTop: 0, fontSize: "0.95rem" }}>
                    求人一覧表示に2つの本質課題：
                </p>
                <ul style={{ paddingLeft: "1.2rem", marginTop: "0.4rem", fontSize: "0.95rem" }}>
                    <li style={{ marginBottom: "0.3rem" }}>
                        <strong>① 無味乾燥すぎる</strong> ─ 求人票HPから画像をスクレイピングしてサムネにできないか
                    </li>
                    <li style={{ marginBottom: "0.3rem" }}>
                        <strong>② 一覧表示には不要な情報が多い</strong>：
                        <ul style={{ paddingLeft: "1rem", marginTop: "0.2rem" }}>
                            <li>公開日・管理番号は一覧では不要</li>
                            <li>お気に入り数はハート下に数字のみ</li>
                            <li>立地が気になる人は地図表示で調べる前提に → 一覧では非表示でも可</li>
                            <li>求人票記載のホームページは「HPを見る」ボタンとして配置</li>
                            <li>住所はただ載せるのではなく、<strong>地図ピンボタンで Google Map に飛べる</strong>形に</li>
                        </ul>
                    </li>
                </ul>
                <BeforeAfter
                    before={{
                        src: "img/handy/kyujin_before.png",
                        label: "Before",
                        labelColor: "#777",
                        title: "現状の求人一覧",
                        note: "公開日・管理番号・住所テキストなど、一覧では不要な情報が並ぶ。サムネ無しでただのテキストリストに見える。",
                    }}
                    after={{
                        src: "img/handy/kyujin_after.png",
                        label: "After",
                        labelColor: "#2e7dd1",
                        title: "提案デザイン",
                        note: "サムネとアクションボタンで「調べる」動作が一目で完結。",
                    }}
                    proposals={[
                        "求人票HPから画像をスクレイピングしてサムネ化→一覧の視認性を勇気づけ",
                        "公開日・管理番号を一覧から除去、お気に入り数はハートアイコン下にコンパクト表示",
                        "住所テキストを「地図ピンボタン」に置換→タップで Google Map に遷移",
                        "求人票HPへの動線も「HPを見る」ボタンとして明示化",
                        "立地を重視するユーザーは地図タブへ誘導し、一覧では住所表示を省略",
                    ]}
                    maxH={260}
                />
                <p style={{ marginTop: "0.8rem", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                    こうした提案を <strong>Slack で送信文＋参考画像＋Figma修正案のセット</strong>で送ることで、
                    開発チーム側がそのまま意思決定できる粒度に揃えた。
                </p>

                <h5 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem", fontSize: "1rem" }}>
                    具体例 4：有料掲載と校内求人の UI 統一 ─ 認知負荷の解消
                </h5>
                <p style={{ marginTop: 0, fontSize: "0.95rem" }}>
                    handy 内には <strong>有料掲載枠</strong>と <strong>校内求人</strong>の2種類があるが、
                    <strong>同じ情報（会社名・給料・お気に入り数）が全く違う配置・サイズで表示されている</strong>。
                    「目立たせるために多少差をつける」のは妥当だが、現状は差が大きすぎて
                    <strong>脳内処理を切り替えないと情報が頭に入ってこない＝認知負荷が高い</strong>。
                </p>
                <BeforeAfter
                    before={{
                        src: "img/handy/rhandy_pr.png",
                        label: "有料掲載",
                        labelColor: "#c97a2e",
                        title: "横長カード型・大きめサムネ",
                        note: "会社名は左上、給料は右側、お気に入り数は別位置に大きく表示。",
                    }}
                    after={{
                        src: "img/handy/kyujin_before.png",
                        label: "校内求人",
                        labelColor: "#777",
                        title: "縦積みテキストリスト型",
                        note: "同じ「会社名・給料・お気に入り数」なのに配置・サイズが完全に別物。",
                    }}
                    proposals={[
                        "共通要素（会社名・給料・お気に入り数）の配置と相対サイズ比は両形式で統一する",
                        "差別化は「枠の色／PRバッジ／サムネ有無」など装飾レイヤーで表現し、情報レイアウト自体は変えない",
                        "同じ情報を同じ位置で読めるようにすることで、ユーザーの脳内処理切替コストを排除",
                    ]}
                    maxH={240}
                />

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ② 社内顔ナビサイト ─ Notion断念から GAS 運用ゼロコスト化へ
                </h4>
                <p style={{ marginTop: 0 }}>
                    社内向け顔ナビサイトの依頼を受け、初日に Notion で構築。だが
                    <strong>社員全員に有料 Notion アカウントが必要</strong> であることが判明し断念。
                    そこで「<strong>今後社員数が増えても運用コストが上がらない設計</strong>」を要件に再設計し、
                    1日試行錯誤の末、<strong>既存の社内社員表スプレッドシート × Google Apps Script</strong>
                    で HTML を自動生成する仕組みに切り替え。
                </p>
                <ul style={{ paddingLeft: "1.2rem", marginTop: "0.4rem" }}>
                    <li style={{ marginBottom: "0.3rem" }}>
                        URL 自体は誰でもアクセス可だが、参照元のスプシが社内限定アクセスのため <strong>事実上の社内専用</strong>
                    </li>
                    <li style={{ marginBottom: "0.3rem" }}>
                        運用は <strong>基本情報＋顔写真URLをスプシに追記するだけ</strong>。<strong>退職日入力で自動非表示化</strong>
                    </li>
                    <li>
                        依頼から <strong>3日で公開</strong>。退職後の <strong>4月に新入社員10数名が入った際にも実運用され、現在も活用中</strong>
                    </li>
                </ul>

                <BeforeAfter
                    before={{
                        src: "img/handy/hannavi.png",
                        label: "一覧画面",
                        labelColor: "#2e7dd1",
                        title: "顔と名前で社員を一覧表示",
                        note: "スプシから自動生成。退職日が入った社員は自動で非表示に。",
                    }}
                    after={{
                        src: "img/handy/hannavi_detail.png",
                        label: "詳細ポップアップ",
                        labelColor: "#2e7dd1",
                        title: "クリックで個人情報を表示",
                        note: "肩書き・入社日・誕生日・個人携帯・メールアドレスなど、入社時に必要な情報を一画面に集約。",
                    }}
                    proposals={[
                        "顔写真URL列を1つ足すだけで、新入社員追加 / 退職者除外を非エンジニアでも運用できる構造に",
                        "詳細ポップアップで「この人いつ入社？誕生日いつ？」をワンクリックで把握 → 新入社員のオンボード時に効く",
                        "Notion有料化を回避し、社員数が増えてもランニングコスト追加ゼロで継続運用可能",
                    ]}
                    maxH={240}
                />

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ③ PTA向けチラシ ─ 既存導線とは別軸の訴求設計
                </h4>
                <p style={{ marginTop: 0 }}>
                    未導入校への配布物として <strong>PTA（保護者）向けチラシ</strong>のデザインを担当。
                    既存の <strong>学校教員向けチラシとは異なる訴求軸</strong> として、
                    「handy が学校に導入されたら <strong>保護者にも子供にもいいことがある</strong>」を中心メッセージに据え、
                    <strong>SQL でデータを抽出して根拠データを揃え</strong>、デザイン提案まで実施。
                </p>

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ④ 商談・イベント同行 ─ 営業現場の解像度を上げる
                </h4>
                <p style={{ marginTop: 0 }}>
                    以下の現場に同行し、ビジネスサイドの動きを実地で吸収：
                </p>
                <ul style={{ paddingLeft: "1.2rem", marginTop: "0.4rem" }}>
                    <li style={{ marginBottom: "0.3rem" }}>遠隔地・未導入学校への <strong>オンライン商談</strong></li>
                    <li style={{ marginBottom: "0.3rem" }}>導入校への <strong>別サービスのオンボーディング</strong></li>
                    <li style={{ marginBottom: "0.3rem" }}>高崎で開催の <strong>高校生向け就職・進学イベント</strong></li>
                    <li>他社との <strong>業務提携 MTG</strong></li>
                </ul>
            </Section>

            {/* ===== 新規事業提案 ===== */}
            <Section title="最終提案 ─ 「高専卒版 handy」の市場調査と展開戦略">
                <p>
                    自分自身の <strong>最大の強みが「高専生である」こと</strong> ＝ 高専関係者の懐に潜り込めるという仮説を起点に、
                    最終出勤日のプレゼンとして <strong>高専進路指導室向け handy</strong> の市場調査と展開提案をまとめた。
                </p>

                <h4 style={{ color: "#fff", marginTop: "1.4rem", marginBottom: "0.4rem" }}>
                    ① リサーチ手法 ─ 一次情報を当事者ネットワークから取りに行く
                </h4>
                <ul style={{ paddingLeft: "1.2rem" }}>
                    <li style={{ marginBottom: "0.3rem" }}><strong>高専生 4名</strong> へのインタビュー</li>
                    <li style={{ marginBottom: "0.3rem" }}><strong>高専教員 2名</strong> へのインタビュー</li>
                    <li style={{ marginBottom: "0.3rem" }}><strong>高専採用企業 2社</strong> へのインタビュー</li>
                    <li style={{ marginBottom: "0.3rem" }}>主要国立高専 <strong>10校の進路指導室に架電</strong> → うち <strong>2校でヒアリング</strong> 実施</li>
                    <li>
                        競合になりうる <strong>メディア総研</strong> へも高専生として接触し、
                        <strong>決算資料の不明点を聴き込んで財務面のウィークポイントを探った</strong>
                    </li>
                </ul>

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ② 提案の主張：高専市場は成り立つ
                </h4>
                <p style={{ marginTop: 0 }}>
                    結論は <strong>「成り立ちそう」</strong>。根拠は次の通り：
                </p>
                <ul style={{ paddingLeft: "1.2rem", marginTop: "0.4rem" }}>
                    <li style={{ marginBottom: "0.3rem" }}>
                        <strong>市場規模が十分にある</strong>：高専生の求人倍率は <strong>約20倍</strong>。
                        毎年約 <strong>5,000人が卒業・就職</strong>するため、単純計算で
                        <strong>年間およそ10万件規模の求人が発生</strong>している市場
                    </li>
                    <li style={{ marginBottom: "0.3rem" }}>
                        <strong>未開拓校の取り込み余地</strong>：既存サービスを使わずアナログで求人管理している学校が一定数存在し、
                        その「使わない理由」に対して <strong>handy 既存システムの横展開で対応可能</strong>な手応えを得た
                    </li>
                    <li>
                        就職協定がないにも関わらず、実態としては <strong>高卒型の「届いた求人票から応募」が主流</strong>
                        → <strong>handy の体験設計がそのまま転用可能</strong>
                    </li>
                </ul>

                <h4 style={{ color: "#fff", marginTop: "1.6rem", marginBottom: "0.4rem" }}>
                    ③ 展開戦略：FS で各校を丁寧に潰す
                </h4>
                <p style={{ marginTop: 0 }}>
                    高専は <strong>学校数が少ない</strong>（高校市場と桁違いに小さい）ため、
                    マスアプローチではなく <strong>フィールドセールスで各校を丁寧に潰していく</strong> のが最適と提案。
                    費用対効果が出やすい順序で攻略順を整理した。
                </p>

                {/* 高専版 handy 提案資料は事業戦略上の機微情報を含むため社外公開不可。 */}
                <p style={{ marginTop: "1.4rem", fontSize: "0.9rem", color: "var(--text-secondary)", padding: "0.8rem 1rem", background: "rgba(255,255,255,0.04)", borderLeft: "2px solid rgba(255,255,255,0.2)", borderRadius: 4 }}>
                    ※ 本提案資料は <strong>handy 社の事業戦略に影響する内容</strong>を含むため、ポートフォリオ上での公開は控えています。
                </p>
            </Section>

            {/* ===== 反響と振り返り ===== */}
            <Section title="提案後の反響と振り返り">
                <p>
                    社内エンジニアリソースが逼迫しており、
                    <strong>新規事業の優先度は今すぐではない</strong> という反応。
                    既存タスク（UI/UX 改善、直近リリースの <strong>進学版／専門学校版の改修・アップデート</strong>）が並んでいる中で、
                    優先度判断としては妥当。
                </p>
                <p>
                    一方、競合の <strong>メディア総研がシェアを急速に拡大</strong>している今、
                    早期着手の戦略的意義は大きい。
                    自分としては <strong>「いま着手すべき理由」をもう一段強く推せたのではないか</strong> という反省が残った。
                    課題の特定にとどまらず <strong>意思決定タイミングまで提案する</strong> 重要性を、提案後に学んだ。
                </p>
            </Section>

            <Section title="このインターンで得た一番の視点">
                <p>
                    <strong>相手が自分に何を求めているのかを汲み取り、その先まで踏み込んでアウトプットする</strong>
                    こと。
                </p>
                <p>
                    たとえば最終提案の与えられたテーマは
                    「<em>高専版 handy 進路指導室を提供したいが、（一般的な）高専の就職活動の現状と、課題は何か？</em>」だった。
                    これは表面上は「課題を整理して報告して」という指示に見える。だが
                    <strong>「課題を聞いた先で COO が何をしたいか」</strong> を考えれば、本当の関心は
                    <strong>展開できるか／どこから始めるか</strong> にある。
                </p>
                <p>
                    そこで課題感はもちろん深く探りつつ、
                    <strong>展開する際のファーストステップまで踏み込んで自分から提示</strong>する形に組み立てた。
                    与えられた問いの「裏側にある真の問い」に答えにいく姿勢が、
                    裁量のある現場で価値を出すための要だと体得した。
                </p>
            </Section>

            <Section title="副次的に得た学び ─ 社内の雰囲気は数値に表れない一級指標">
                <p>
                    インターン前は、企業の特徴を判断する際に <strong>定量化されやすい数値情報に認知が偏っていた</strong>。
                    実際にベンチャーで働いてみると、
                    <strong>社員一人ひとりの人柄・社内全体の空気感</strong> が
                    気持ちよく働き、生産性を上げるための <strong>定性的だが極めて重要な変数</strong> であることを体感した。
                    今後のキャリア選択では、定量・定性の両軸で会社を見るようになった。
                </p>
            </Section>
        </div>
    );
}
