
import { styles } from "./HeaderMenu.styles";
import { MenuLabel } from "./parts/MenuLabel/MenuLabel";

interface HeaderMenuProps {
    selected?: 'progress' | 'complete' | 'pause';
}

export const HeaderMenu = ({
    selected = 'progress'
}: HeaderMenuProps) => {

    return (
        <div css={styles.menuList}>
            <MenuLabel label="進行中" isSelected={selected == "progress" ? true : false} />
            <MenuLabel label="完了" isSelected={selected == "complete" ? true : false} />
            <MenuLabel label="保留" isSelected={selected == "pause" ? true : false} />
        </div>
    );
};