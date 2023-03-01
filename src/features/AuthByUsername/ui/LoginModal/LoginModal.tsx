import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

export interface LoginModalProps {
    className?: string
    isOpen:boolean
    onClose: ()=> void
}

export const LoginModal = ({ className, onClose, isOpen }:LoginModalProps) => (
    <Modal
        className={classNames('', {}, [className])}
        onClose={onClose}
        isOpen={isOpen}
        lazy
    >
        <LoginForm />
    </Modal>
);
