
import { ComponentMeta } from '@storybook/react';

import { TaskCounter } from './TaskCounter';


export default {
    component: TaskCounter,
} as ComponentMeta<typeof TaskCounter>;


export const Basic = {
    args: {
        totalTask: '10',
        remainTask: '8',
    }
}