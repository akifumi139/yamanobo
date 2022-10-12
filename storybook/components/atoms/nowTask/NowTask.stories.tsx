
import { ComponentMeta } from '@storybook/react';

import { NowTask } from './NowTask';

export default {
    title: 'Example/Atom/NowTask',
    component: NowTask,
} as ComponentMeta<typeof NowTask>;

export const Basic = {
    args: {
        explain: 'test'
    }
}