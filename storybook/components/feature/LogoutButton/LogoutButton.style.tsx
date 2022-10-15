import { css } from "@emotion/react";

const styles = {
    button: css({
        backgroundColor: '#89D68C',
        border: 'none',
        borderRadius: '8px',
        width: '135px',
        height: '45px',
        verticalAlign: 'middle',
        fontSize: '20px',
        fontFamily: 'メイリオ',
        letterSpacing: '2px',
        color: '#ffffff',
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: '#66BB6A',
        }
    }),
};

export { styles };