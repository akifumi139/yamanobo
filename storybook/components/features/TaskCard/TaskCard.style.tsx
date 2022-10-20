import { css } from "@emotion/react";

export const styles = {
    card: css({
        position: "relative",
    }),
    time: css({
        display: "flex",
        justifyContent: "flex-end",
    }),
    task: css({
        position: "absolute",
        left: '40px',
    }),
    grip: ({
        position: "absolute",
        top: '93px',
    }),
    note: css({
        position: "absolute",
        top: '120px',
        left: '330px',
    }),
}