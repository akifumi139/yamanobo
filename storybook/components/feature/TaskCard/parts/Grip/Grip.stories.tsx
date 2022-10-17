import { ComponentMeta } from "@storybook/react";

import { Grip } from "./Grip";

export default {
    component: Grip
} as ComponentMeta<typeof Grip>

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