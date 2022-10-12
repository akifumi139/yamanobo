import React from 'react';
import './menuLabel.css';

interface MenuLabelProps {
    label: string;
    isSelected: boolean;
    onClick?: () => void;
}

export const MenuLabel = ({
    label,
    isSelected
}: MenuLabelProps) => {
    const selectStatus = isSelected ? 'header-menu-selected' : '';
    return (
        <div className={['header-menu-label', selectStatus].join(' ')} >
            <a href=''>{label}</a>
        </div>
    );
};