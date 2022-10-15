
import { ComponentMeta } from '@storybook/react';

import { AddButton } from './AddButton';

export default {
    component: AddButton,
} as ComponentMeta<typeof AddButton>;

export const Basic = {
    args: {
        label: 'タスク追加'
    }
}