import { styles } from './TaskLabel.styles';

interface TaskLabelProps {
    task: String,
}

export const TaskLabel = ({ task }: TaskLabelProps) => {
    return (
        <div css={styles.shape}>{task}</div>
    );
};