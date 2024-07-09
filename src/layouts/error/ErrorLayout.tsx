import React from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import css from './ErrorLayout.module.css';

const ErrorLayout = () => {
    return (
        <div>
            <Header />
            <div className={css.errorBody}>Page not found</div>
            <Footer />
        </div>
    );
};

export default ErrorLayout;