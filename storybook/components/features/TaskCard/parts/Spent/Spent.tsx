import { styles } from './Spent.styles';

interface SpentProps {
    time: String
}

export const Spent = ({
    time
}: SpentProps) => {
    return (
        <div css={styles.shape}>
            <label>実働時間:</label>
            {time}
        </div>
    )
}