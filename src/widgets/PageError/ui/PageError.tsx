import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

export interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }:PageErrorProps) => {
    const { t } = useTranslation('errorBoundary');
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p className={cls.errorText}>{t('Произошла непредвиденная ошибка')}</p>
            <button className={cls.reloadBtn} onClick={reloadPage}>
                {t('Перезагрузить страницу')}
            </button>
        </div>
    );
};
