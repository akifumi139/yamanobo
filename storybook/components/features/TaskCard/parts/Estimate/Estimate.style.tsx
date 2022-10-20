import { css } from "@emotion/react";

export const styles = {
    shape: css({
        width: '200px',
        height: '36px',
        borderRadius: '0px 9px 0px 24px',
        label: ({
            display: 'inline-block',
            fontSize: '16px',
            marginTop: '6px',
            marginLeft: '26px',
        })
    }),

    unfinished: css({
        backgroundColor: '#A5D6A7',
    }),

    finished: css({
        backgroundColor: '#9E9E9E',
    }),
}