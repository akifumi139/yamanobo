import { css } from "@emotion/react";

export const styles = {
    shape: css({
        width: '285px',
        height: '55px',
        backgroundColor: '#B8B9B7',
        textAlign: 'center',
        borderRadius: '0px 0px 24px 24px',
    }),
    font: css({
        display: 'block',
        fontSize: '20px',
        letterSpacing: '5px',
        color: 'white',
        fontWeight: 'bold',
        lineHeight: '55px',
        textDecoration: 'none',
    }),

    selected: css({
        backgroundColor: '#00796B',
    }),
}