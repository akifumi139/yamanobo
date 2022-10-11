import { ComponentMeta } from '@storybook/react';

import { MenuLabel } from './MenuLabel';

export default {
    title: 'Example/Atom/MenuLabel',
    component: MenuLabel,
} as ComponentMeta<typeof MenuLabel>;

export const Selected = {
    args: {
        label: '進行中',
        isSelected: true,
    },
};

export const NonSelect = {
    args: {
        label: '完了',
        isSelected: false,
    }
}