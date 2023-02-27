import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import React, { useCallback, useState } from 'react';
import { Button, ButtonVariants } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

export interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

    const handleToggleAuthModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                type="button"
                onClick={handleToggleAuthModal}
                className={cls.link}
                theme={ButtonVariants.CLEAR_INVERTED}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={handleToggleAuthModal}>
                {t('Lorem ipsum dolor sit amet,consectetur adipisicing elit. Aliquam cupiditate'
                    + 'fugit hicincidunt iusto labore nobis reiciendis vel veritatis voluptas!')}
            </Modal>
        </div>
    );
};
