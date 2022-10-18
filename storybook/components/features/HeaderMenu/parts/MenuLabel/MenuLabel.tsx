import React from 'react';
import { styles } from './MenuLabel.styles';

interface MenuLabelProps {
    label: string;
    isSelected: boolean;
    // onClick?: () => void;
}

export const MenuLabel = ({
    label,
    isSelected
}: MenuLabelProps) => {
    const selectStatus = isSelected ? styles.selected : '';
    return (
        <div css={[styles.shape, selectStatus]}>
            <a css={styles.font} href=''>{label}</a>
        </div>
    );
};