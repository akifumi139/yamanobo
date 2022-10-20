import { styles } from './Note.styles';

interface NoteProps {
    note: String
}

export const Note = ({
    note
}: NoteProps) => {
    return (
        <div css={styles.shape}>{note}</div>
    );
}