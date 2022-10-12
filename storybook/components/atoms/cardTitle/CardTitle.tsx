import React from 'react';
import './cardTitle.css';

interface CardTitleProps {
    title?: string,
    deadline?: Date,
}

export const CardTitle = ({
    title = '新しいプロジェクト',
    deadline
}: CardTitleProps) => {
    const datetime = FormatDateJa(deadline);
    const countdown = CalcCountdown(deadline);
    return (
        <div>
            <img src='./assets/CardTitle.png' />
            <div className='card-header-info'>
                <div className='card-header-title'>{title}</div>
                <div className='card-header-deadline'>
                    <label>締め切り</label>
                    <div>{datetime}</div>
                </div>
                <div className='card-header-countdown'>
                    <label>あと</label>
                    <div>{countdown}日</div>
                </div>
            </div>
        </div>
    )
}

const FormatDateJa = (deadline?: Date): String => {
    if (!deadline) {
        return '';
    }
    const Year = deadline.getFullYear();
    const Month = deadline.getMonth() + 1;
    const Date = deadline.getDate();
    return Year + "年" + Month + "月" + Date + "日";
}

const CalcCountdown = (deadline?: Date): string => {
    if (!deadline) {
        return '';
    }
    const deadlineDate: Date = new Date(formatDate(deadline));
    const today: Date = new Date(formatDate(new Date()));
    const diffDay: number = Math.floor((today.getTime() - deadlineDate.getTime()) / 86400000);
    return String(diffDay);
}

const formatDate = (date: Date): string => {
    const y: number = date.getFullYear();
    const m: string = ("00" + (date.getMonth() + 1)).slice(-2);
    const d: string = ("00" + date.getDate()).slice(-2);
    return `${y + "-" + m + "-" + d}`;
};