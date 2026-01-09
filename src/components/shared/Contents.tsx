
export class Content {
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


    constructor(location: string, title: string, description: string, create_at: Date, tag: string[], url_type: string | null, url: string | null, img: string, img_brt: number, img_pos: string | null) {
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
    new Content("Tech", "Routepia", "人生足跡記録アプリ", new Date(2025, 4, 23), ["Native"], "GitHub", "https://github.com/LIZ-Development/Routepia", `${import.meta.env.BASE_URL}img/routepia.jpg`, 0.6, "center"),
    new Content("Tech", "Snipe me", "Cubeを貫くパズルゲーム", new Date(2025, 11, 9), ["Web"], "GitHubPages", "https://t0rixs.github.io/snipeme/", `${import.meta.env.BASE_URL}img/snipeme.png`, 0.7, "center"),
    new Content("Tech", "Togo", "飛行機/高速バスの予約管理ツール", new Date(2025, 8, 1), ["Web"], "GitHubPages", "https://t0rixs.github.io/Togo/", `${import.meta.env.BASE_URL}img/togo.png`, 0.7, "top"),
    new Content("Tech", "PocketReception", "無人図書館のための蔵書管理ツール", new Date(2024, 9, 14), ["Web"], "GitHub", "https://github.com/t0rixs/PocketReception", `${import.meta.env.BASE_URL}img/pocketreception.jpg`, 0.6, "center"),
    new Content("Tech", "Portfolio", "これ", new Date(2024, 12, 13), ["Web"], "GitHub", "https://github.com/t0rixs/Portfolio", `${import.meta.env.BASE_URL}img/Portfolio_screen.png`, 0.6, "top"),
    new Content("Activity", "Tapaz", "学生の視点を用いて経営者と新しい価値を提案する事業活動", new Date(2024, 11, 11), ["Business"], "Note", "https://note.com/tapaz", `${import.meta.env.BASE_URL}img/tapaz_work.jpg`, 0.6, null),
    new Content("Activity", "DCON", "介護業界の業務の質を向上させるサービス提供活動", new Date(2025, 10, 25), ["Activity", "Business"], null, null, `${import.meta.env.BASE_URL}img/dcon_mtg.jpg`, 0.8, null),
]
