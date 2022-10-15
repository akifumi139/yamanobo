import React from "react";
import { styles } from './TaskCounter.styles';
interface TaskCounter {
    task?: {
        total: String,
        remain: String,
    }
};

export const TaskCounter = ({
    task
}: TaskCounter) => {
    const Task =
        task?.total !== null
            ?
            <div>
                <span css={styles.remain}>{task?.remain}</span>
                <span css={styles.total}>({task?.total})</span>
            </div>
            : '';
    return (
        <div css={styles.shape}>
            <img src="./assets/TaskCounter.png" />
            <div css={styles.task}>
                <label>残りタスク</label>
                {Task}
            </div>
        </div >
    );
};