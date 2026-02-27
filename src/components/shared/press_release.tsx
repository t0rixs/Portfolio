
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

]
