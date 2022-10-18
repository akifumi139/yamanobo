
import { ComponentMeta } from '@storybook/react';

import { ProjectTitle } from './ProjectTitle';

export default {
    component: ProjectTitle,
} as ComponentMeta<typeof ProjectTitle>;

export const Basic = {
    args: {
        title: 'タスク管理システムを作ろう',
        deadline: new Date('2022-9-9'),
    }
}