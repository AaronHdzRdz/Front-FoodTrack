import { useEffect, useLayoutEffect } from "react";

export function useAutoResizeTextArea(
    textarea: React.RefObject<HTMLTextAreaElement | null>,
    value: string
) {
    const resize = () => {
        const el = textarea.current;
        if (!el) return;
        el.style.height = "100px"; // Reset height to recalculate
        el.style.height = `${el.scrollHeight}px`;
    };

    useLayoutEffect(() => {
        resize();
    }, [value]);

    useEffect(() => {
        const handler = () => resize();
        window.addEventListener("resize", handler);
        const id = window.requestAnimationFrame(resize);
        return () => {
            window.removeEventListener("resize", handler);
            window.cancelAnimationFrame(id);
        };
    }, []);
}
