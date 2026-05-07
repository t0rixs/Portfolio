import { Content } from "../shared/Contents";
import { Labeled, Pill, Section, Stat, palette } from "./_detail_ui";

const BASE = import.meta.env.BASE_URL;

/** 画像 or 動画を自動判別して表示する小さなメディア */
function Media({
    src,
    alt,
    maxH = 360,
}: {
    src: string;
    alt: string;
    maxH?: number;
}) {
    const isVideo = /\.(mp4|mov|webm)$/i.test(src);
    const url = `${BASE}${src}`;
    if (isVideo) {
        return (
            <video
                src={url}
                controls
                playsInline
                muted
                loop
                style={{
                    width: "100%",
                    maxHeight: maxH,
                    objectFit: "contain",
                    borderRadius: 8,
                    background: "#0c0c0c",
                    border: `1px solid ${palette.cardBorder}`,
                    display: "block",
                }}
            />
        );
    }
    return (
        <img
            src={url}
            alt={alt}
            style={{
                width: "100%",
                maxHeight: maxH,
                objectFit: "contain",
                borderRadius: 8,
                background: "#0c0c0c",
                border: `1px solid ${palette.cardBorder}`,
                display: "block",
            }}
        />
    );
}

type StagePanel = {
    src: string;
    label: string;
    title?: string;
    note?: string;
    accent?: string;
};

function StageCard({ p, maxH = 360 }: { p: StagePanel; maxH?: number }) {
    const accent = p.accent ?? "#9cf";
    return (
        <div
            style={{
                flex: "1 1 280px",
                minWidth: 0,
                background: palette.card,
                border: `1px solid ${palette.cardBorder}`,
                borderLeft: `3px solid ${accent}`,
                borderRadius: 8,
                padding: "0.8rem",
            }}
        >
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.4rem" }}>
                <span
                    style={{
                        fontFamily: "monospace",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: accent,
                        letterSpacing: "0.05em",
                    }}
                >
                    {p.label}
                </span>
                {p.title && (
                    <span style={{ fontSize: "0.85rem", color: "#fff" }}>{p.title}</span>
                )}
            </div>
            <Media src={p.src} alt={p.title ?? p.label} maxH={maxH} />
            {p.note && (
                <p style={{ fontSize: "0.8rem", color: palette.sub, margin: "0.4rem 0 0", lineHeight: 1.5 }}>
                    {p.note}
                </p>
            )}
        </div>
    );
}

function BeforeAfter({ before, after, maxH = 360 }: { before: StagePanel; after: StagePanel; maxH?: number }) {
    return (
        <div style={{ display: "flex", alignItems: "stretch", gap: "0.8rem", flexWrap: "wrap", marginTop: "0.8rem" }}>
            <StageCard p={before} maxH={maxH} />
            <div
                style={{
                    alignSelf: "center",
                    fontSize: "1.4rem",
                    color: "#9cf",
                    fontWeight: 700,
                    padding: "0 0.2rem",
                }}
            >
                →
            </div>
            <StageCard p={after} maxH={maxH} />
        </div>
    );
}

