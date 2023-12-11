import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import '../style/NotFoundPage.css';

const NotFoundPage = () => {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="not-found-page">
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for might have been removed, or is temporarily unavailable.</p>
        </div>
    );
};

export default NotFoundPage;
