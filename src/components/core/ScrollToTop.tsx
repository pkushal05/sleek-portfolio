import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname.includes("#")) return;

        if (history.scrollRestoration === "manual") {
            history.scrollRestoration = "auto";
        }
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [pathname]);

    return null;
};

export default ScrollToTop;
