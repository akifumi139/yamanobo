import { ComponentMeta } from "@storybook/react";
import { TaskLabel } from "./TaskLabel";

export default {
    component: TaskLabel,
} as ComponentMeta<typeof TaskLabel>

export const Basic = {
    args: {
        task: 'インストールする',
    }
}