
export class Content {
    id: string;
    location: string;
    title: string;
    description: string;
    create_at: Date;
    tag: string[];
    url_type: string | null;
    url: string | null;
    img: string;
    img_brt: number;
    img_pos: string | null;


    constructor(id: string, location: string, title: string, description: string, create_at: Date, tag: string[], url_type: string | null, url: string | null, img: string, img_brt: number, img_pos: string | null) {
        this.id = id;
        this.location = location;
        this.title = title;
        this.description = description;
        this.create_at = create_at;
        this.tag = tag;
        this.url_type = url_type;
        this.url = url;
        this.img = img;
        this.img_brt = img_brt;
        this.img_pos = img_pos;
    }
}

export const contents = [
    new Content("routepia", "Tech", "Routepia", "人生足跡記録アプリ", new Date(2025, 4, 23), ["Native"], "GitHub", "https://github.com/LIZ-Development/Routepia", `${import.meta.env.BASE_URL}img/routepia.jpg`, 0.6, "center"),
    new Content("pocketreception", "Tech", "PocketReception", "無人図書館のための蔵書管理ツール", new Date(2025, 9, 14), ["Web"], "GitHub", "https://github.com/t0rixs/PocketReception", `${import.meta.env.BASE_URL}img/pocketreception.jpg`, 0.6, "center"),
    new Content("portfolio", "Tech", "Portfolio", "これ", new Date(2024, 12, 13), ["Web"], "GitHub", "https://github.com/t0rixs/Portfolio", `${import.meta.env.BASE_URL}img/Portfolio_screen.png`, 0.6, "top"),
    new Content("snipeme", "Tech", "Snipe me", "Cubeを貫くパズルゲーム", new Date(2025, 11, 9), ["Web"], "GitHubPages", "https://t0rixs.github.io/snipeme/", `${import.meta.env.BASE_URL}img/snipeme.png`, 0.7, "center"),
    new Content("togo", "Tech", "Togo", "飛行機/高速バスの予約管理ツール", new Date(2025, 8, 1), ["Web"], "GitHubPages", "https://t0rixs.github.io/Togo/", `${import.meta.env.BASE_URL}img/togo.png`, 0.7, "top"),
    new Content("tapaz", "Activity", "Tapaz", "学生の視点を用いて経営者と新しい価値を提案する事業活動", new Date(2024, 11, 11), ["Business"], "Note", "https://note.com/tapaz", `${import.meta.env.BASE_URL}img/tapaz_work.jpg`, 0.6, null),
    new Content("tapaz_funeral", "Activity", "葬儀WS（岡さん）", "葬儀社の社員と未来の事業像を再構築する3回シリーズWS", new Date(2024, 11, 11), ["Business", "Tapaz"], null, null, `${import.meta.env.BASE_URL}img/tapaz_work.jpg`, 0.6, null),
    new Content("tapaz_sharehouse", "Activity", "国際交流シェアハウスWS（美馬さん）", "デイサービス跡地転用構想の需要検証ワークショップ", new Date(2024, 11, 11), ["Business", "Tapaz"], null, null, `${import.meta.env.BASE_URL}img/tapaz_work.jpg`, 0.6, null),
    new Content("tapaz_sudachi", "Activity", "Green Social Tourism WS（神山）", "ツアー体験の自分ごと化を狙う関係人口創出WS", new Date(2024, 11, 11), ["Business", "Tapaz"], null, null, `${import.meta.env.BASE_URL}img/tapaz_work.jpg`, 0.6, null),
    new Content("dcon", "Activity", "DCON", "介護業界の業務の質を向上させるサービス提供活動", new Date(2025, 1, 13), ["Activity", "Business"], null, null, `${import.meta.env.BASE_URL}img/dcon_mtg.jpg`, 0.8, null),
    new Content("souka", "Activity", "爽果の雫", "文化祭で行った飲食販売", new Date(2025, 10, 25), ["Activity", "Business"], null, null, `${import.meta.env.BASE_URL}img/souka.jpg`, 0.8, null),
    new Content("handy", "Activity", "handyインターン", "biz職の遂行/新規事業の提案", new Date(2025, 3, 1), ["Business"], null, null, `${import.meta.env.BASE_URL}img/handy.png`, 1, null),
    new Content("senmyaku", "Tech", "SENMYAKU", "「またあったね」をもっと気軽に", new Date(2025, 3, 1), ["Web"], "GitHub", "https://github.com/tarabakz25/kaikosen", `${import.meta.env.BASE_URL}img/senmyaku.png`, 0.6, "center"),
]
