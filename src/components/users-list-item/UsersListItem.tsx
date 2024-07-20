import React, {FC} from 'react';
import {IUser} from "../../models/users-block/user.interface";
import {useLocation, useNavigate} from "react-router-dom";
import css from './UsersListItem.module.css';

interface IProps {
    user: IUser;
}

const UsersListItem: FC<IProps> = ({user}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const clickHandler = () => {
        localStorage.setItem('prev', location.pathname + location.search);
        navigate(user.id.toString(), {state: {user}});
    }

    return (
        <div className={css.item}>
            <span>{user.id} - {user.lastName}</span> <button onClick={clickHandler}>watch full info</button>
        </div>
    );
};

export default UsersListItem;