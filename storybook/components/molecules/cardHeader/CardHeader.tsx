import React from 'react';
import { CardTitle } from '../../atoms/cardTitle/CardTitle';
import { TaskCounter } from '../../atoms/taskCounter/TaskCounter';
import './cardHeader.css';

interface CardHeaderProps {
    title?: string,
    deadline?: Date,
    totalTask: String,
    remainTask: String,
}

export const CardHeader = ({
    title = '新しいプロジェクト',
    deadline,
    totalTask = '0',
    remainTask = '0',
}: CardHeaderProps) => {
    return (
        <div>
            <div className='card-header-shape-task'>
                <TaskCounter totalTask={totalTask} remainTask={remainTask}></TaskCounter>
            </div>
            <div className='card-header-shape-title'>
                <CardTitle></CardTitle>
            </div>
        </div>
    )
}
