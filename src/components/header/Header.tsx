import React from 'react';
import {NavLink} from "react-router-dom";
import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.Header}>
            <ul>
                <li><NavLink to={''}>Home</NavLink></li>
                <li><NavLink to={'users'}>Users</NavLink></li>
                <li><NavLink to={'posts'}>Posts</NavLink></li>
                <li><NavLink to={'comments'}>Comments</NavLink></li>
                <li><NavLink to={'asdasdsa'}>ERROR</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;