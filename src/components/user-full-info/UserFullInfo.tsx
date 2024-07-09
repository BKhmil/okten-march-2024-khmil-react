import React, {useEffect, useState} from 'react';
import {useAppLocation} from "../../hooks/useAppLocation";
import {IUser} from "../../models/user.interface";
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
                        <div>name: {user.name}</div>
                        <div>username: {user.username}</div>
                        <div>email: {user.email}</div>
                        <div>phone: {user.phone}</div>
                        <div>website: {user.website}</div>
                    </div>
                    :
                    <div>Oops...</div>
            }
            <BackToPrev />
        </>
    );
};

export default UserFullInfo;