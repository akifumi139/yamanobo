import { CardShape } from "./parts/CardShape/CardShape";
import { Estimate } from "./parts/Estimate/Estimate";
import { Grip } from "./parts/Grip/Grip";
import { Note } from "./parts/Note/Note";
import { Spent } from "./parts/Spent/Spent";
import { TaskLabel } from "./parts/TaskLabel/TaskLabel";
import { styles } from "./TaskCard.style";

interface TaskCardProps {
    isFinished: boolean,
    task: String,
    note: String,
    estimate: String,
    spent: String,
}

export const TaskCard = ({
    isFinished = false,
    task = 'タスク',
    note = 'aaa',
    estimate = '',
    spent = '',
}: TaskCardProps) => {
    return (
        <CardShape css={styles.card} isFinished={isFinished} >
            <div css={styles.time}>
                {isFinished && <Spent time={spent} />}
                <Estimate time={estimate} isFinished={isFinished} />
            </div>
            <div css={styles.task}>
                <TaskLabel task={task} />
            </div>
            <div css={styles.grip}>
                <Grip isFinished={isFinished} />
            </div>
            <div css={styles.note}>
                <Note note={note} />
            </div>
        </CardShape>
    )
}