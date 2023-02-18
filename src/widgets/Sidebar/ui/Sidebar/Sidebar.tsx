import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'features/themeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher/LangSwitcher';
import cls from './Sidebar.module.scss';

export interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const handleToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div className={classNames(
            cls.Sidebar,
            { [cls.collapsed]: collapsed },
            [className],
        )}
        >
            <Button onClick={handleToggle}>Toggle</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
