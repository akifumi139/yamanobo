import React from "react";
import { styles } from './TaskCounter.styles';
interface TaskCounter {
    totalTask?: String,
    remainTask?: String,
};

export const TaskCounter = ({
    totalTask = '10',
    remainTask = '10'
}: TaskCounter) => {
    const Task =
        totalTask !== ''
            ?
            <div>
                <span css={styles.remain}>{remainTask}</span>
                <span css={styles.total}>({totalTask})</span>
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