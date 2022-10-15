import { css } from "@emotion/react";

export const styles = {
    shape: css({
        width: 'fit-content',
        display: 'grid',
        gridTemplateColumns: '50px auto',
        gridTemplateAreas: `'sign label'`,
    }),
    reset: css({
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
        padding: 0,
        appearance: 'none',
    }),
    button: css({
        gridArea: 'sign',
        height: '60px',
        backgroundColor: '#89D68C',
        fontSize: '16px',
        color: 'white',
        border: 'none',
        borderRadius: '30px 16px 16px 30px',
        marginLeft: '10px;',
    }),
    label: css({
        gridArea: 'label',
        marginTop: '20px',
        fontWeight: 'bold',
        cursor: 'pointer',
        paddingLeft: '6px',
        paddingRight: '12px',
    }),
}