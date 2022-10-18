import { css } from '@emotion/react';

export const styles = {
    shape: css({
        height: '0px',
        marginLeft: '25px',
    }),
    task: css({
        marginTop: '-75px',
        marginLeft: '3px',
        label: css({
            fontSize: '10px',
        }),
        div: css({
            marginTop: '-8px',
            marginLeft: '15px',
        })
    }),

    remain: css({
        fontSize: '32px',
        fontWeight: 'bold',
    }),

    total: css({
        fontSize: '16px',
        marginLeft: '3px',
    })

}
