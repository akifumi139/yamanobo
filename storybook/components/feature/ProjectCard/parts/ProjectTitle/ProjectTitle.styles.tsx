import { css } from '@emotion/react';

export const styles = {
    shape: css({
        height: '170px',
    }),
    infomation: css({
        position: 'relative',
        top: '-160px',
        right: '10px',
        width: '320px',
        color: 'white',
        textAlign: 'right',
    }),
    title: css({
        fontSize: '18px',
    }),
    deadline: css({
        marginTop: '-2px',
        label: css({
            fontSize: '11px',
            marginRight: '115px',
        }),
        div: css({
            marginTop: '-6px',
            fontSize: '20px',
        })
    }),
    counter: css({
        marginTop: '-4px',
        label: css({
            fontSize: '12px',
            marginRight: '70px',
        }),
        div: css({
            fontSize: '32px',
            marginTop: '-10px',
            fontWeight: 'bold',
        })
    }),
}