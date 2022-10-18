import { ReactNode } from 'react';
import { styles } from './CardShape.styles';
interface CardShapeProps {
    isFinished: boolean,
    chaidren?: ReactNode,
}

export const CardShape = ({
    isFinished = false,
    chaidren
}: CardShapeProps) => {
    const mode = isFinished ? styles.unfinished : styles.finished
    return (
        <div css={[styles.shape, mode]}></div>
    );
}
