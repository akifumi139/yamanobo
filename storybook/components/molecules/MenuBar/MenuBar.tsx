import React from "react";
import './menuBar.css';

import { MenuLabel } from "../../atoms/menuLabel/MenuLabel";

import { MenuBarProps } from "./types/MenuBar.types";

export const MenuBar = ({
    selected = 'progress'
}: MenuBarProps) => {

    return (
        <div className="header-menubar">
            <MenuLabel label="進行中" isSelected={selected == "progress" ? true : false} />
            <MenuLabel label="完了" isSelected={selected == "complete" ? true : false} />
            <MenuLabel label="保留" isSelected={selected == "pause" ? true : false} />
        </div>
    );
};