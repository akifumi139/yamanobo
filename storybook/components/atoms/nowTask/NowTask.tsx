import React from "react";
import './nowTask.css';

interface AddProjectButtonProps {
    explain: String;
}
export const NowTask = ({
    explain = '',
}: AddProjectButtonProps) => {
    return (
        <div className="now-task-shape">
            <label>今のタスク</label>
            <div>{explain}</div>
        </div >
    )
}