export default function RoutepiaDetail({ work: _work }: { work: Content }) {
    return (
        <div style={{ color: palette.text, lineHeight: 1.8 }}>
            {/* ── 入りのフック：元祖アプリから Routepia への変化 ── */}
            <Section title="一目でわかる、刷新の手応え">
                <p style={{ marginTop: 0 }}>
                    着想元になった10年前の愛用アプリ「マッピング！」と、自分が作り直した Routepia の現状を並べたものです。
                    <strong>同じコンセプトを、解像度・UI・描画パフォーマンスの全レイヤで現代化</strong>しました。
                </p>
                <BeforeAfter
                    before={{
                        src: "contents/routepia_before.png",
                        label: "BEFORE",
                        title: "マッピング！（10年前のアプリ）",
                        accent: "#777",
                        note: "低解像度のマス目／古い UI／飛行機軌跡が混ざる",
                    }}
                    after={{
                        src: "contents/routepia_after.png",
                        label: "AFTER",
                        title: "Routepia（自作・現状）",
                        accent: "#2e7dd1",
                        note: "高解像度タイル描画／モダン UI／拡張可能な設計",
                    }}
                />
            </Section>
            {/* ── 案件サマリー ── */}
            <Section title="プロジェクトサマリー">
                <Labeled label="プロダクト">Routepia ─ 人生の足跡を一枚の地図に刻む記録アプリ</Labeled>
                <Labeled label="期間">2025年4月 〜 2026年4月（断続的・約1年）</Labeled>
                <Labeled label="開発体制">個人開発（設計／実装／調査／リリース準備すべて1人）</Labeled>
                <Labeled label="リリース">2026年5月中に Google Play Store にて公開予定</Labeled>
                <div>
                    <Pill>Flutter / Dart</Pill>
                    <Pill>PostgreSQL</Pill>
                    <Pill>Google Maps API</Pill>
                    <Pill>個人開発</Pill>
                    <Pill>パフォーマンス最適化</Pill>
                    <Pill>リバースエンジニアリング</Pill>
                </div>
                <p style={{ marginTop: "0.8rem", fontSize: "0.9rem", color: palette.sub }}>
                    関連リンク：
                    <a
                        href="https://github.com/t0rixs/Routing"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#9cf" }}
                    >
                        GitHub リポジトリ
                    </a>
                    <span style={{ marginLeft: 8, fontSize: "0.8rem", color: palette.muted }}>
                        ※リリース後に Play Store へのリンクを追記予定
                    </span>
                </p>
            </Section>

            {/* ── ざっくり規模感 ── */}
            <Section title="規模感">
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 8 }}>
                    <Stat value="個人開発" label="設計〜リリースまで1人" />
                    <Stat value="約1年" label="断続的な開発期間" />
                    <Stat value="Dart 76%" label="主要コードベース（残りは各プラットフォームのネイティブ層）" />
                    <Stat value="iOS / Android" label="マルチプラットフォーム対応" />
                </div>
            </Section>

            {/* ── 概要 ── */}
            <Section title="どんなアプリか">
                <p>
                    Routepia は、GPS で取得した移動履歴を <strong>マス目（cell）状のヒートマップ</strong> として地図に描画し、
                    <strong>「自分が人生でどこを歩いたか」を一枚の地図にまとめる</strong>記録アプリです。
                </p>
                <p>
                    着想元は10年前にリリースされた愛用アプリ「マッピング！」。
                    通信ゼロで端末ローカルに記録し続けるシンプルさを尊重しつつ、
                    <strong>10年間放置されていた解像度・UI・拡張性の課題を、自分の手で再設計し直した</strong>
                    のがこのプロダクトです。
                </p>
            </Section>

            {/* ── 技術ハイライト 1 ── */}
            <Section title="技術ハイライト ① 既存アプリのデータ構造を解析し、過去の人生記録を復元">
                <p>
                    既存ユーザーが10年単位で蓄積してきた「マッピング！」の足跡データを、
                    Routepia でも継続して使えるようにする必要がありました。
                    しかし、SQLite に保存されている座標値は緯度経度ではなく
                    <strong>意味の見えない整数列</strong>。仕様書も存在しません。
                </p>
                <h4 style={{ color: "#fff", marginTop: "1rem", marginBottom: "0.4rem" }}>
                    検証アプローチ：GPSを擬似操作するデバッグアプリを自作
                </h4>
                <ul style={{ paddingLeft: "1.2rem" }}>
                    <li style={{ marginBottom: "0.3rem" }}>
                        端末の GPS 座標を任意に書き換えるデバッグ用 Flutter アプリを別途開発
                    </li>
                    <li style={{ marginBottom: "0.3rem" }}>
                        北緯90°・東経180°など <strong>極致を意図的に踏ませて</strong>、
                        生成バイナリの差分から座標↔整数値の写像を逆算
                    </li>
                    <li>
                        結果、<strong>「南緯90°・西経180°を原点に、0.0002°刻みでインデックス化された独自グリッド座標系」</strong>
                        であることを特定
                    </li>
                </ul>
                <pre
                    style={{
                        background: "#111",
                        border: `1px solid ${palette.cardBorder}`,
                        borderRadius: 6,
                        padding: "0.7rem 1rem",
                        fontSize: "0.85rem",
                        color: "#9cf",
                        overflowX: "auto",
                    }}
                >
{`// 解析の末に特定した変換式
緯度  = lat * 0.0002 - 180
経度  = lng * 0.0002 - 90`}
                </pre>
                <p style={{ marginTop: "0.8rem" }}>
                    この解析により、<strong>過去数年分の人生の足跡を1pxのズレもなく Routepia へ移行・復元</strong>することに成功。
                    10年前の設計者の意図を読み解いて自プロダクトに接続する、という地味だが本質的な仕事ができたと思っています。
                </p>
            </Section>

            {/* ── 技術ハイライト 2 ── */}
            <Section title="技術ハイライト ② 観察ベースで描画方式を Polygon → TileOverlay へ刷新">
                <p>
                    最初は素直に各マス目を <code>Polygon</code> として地図に描画していました。
                    しかし数万件のデータを読み込むとアプリがクラッシュするレベルの負荷に。
                </p>
                <h4 style={{ color: "#fff", marginTop: "1rem", marginBottom: "0.4rem" }}>
                    気づきは「先人のアプリを何百回も観察する」ことから
                </h4>
                <p style={{ marginTop: 0 }}>
                    既存「マッピング！」を <strong>パン／ズームしながら描画パターンを徹底観察</strong>すると、
                    cell の読み込みが <strong>「画面に入った瞬間」ではなく「マップ上の固定エリアごと」</strong>に発生していることに気づきました。
                    Polygon ベースなら起こり得ない挙動 ── つまり画像タイル方式（TileOverlay）で描画していると推測。
                </p>
                <p>
                    さらに、低ズーム時に cell の輪郭がわずかに滲むことから、
                    <strong>「タイル解像度を上げれば滲みは解消できるはず」</strong>という仮説を立てました。
                </p>
                <h4 style={{ color: "#fff", marginTop: "1rem", marginBottom: "0.4rem" }}>
                    実装で乗り越えた壁
                </h4>
                <ul style={{ paddingLeft: "1.2rem" }}>
                    <li style={{ marginBottom: "0.3rem" }}>
                        <strong>タイル座標と独自グリッド座標のマッピング</strong>
                        ：メルカトル投影法のタイル座標 ⇄ 等距グリッド座標を結ぶ自作変換ロジックを構築
                    </li>
                    <li style={{ marginBottom: "0.3rem" }}>
                        <strong>タイル境界をまたぐ cell の特別処理</strong>
                        ：<code>floor</code> ベースの境界判定で、欠損なく・最小計算量で描画するアルゴリズムを実装
                    </li>
                    <li>
                        <strong>タイル解像度を引き上げ</strong>てピクセル指定を最適化し、低ズーム時の輪郭の滲みも解消
                    </li>
                </ul>
                <p style={{ marginTop: "0.8rem" }}>
                    結果、<strong>数千個の Polygon 生成負荷を排除</strong>し、
                    数万件規模の足跡データでも滑らかに動くマップを実現できました。
                </p>

                {/* ── 時系列：実際の開発ステージ ── */}
                <h4 style={{ color: "#fff", marginTop: "1.4rem", marginBottom: "0.6rem" }}>
                    開発タイムライン ─ Polygon時代 → TileOverlay完成までの軌跡
                </h4>
                <p style={{ marginTop: 0, fontSize: "0.95rem" }}>
                    課題ごとの実画面/動画です。リファクタというより<strong>「描画機序そのものを乗り換える」</strong>判断だったので、
                    途中段階での挙動も残しておきます。
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", marginTop: "0.8rem" }}>
                    <StageCard
                        p={{
                            src: "contents/routepia_25-05-01.png",
                            label: "2025-05-01",
                            title: "初めて足跡を描画できた瞬間（Polygon方式）",
                            accent: "#666",
                            note: "まずは「動くもの」を最短距離で。Polygon ベースで素朴に描画。データが少ない間は問題なく動いていた。",
                        }}
                    />
                    <StageCard
                        p={{
                            src: "contents/routepia_25-05-31.mp4",
                            label: "2025-05-31",
                            title: "Polygon方式での描画拡張",
                            accent: "#666",
                            note: "対応座標範囲を広げ、データ量を増やして検証。クラッシュ・遅延が顕在化し、描画方式の限界を確信。",
                        }}
                    />                    <StageCard
                        p={{
                            src: "contents/routepia_polygon.mp4",
                            label: "Polygon時代 デモ",
                            title: "Polygon方式の動作サマリー",
                            accent: "#666",
                            note: "描画方式を乗り換える前の Polygon 末期の動作。スクロール・ズームと描画負荷の関係が見てとれる。",
                        }}
                    />                    <StageCard
                        p={{
                            src: "contents/routepia_25-07-01.png",
                            label: "2025-07-01",
                            title: "TileOverlay 実装初期",
                            accent: "#9cf",
                            note: "Polygon を捨て、画像タイル方式に乗り換える設計判断。まずタイル要求 → 透過PNG生成のパイプラインを最小実装。",
                        }}
                    />
                    <StageCard
                        p={{
                            src: "contents/routepia_25-07-14.png",
                            label: "2025-07-14",
                            title: "TileOverlay 部分成功（境界処理 / 座標変換が未完成）",
                            accent: "#f9a",
                            note: "タイル単位では描画できるが、タイル境界をまたぐ cell が欠損／独自グリッド ⇄ メルカトル座標のマッピングがズレる問題に直面。ここから境界処理アルゴリズムを作り込む。",
                        }}
                    />
                    <StageCard
                        p={{
                            src: "contents/routepia_26-05-01.mp4",
                            label: "2026-05-01（現在）",
                            title: "完成版 ─ 数万件でも滑らかに動く UI",
                            accent: "#2e7dd1",
                            note: "境界処理・タイル解像度・座標マッピングを全て解消。数万件規模の足跡でも滑らか／低ズーム時の輪郭の滲みも消えた。",
                        }}
                    />
                </div>
            </Section>

            {/* ── 設計判断のポイント ── */}
            <Section title="この開発で誇りに思っている設計判断">
                <ul style={{ paddingLeft: "1.2rem" }}>
                    <li style={{ marginBottom: "0.5rem" }}>
                        ドキュメントが無い既存アプリに対して、
                        <strong>「観察 → 仮説 → デバッグツール自作で検証」</strong>という、
                        ソフトウェア考古学的なアプローチで挙動を特定した
                    </li>
                    <li style={{ marginBottom: "0.5rem" }}>
                        パフォーマンス課題に対して、
                        <strong>「ライブラリ選択を変える」のではなく「描画レイヤそのものを差し替える」</strong>
                        という抜本策を選んだ
                    </li>
                    <li>
                        既存ユーザーの過去データ（=人生）を <strong>1pxたりとも壊さない</strong>ことを移行設計の制約条件に置いた
                    </li>
                </ul>
            </Section>

            {/* ── 今後の展望 ── */}
            <Section title="リリース直前と今後の展望">
                <p>
                    2026年5月中に Google Play Store へリリース予定です。直後に着手するのが、
                    <strong>「飛行機で記録された軌跡」を地上の足跡から軽量に分離・切り替え表示する機能</strong>。
                </p>
                <p style={{ marginTop: "0.4rem" }}>
                    地上の細かい移動と高高度の長距離フライトが同じレイヤに乗ると、地図が一瞬で見づらくなります。
                    描画時に毎回それらを足し合わせる素朴な実装はパフォーマンス的に厳しいので、設計段階で
                    <strong>「地上のみDB」「飛行機のみDB」「両方統合済みDB」の3系統に分割</strong>する案を検討中。
                    <strong>描画パスを軽量に保ったまま、ユーザーが見たいビューだけを瞬時に切り替えられる</strong>ようにします。
                </p>
            </Section>

            {/* ── このプロダクトから持ち帰った力 ── */}
            <Section title="このプロダクトから持ち帰った力（エンジニアとして）">
                <ul style={{ paddingLeft: "1.2rem" }}>
                    <li style={{ marginBottom: "0.4rem" }}>
                        <strong>未知のシステムを観察と仮説で解き明かす</strong>
                        リバースエンジニアリングの忍耐力
                    </li>
                    <li style={{ marginBottom: "0.4rem" }}>
                        ライブラリ任せにせず、<strong>描画機序のレベルから設計を選び直すパフォーマンスチューニング</strong>
                    </li>
                    <li style={{ marginBottom: "0.4rem" }}>
                        <strong>個人開発を1年継続し、リリースまで持っていく</strong>セルフマネジメントと意思決定
                    </li>
                    <li>
                        ユーザーの過去データを壊さないという制約下で動く、<strong>互換性を意識した設計</strong>
                    </li>
                </ul>
            </Section>
        </div>
    );
}
