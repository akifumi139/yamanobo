import React from "react";
import { styles } from "./AddSign.styles";

export const AddSign = () => {
    return (
        <div css={styles.shape}>
            <div css={[styles.mark, styles.vertical]}></div>
            <div css={[styles.mark, styles.beside]}></div>
        </div>
    )
}