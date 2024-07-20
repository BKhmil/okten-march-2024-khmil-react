import React, {useEffect, useState} from 'react';
import {IUser} from "../../models/users-block/user.interface";
import {userService} from "../../services/user.service";
import UsersListItem from "../users-list-item/UsersListItem";
import {USERS_LIMIT} from "../../constants/urls";
import {useSearchParams} from "react-router-dom";
import {useGetDisablingValues} from "../../hooks/useGetDisablingValues";

const UsersList = () => {
    const {getDisablingValues} = useGetDisablingValues();

    const [users, setUsers] = useState<IUser[]>([]);
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page');

    useEffect(() => {
        let skipValue = Number(page) * USERS_LIMIT - USERS_LIMIT;
        userService.getAll(skipValue, USERS_LIMIT).then(data => {
            getDisablingValues({total: data.total, skip: data.skip, limit: data.limit});
            setUsers(data.users);
        });
    }, [page]);

    const usersElements = users.map(user => <UsersListItem key={user.id} user={user} />);

    return (
        <div>
            <h2>All users</h2>
            {usersElements}
        </div>
    );
};

export default UsersList;