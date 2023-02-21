import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Для тестирования errorBoundary

export const BugButton = () => {
    const [error, setError] = useState(false);
    const onThrow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw Error;
        }
    }, [error]);
    const { t } = useTranslation();

    return (
        <button
            type="button"
            onClick={onThrow}
        >
            {t('Trow Error')}
        </button>
    );
};
