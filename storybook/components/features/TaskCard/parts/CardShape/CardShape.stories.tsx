import { ComponentMeta } from "@storybook/react";
import { CardShape } from "./CardShape";

export default {
    component: CardShape,
} as ComponentMeta<typeof CardShape>;

export const unfinished = {
    args: {
        isFinished: false
    }
}

export const finished = {
    args: {
        isFinished: true
    }
}