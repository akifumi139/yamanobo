
import { ComponentMeta } from '@storybook/react';

import { AddProjectButton } from './AddProjectButton';

export default {
    title: 'Example/Atom/AddProjectButton',
    component: AddProjectButton,
} as ComponentMeta<typeof AddProjectButton>;

export const Basic = {
    args: {
        hidden: false
    }
}