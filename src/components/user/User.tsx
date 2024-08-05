import {IUser} from "../../models/user.interface";
import {FC} from "react";

interface IProps {
    user: IUser;
}

const User: FC<IProps> = ({user}) => {
    return (
        <div>
            <div>id: {user.id}</div>
            <div>name: {user.name}</div>
            <div>username: {user.username}</div>
            <div>email: {user.email}</div>
        </div>
    );
}

export default User;