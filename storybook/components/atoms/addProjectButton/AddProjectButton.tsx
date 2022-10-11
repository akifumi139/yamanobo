import React from "react";
import './addProjectButton.css';

import { AddProjectButtonProps } from "./types/AddProjectButton";

export const AddProjectButton = ({
    hidden = false,
}: AddProjectButtonProps) => {
    const isHidden = hidden ? 'add-button-hidden' : '';
    return (
        <button
            className={['add-project-button', isHidden].join(' ')}>
            プロジェクト追加
        </button>
    )
}