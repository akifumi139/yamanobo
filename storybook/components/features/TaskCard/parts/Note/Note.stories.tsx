import { ComponentMeta } from "@storybook/react";

import { Note } from "./Note";

export default {
    component: Note
} as ComponentMeta<typeof Note>

export const Basic = {
    args: {
        note: 'テスト'
    }
}