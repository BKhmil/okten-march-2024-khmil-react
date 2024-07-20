import React, {useEffect, useState} from 'react';
import {useAppLocation} from "../../hooks/useAppLocation";
import {IUser} from "../../models/users-block/user.interface";
import BackToPrev from "../back-to-prev/BackToPrev";
import {userService} from "../../services/user.service";
import {useParams} from "react-router-dom";

const UserFullInfo = () => {
    const {state: {user: userFromLocation}} = useAppLocation<{user: IUser }>();
    const {userId} = useParams();
    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        if (userFromLocation) {
            setUser(userFromLocation);
        } else if (userId) {
            userService.getById(userId).then(setUser);
        } else {
            throw new Error('F');
        }
    }, [userFromLocation, userId]);

    return (
        <>
            {
                user ?
                    <div>
                        <div>id: {user.id}</div>
                        <div>lastName: {user.lastName}</div>
                        <div>firstName: {user.firstName}</div>
                        <div>maidenName: {user.maidenName}</div>
                        <div>email: {user.email}</div>
                        <div>phone: {user.phone}</div>
                    </div>
                    :
                    <div>Oops...</div>
            }
            <BackToPrev />
        </>
    );
};

export default UserFullInfo;