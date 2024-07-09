import React from 'react';
import css from './UsersPage.module.css';
import H1 from "../../components/h1/H1";
import usersIcon from '../../assets/icons/users.icon.png';
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div className={css.UserPage}>
            <div>
                <H1 text={'Here can be other page-content'} icon={usersIcon} />
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default UsersPage;