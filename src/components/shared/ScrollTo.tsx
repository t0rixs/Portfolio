import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const scrollPositions = new Map<string, number>();

export default function ScrollTo() {
    const { pathname } = useLocation();
    const navType = useNavigationType();
    const prevPath = useRef<string | null>(null);

    useEffect(() => {
        // 直前のパスのスクロール位置を保存
        if (prevPath.current !== null && prevPath.current !== pathname) {
            scrollPositions.set(prevPath.current, window.scrollY);
        }

        if (navType === "POP") {
            // 戻る/進むの場合は保存していた位置を復元
            const saved = scrollPositions.get(pathname);
            if (saved !== undefined) {
                requestAnimationFrame(() => window.scrollTo(0, saved));
            } else {
                window.scrollTo(0, 0);
            }
        } else {
            // 通常遷移は先頭へ
            window.scrollTo(0, 0);
        }

        prevPath.current = pathname;
    }, [pathname, navType]);

    return null;
}
