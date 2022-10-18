import React from "react";
import { AddButton } from "../../features/AddButton/AddButton";
import { HeaderMenu } from "../../features/HeaderMenu/HeaderMenu";
import { LogoutButton } from "../../features/LogoutButton/LogoutButton";
import { ProjectCard } from "../../features/ProjectCard/ProjectCard";

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