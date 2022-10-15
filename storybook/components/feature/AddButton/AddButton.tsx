import React from "react";
import { styles } from "./AddButton.styles";
import { AddSign } from "./parts/AddSign";

interface AddButtonProps {
    label: string,
    size?: 'small' | 'normal' | 'large',
}
export const AddButton = ({
    label,
    size = 'small',
}: AddButtonProps) => {
    return (
        <button
            css={[styles.reset, styles.button, styles.shape]}>
            <AddSign></AddSign>
            <label css={styles.label}>{label}</label>
        </button>
    )
}