import { css } from "@emotion/react";

export const styles = {
    shape: css({
        width: '60px',
        height: '60px',
        marginLeft: '-10px',
        backgroundColor: '#66BB6A',
        borderRadius: '30px',
        position: 'relative',
    }),

    mark: css({
        position: 'absolute',
        top: "12px",
        left: '25px',
        width: '10px',
        height: '36px',
        backgroundColor: 'white',
        borderRadius: '8px',
    }),

    vertical: css({
        transform: 'rotate(0deg)',
    }),
    beside: css({
        transform: 'rotate(90deg)',
    })
}