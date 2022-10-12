import React from "react";
import './taskCounter.css';

interface TaskCounter {
    TotalTask: String,
    RemainTask: String,
};

export const TaskCounter = ({
    TotalTask,
    RemainTask
}: TaskCounter) => {
    return (
        <div>
            <img src="./assets/TaskCounter.png" />
            <div className="task-infomation">
                <label>残りタスク</label>
                <div>
                    <span className="remain-task">{RemainTask}</span>
                    <span className="total-task">({TotalTask})</span>
                </div>
            </div>
        </div>
    );
};