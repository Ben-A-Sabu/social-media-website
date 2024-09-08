// NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
    return (
        <div className='col Conatiner404'>
            <h1 className='error404'>404 - Page Not Found</h1>
            <p className='error404'>The page doesn't exist.</p>
            <Link to="/" className='errorresolved'>Go Home</Link>
        </div>
    );
};

export default NotFoundPage;
