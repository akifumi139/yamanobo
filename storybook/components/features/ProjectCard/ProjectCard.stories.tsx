import { ComponentMeta } from '@storybook/react';

import { ProjectCard } from './ProjectCard';

export default {
    component: ProjectCard,
} as ComponentMeta<typeof ProjectCard>;

export const Basic = {
    args: {
        task: {
            total: 10,
            remain: 9,
        }
    }
}