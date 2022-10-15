
import { ComponentMeta } from '@storybook/react';

import { TaskView } from './TaskView';

export default {
    component: TaskView,
} as ComponentMeta<typeof TaskView>;

export const Basic = {
    args: {
        explain: 'test'
    }
}