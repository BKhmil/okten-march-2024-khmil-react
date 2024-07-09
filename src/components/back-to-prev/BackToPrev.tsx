import React from 'react';
import {useNavigate} from "react-router-dom";
import css from './BackToPrev.module.css';

const BackToPrev = () => {
    const navigate = useNavigate();
    const prevPath = localStorage.getItem('prev');

    const clickHandler = () => {
        if (prevPath) navigate(prevPath);
    }

    return <button className={css.btn} onClick={clickHandler}>Back to prev</button>;
};

export default BackToPrev;