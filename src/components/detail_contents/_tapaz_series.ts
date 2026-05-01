// Tapaz の各WSを時系列で並べたシリーズ定義。
// tapaz.tsx の概要ページと、各 tapaz_xxx.tsx の prev/next ナビゲーションで共有する。

export type TapazChapter = {
    id: string;
    chapter: string; // "Ch.01" など
    period: string;
    title: string;
    subtitle: string;
    summary: string;
    accent: string; // カラーアクセント
};

export const tapazSeries: TapazChapter[] = [
    {
        id: "tapaz_funeral",
        chapter: "Ch.01",
        period: "立ち上げ初期 / 全3回シリーズ",
        title: "葬儀WS（岡さん）",
        subtitle: "最初の有償案件 ─ 表層オーダーから本質課題を再定義する",
        summary:
            "1回目は依頼通りの「新しい葬儀のタイムスケジュール」WSを実施。社長への再ヒアリングを経て、本質課題が「社員に未来軸で自社を語らせる」ことだと特定し、2・3回目で構造を作り直してリピート受注に繋げた。",
        accent: "#ff8a65",
    },
    {
        id: "tapaz_sharehouse",
        chapter: "Ch.02",
        period: "事業中期 / 0→1の需要検証",
        title: "国際交流シェアハウスWS（美馬さん）",
        subtitle: "現地調査からアウトプットの実現性担保まで一気通貫の検証案件",
        summary:
            "デイサービス跡地の転用構想に対して、現地調査・徳大生ヒアリング・WS企画・集客・建築家3名招聘までを自走で組み立て、20名から5案を抽出。意思決定可能なインサイトを納品した。",
        accent: "#64b5f6",
    },
    {
        id: "tapaz_sudachi",
        chapter: "Ch.03",
        period: "事業後期 / 観光×関係人口",
        title: "Green Social Tourism WS（神山）",
        subtitle: "ツアー体験を関係人口化に繋ぐ ─ 体験設計型のWS",
        summary:
            "ツアー全体の「田舎の関係人口を増やす」コンセプトに対し、当日で消費されて終わる体験を、参加者が自分の言葉で再解釈できる設計に。ツアー継続コンテンツとして組み込めるフォーマットを納品。",
        accent: "#a5d6a7",
    },
];

export function getTapazNeighbors(currentId: string) {
    const idx = tapazSeries.findIndex((c) => c.id === currentId);
    if (idx === -1) return { prev: null, next: null, current: null };
    return {
        prev: idx > 0 ? tapazSeries[idx - 1] : null,
        next: idx < tapazSeries.length - 1 ? tapazSeries[idx + 1] : null,
        current: tapazSeries[idx],
    };
}
