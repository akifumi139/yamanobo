import React from "react";
import { styles } from "./Grip.styles";

interface GripProps {
    isFinished: boolean,
}

export const Grip = ({
    isFinished = true
}: GripProps) => {
    const mode = isFinished ? styles.finished : styles.unfinished;
    return (
        <div css={[styles.bar, mode]}>
            <div ></div>
            <div></div>
            <div></div>
        </div>
    );
}