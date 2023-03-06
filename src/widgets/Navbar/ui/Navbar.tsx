import { classNames } from 'shared/lib/classNames/classNames';
import React, { useCallback, useState } from 'react';
import { Button, ButtonVariants } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';
import cls from './Navbar.module.scss';

export interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const dispatch: AppDispatch = useDispatch();

    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

    const authData = useSelector(getUserAuthData);

    const handleCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const handleShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    type="button"
                    onClick={onLogout}
                    className={cls.link}
                    theme={ButtonVariants.CLEAR_INVERTED}
                >
                    {t('Выйти')}
                </Button>
                <LoginModal isOpen={isAuthModal} onClose={handleCloseModal} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                type="button"
                onClick={handleShowModal}
                className={cls.link}
                theme={ButtonVariants.CLEAR_INVERTED}
            >
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={handleCloseModal} />
        </div>
    );
};
