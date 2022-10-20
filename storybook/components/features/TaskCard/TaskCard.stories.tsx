import { ComponentMeta } from "@storybook/react";
import { TaskCard } from "./TaskCard";

export default {
    component: TaskCard
} as ComponentMeta<typeof TaskCard>

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