import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LogoutButton } from './LogoutButton';

export default {
    title: 'Example/Atom/LogoutButton',
    component: LogoutButton,
} as ComponentMeta<typeof LogoutButton>;

const Template: ComponentStory<typeof LogoutButton> = (args) => <LogoutButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    label: 'ログアウト',
};
