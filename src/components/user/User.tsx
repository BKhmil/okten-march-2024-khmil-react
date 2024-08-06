import {IUser} from "../../models/user.interface";
import {FC} from "react";
import {useAppDispatch} from "../../hooks/rtk";
import {usersSliceActions} from "../../rtk/slices/users.slice";

interface IProps {
    user: IUser;
    withButton: boolean;
}

const User: FC<IProps> = ({user, withButton}) => {
    const dispatch = useAppDispatch();

    const clickHandler = () => {
        dispatch(usersSliceActions.getUserById(user.id));
    }

    return (
        <div>
            <div>id: {user.id}</div>
            <div>name: {user.name}</div>
            <div>username: {user.username}</div>
            <div>email: {user.email}</div>
            {withButton && <button onClick={clickHandler}>set user as favourite</button>}
        </div>
    );
}

export default User;