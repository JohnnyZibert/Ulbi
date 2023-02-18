import React, { useEffect, useState } from 'react';

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

    return (
        <button
            onClick={onThrow}
        >
            Trow Error
        </button>
    );
};
