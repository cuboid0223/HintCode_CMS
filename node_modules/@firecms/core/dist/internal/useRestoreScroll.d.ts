import React from "react";
export declare function useRestoreScroll(): {
    containerRef: React.RefObject<HTMLDivElement>;
    scroll: number;
    direction: "up" | "down";
};
