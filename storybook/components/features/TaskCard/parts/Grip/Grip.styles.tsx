import { css } from "@emotion/react";

export const styles = {
    bar: css({
        div: ({
            width: '33px',
            height: '8px',
            marginTop: '4px',
            marginBottom: '4px',
        })
    }),

    finished: css({
        div: ({
            backgroundColor: '#838383',
        }),
    }),

    unfinished: css({
        div: ({
            backgroundColor: '#00796B',
        }),
    }),
}