import React from 'react';
import { CardShape } from './parts/CardShape/CardShape';
import { ProjectTitle } from './parts/ProjectTitle/ProjectTitle';
import { TaskCounter } from './parts/TaskCounter/TaskCounter';
import { TaskView } from './parts/TaskView/TaskView';

interface ProjectCardProps {
    title?: string,
    deadline?: Date,
    totalTask: String,
    remainTask: String,
}

export const ProjectCard = ({
    title = 'ノードを',
    deadline = new Date(),
    totalTask = '0',
    remainTask = '0',
}: ProjectCardProps) => {
    return (
        <CardShape >
            <TaskCounter />
            <ProjectTitle title={title} deadline={deadline} />
            <TaskView />
        </CardShape >
    );
};