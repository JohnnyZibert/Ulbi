import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import useTheme from 'app/providers/ThemeProvider/lib/useTheme';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonVariants } from 'shared/ui/Button/Button';
import LightIcon from '../../../shared/assets/icons/theme-light.svg';
import DarkIcon from '../../../shared/assets/icons/theme-dark.svg';

export interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
            theme={ButtonVariants.CLEAR}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
