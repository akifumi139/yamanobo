import React from 'react';
import { CardShape } from './parts/CardShape/CardShape';
import { ProjectTitle } from './parts/ProjectTitle/ProjectTitle';
import { TaskCounter } from './parts/TaskCounter/TaskCounter';
import { TaskView } from './parts/TaskView/TaskView';

interface ProjectCardProps {
    title?: string,
    deadline?: Date,
    task?: {
        total: String,
        remain: String,
    }
}


export const ProjectCard = ({
    title,
    deadline,
    task
}: ProjectCardProps) => {
    return (
        <CardShape >
            <TaskCounter task={task} />
            <ProjectTitle title={title} deadline={deadline} />
            <TaskView />
        </CardShape >
    );
};