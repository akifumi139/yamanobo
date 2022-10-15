import { ComponentMeta } from '@storybook/react';

import { HeaderMenu } from './HeaderMenu';

export default {
    component: HeaderMenu,
    argTypes: {
        selected: {
            options: ['progress', 'complete', 'pause'],
            control: { type: 'radio' },
        }
    }
} as ComponentMeta<typeof HeaderMenu>;

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