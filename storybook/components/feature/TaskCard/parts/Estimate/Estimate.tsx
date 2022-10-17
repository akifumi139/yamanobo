import React from "react";
import { styles } from "./Estimate.style";
interface EstimateProps {
    time: String,
    isFinished: boolean,
}

export const Estimate = ({
    time = '',
    isFinished = false,
}: EstimateProps) => {
    const mode = isFinished ? styles.finished : styles.unfinished;
    return (
        <div css={[styles.shape, mode]}>
            <label>想定時間：</label>
            {time}
        </div >
    )
}