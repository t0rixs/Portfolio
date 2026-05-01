
export class Press {
    title: string;
    create_at: Date;
    relation_id: string | null;



    constructor(title: string, create_at: Date, relation_id: string | null) {
        this.title = title;
        this.create_at = create_at;
        this.relation_id = relation_id;
    }
}

export const contents = [
    new Press("高専プロコン2023に出場しました", new Date(2023, 10, 14), null),
    new Press("徳島創生アワードに出場しました", new Date(2024, 1, 19), null),
    new Press("第1回高専起業家サミットに出場しました", new Date(2024, 3, 11), null),
    new Press("TwogateDevCamp2025に参加しました", new Date(2025, 9, 14), "pocketreception"),
    new Press("第3回高専起業家サミットで優秀賞を受賞しました", new Date(2026, 2, 24), "dcon"),
    new Press("高専人会ハッカソンで優秀賞(2位)と企業賞を受賞しました", new Date(2026, 3, 1), "senmyaku"),
    new Press("ハンディ株式会社で1ヶ月間就労型インターンを行いました", new Date(2026, 3, 31), "handy"),
    new Press("ハンディ株式会社のWantedlyに僕のインタビューが掲載されました", new Date(2026, 4, 14), "handy"),

]
