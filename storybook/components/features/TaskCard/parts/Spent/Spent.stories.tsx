import { ComponentMeta } from "@storybook/react";
import { time } from "console";
import { Spent } from "./Spent";

export default {
    component: Spent
} as ComponentMeta<typeof Spent>

export const Basic = {
    args: {
        time: '12:00'
    }
}