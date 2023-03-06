import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum ThemeText {
    PRIMARY= 'primary',
    ERROR= 'error'
}

export interface TextProps {
    className?: string
    title?: string
    text?: string
    themeText?: ThemeText
}

export const Text = (props: TextProps) => {
    const {
        className,
        title,
        text,
        themeText = ThemeText.PRIMARY,
    } = props;
    return (
        <div className={classNames(cls.Text, { [cls[themeText]]: true }, [className])}>
            {title && <div className={cls.title}>{title}</div>}
            {text && <div className={cls.text}>{text}</div>}
        </div>
    );
};
