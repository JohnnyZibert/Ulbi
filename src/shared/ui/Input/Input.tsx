import React, { InputHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?:string
    onChange?: (value: string) => void
    type: string
    placeholder?: string
}

export const Input = (props :InputProps) => {
    const {
        className,
        value,
        onChange,
        placeholder,
        type = 'text',
        ...otherProps
    } = props;

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <input
                className={cls.input}
                type={type}
                value={value}
                onChange={handleOnChange}
                {...otherProps}
            />
        </div>
    );
};
