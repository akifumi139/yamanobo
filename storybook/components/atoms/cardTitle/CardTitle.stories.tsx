
import { ComponentMeta } from '@storybook/react';

import { CardTitle } from './CardTitle';

export default {
    title: 'Example/Atom/CardTitle',
    component: CardTitle,
} as ComponentMeta<typeof CardTitle>;

export const Basic = {
    args: {
        title: 'タスク管理システムを作ろう',
        deadline: new Date('2022-9-9'),
    }
}