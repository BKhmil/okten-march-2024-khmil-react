import React, {useEffect, useState} from 'react';
import {IUser} from "../../models/user.interface";
import {userService} from "../../services/user.service";
import UsersListItem from "../users-list-item/UsersListItem";

const UsersList = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAll().then(setUsers);
    }, []);

    const usersElements = users.map(user => <UsersListItem key={user.id} user={user} />);

    return (
        <div>
            <h2>All users</h2>
            {usersElements}
        </div>
    );
};

export default UsersList;