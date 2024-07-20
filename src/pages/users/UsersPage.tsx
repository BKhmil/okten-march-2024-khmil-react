import React from 'react';
import css from './UsersPage.module.css';
import H1 from "../../components/h1/H1";
import usersIcon from '../../assets/icons/users.icon.png';
import {Outlet, useLocation} from "react-router-dom";
import Paginator from "../../components/paginator/Paginator";
import {useGetDisablingValues} from "../../hooks/useGetDisablingValues";

const UsersPage = () => {
    const {getDisablingValues, disablingValues} = useGetDisablingValues();

    const location = useLocation();

    const regex = /^\/users\/.*/;

    return (
        <div className={css.UserPage}>
            <div>
                <H1 text={'Here can be other page-content'} icon={usersIcon} />
                <div>
                    <Outlet context={{getDisablingValues}}/>
                    {
                        !regex.test(location.pathname) && <Paginator
                            total={disablingValues.total}
                            skip={disablingValues.skip}
                            limit={disablingValues.limit}
                        />
                    }
                </div>
            </div>
        </div>
    );
};

export default UsersPage;