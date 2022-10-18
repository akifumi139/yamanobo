import React from "react";
import { AddButton } from "../../feature/AddButton/AddButton";
import { HeaderMenu } from "../../feature/HeaderMenu/HeaderMenu";
import { LogoutButton } from "../../feature/LogoutButton/LogoutButton";
import { ProjectCard } from "../../feature/ProjectCard/ProjectCard";

export const Top = () => {
    return (
        <div>
            <header>
                <LogoutButton />
                <HeaderMenu />
            </header>
            <div>
                <AddButton label="プロジェクト追加" />
                <div>
                    <ProjectCard />
                </div>
            </div>
        </div>
    );
}