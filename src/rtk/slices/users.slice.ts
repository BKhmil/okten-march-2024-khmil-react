import {createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {IUser} from "../../models/user.interface";
import {AxiosError} from "axios";
import {usersExtraReducers} from "../extra-reducers/users.extra.reducers";

type TUsersSlice = {
    allUsers: IUser[],
    isLoaded: boolean,
    error: AxiosError,
    singleUser: IUser | null
}

const initialState: TUsersSlice = {
    allUsers: [],
    isLoaded: false,
    error: {} as AxiosError,
    singleUser: null
};

const usersSlice = createSlice({
    name: 'usersSliceName',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(usersExtraReducers.getAllUsers.fulfilled,
                (state, action) => {
                    state.allUsers = action.payload;
            })
            .addCase(usersExtraReducers.getUserById.fulfilled,
                (state, action) => {
                    state.singleUser = action.payload;
                })
            .addMatcher(isFulfilled(usersExtraReducers.getAllUsers, usersExtraReducers.getUserById),
                (state) => {
                    state.error = {} as AxiosError;
                    state.isLoaded = true;
                })
            .addMatcher(isRejected(usersExtraReducers.getUserById, usersExtraReducers.getUserById),
                (state, action) => {
                    state.error = action.payload as AxiosError;
                    state.isLoaded = false;
                })
});

const usersSliceActions = {...usersExtraReducers};

export {
    usersSlice,
    usersSliceActions
}