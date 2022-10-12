import { ComponentMeta } from '@storybook/react';

import { MenuBar } from './MenuBar';

export default {
    title: 'Example/Molecule/Menu',
    component: MenuBar,
    argTypes: {
        selected: {
            options: ['progress', 'complete', 'pause'],
            control: { type: 'radio' },
        }
    }
} as ComponentMeta<typeof MenuBar>;

export const Progress = {
    args: {
        selected: 'progress'
    }
}

export const Complete = {
    args: {
        selected: 'complete'
    }
}

export const Pause = {
    args: {
        selected: 'pause'
    }
}