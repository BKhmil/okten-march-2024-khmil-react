import React, {Component} from 'react';
import {IUser} from "../../models/users-block/user.interface";

import css from './User.module.css';

interface IProps {
    user: IUser;
    handleClick: (userId: number) => void;
}

class User extends Component<IProps> {
    render() {
        const {user, handleClick} = this.props;

        return (
            <div className={css.wrapper}>
                <div className={css.field}>id: {user.id}</div>
                <div className={css.field}>firstName: {user.firstName}</div>
                <div className={css.field}>lastName: {user.lastName}</div>
                <div className={css.field}>maidenName: {user.maidenName}</div>
                <div className={css.field}>age: {user.age}</div>
                <button onClick={() => handleClick(user.id)}>show user's posts</button>
            </div>
        );
    }
}

export default User;