import { ComponentMeta } from '@storybook/react';

import { LogoutButton } from './LogoutButton';

export default {
    title: 'Example/Atom/LogoutButton',
    component: LogoutButton,
} as ComponentMeta<typeof LogoutButton>;

export const Basic = {
    args: {
        label: 'ログアウト'
    }
}