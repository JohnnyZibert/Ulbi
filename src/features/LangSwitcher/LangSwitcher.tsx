import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariants } from 'shared/ui/Button/Button';

export interface LangSwitcherProps {
    className?: string
    short: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const { className, short } = props;
    const { t, i18n } = useTranslation('translation');
    const handleTranslate = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            theme={ButtonVariants.CLEAR}
            onClick={handleTranslate}
            className={classNames('', {}, [className])}
        >
            {short ? t('Короткий язык') : t('Язык')}
        </Button>
    );
};
