import { ReactNode } from 'react';
import { styles } from './CardShape.styles';
interface CardShapeProps {
    isFinished: boolean,
    children: ReactNode,
}

export const CardShape = ({
    isFinished = false,
    children
}: CardShapeProps) => {
    const mode = isFinished ? styles.finished : styles.unfinished;
    return (
        <div css={[styles.shape, mode]}>
            {children}
        </div>
    );
}
