import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'features/themeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher/LangSwitcher';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/doc.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import cls from './Sidebar.module.scss';

export interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { t } = useTranslation();
    const handleToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(
                cls.Sidebar,
                { [cls.collapsed]: collapsed },
                [className],
            )}
            data-testid="sidebar"
        >
            <div className={cls.items}>
                <div>
                    <AppLink
                        to={RoutePath.main}
                        theme={AppLinkTheme.SECONDARY}
                        className={cls.item}
                    >
                        <HomeIcon className={cls.icon} />
                        <span className={cls.link}>
                            {t('Главная')}
                        </span>
                    </AppLink>
                </div>
                <div>
                    <AppLink
                        to={RoutePath.about}
                        className={cls.item}
                        theme={AppLinkTheme.SECONDARY}
                    >
                        <AboutIcon className={cls.icon} />
                        <span className={cls.link}>
                            {t('О сайте')}
                        </span>
                    </AppLink>
                </div>
            </div>
            <Button
                data-testid="sidebar-toggle"
                onClick={handleToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    );
};
