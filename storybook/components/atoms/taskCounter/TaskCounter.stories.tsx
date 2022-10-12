
import { ComponentMeta } from '@storybook/react';

import { TaskCounter } from './TaskCounter';


export default {
    title: 'Example/Atom/TaskCounter',
    component: TaskCounter,
} as ComponentMeta<typeof TaskCounter>;


export const Basic = {
    args: {
        TotalTask: '10',
        RemainTask: '8',
    }
}