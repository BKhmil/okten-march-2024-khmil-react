import {useEffect} from "react";
import {usersSliceActions} from "../../rtk/slices/users.slice";
import {useAppDispatch, useAppSelector} from "../../hooks/rtk";
import ErrorBox from "../error-box/ErrorBox";
import User from "../user/User";
import Spinner from "../spinner/Spinner";

const Users = () => {
    const {allUsers, isLoaded, error} =
        useAppSelector(state => state.usersSlice);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(usersSliceActions.getAllUsers());
    }, []);

    const usersElements = allUsers.map(user => <User key={user.id} user={user} />);

    return (
        <div>
            {
                Object.keys(error).length !== 0 ?
                    <ErrorBox error={error} /> : isLoaded ?
                        usersElements : <Spinner />
            }
        </div>
    );
}

export default Users;