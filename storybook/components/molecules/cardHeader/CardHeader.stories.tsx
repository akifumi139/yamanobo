
import { ComponentMeta } from '@storybook/react';

import { CardHeader } from './CardHeader';

export default {
    title: 'Example/Molecule/CardHeader',
    component: CardHeader,
} as ComponentMeta<typeof CardHeader>;

export const Basic = {
    args: {
        title: 'タスク管理システムを作ろう',
        deadline: new Date('2022-9-9'),
        totalTask: '10',
        remainTask: '8',
    }
}