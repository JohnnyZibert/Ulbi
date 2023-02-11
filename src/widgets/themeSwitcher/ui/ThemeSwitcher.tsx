import React from 'react';
import classNames from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import useTheme from "app/providers/themeProvider/lib/useTheme";
import LightIcon from 'shared/assets/icons/theme-light 1.svg'
import DarkIcon from 'shared/assets/icons/theme-dark 1.svg'
import {Theme} from "app/providers/themeProvider";
import {Button, ThemeButton} from "shared/ui/Button/Button";

export interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()
    return (
        <Button className={classNames(cls.ThemeSwitcher, {}, [className])}
                onClick={toggleTheme}
                theme={ThemeButton.CLEAR}>
            {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
        </Button>
    );
};
