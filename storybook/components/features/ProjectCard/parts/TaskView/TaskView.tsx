import React from "react";
import { styles } from './TaskView.styles';

interface TaskViewProps {
    task?: String;
}
export const TaskView = ({
    task = 'ようこそ',
}: TaskViewProps) => {
    return (
        <div css={styles.shape}>
            <label>今のタスク</label>
            <div>{task}</div>
        </div >
    )
}