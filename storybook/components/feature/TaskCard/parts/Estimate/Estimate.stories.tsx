import { ComponentMeta } from "@storybook/react";
import { Estimate } from "./Estimate";

export default {
    component: Estimate
} as ComponentMeta<typeof Estimate>

export const finished = {
    args: {
        time: '1:20',
        isFinished: true,
    }
}

export const unfinished = {
    args: {
        time: '2:00',
        isFinished: false,
    }
}