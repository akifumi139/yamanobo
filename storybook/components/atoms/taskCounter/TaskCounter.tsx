import React from "react";
import './taskCounter.css';

interface TaskCounter {
    totalTask: String,
    remainTask: String,
};

export const TaskCounter = ({
    totalTask,
    remainTask
}: TaskCounter) => {
    return (
        <div>
            <img src="./assets/TaskCounter.png" />
            <div className="task-infomation">
                <label>残りタスク</label>
                <div>
                    <span className="remain-task">{remainTask}</span>
                    <span className="total-task">({totalTask})</span>
                </div>
            </div>
        </div>
    );
};