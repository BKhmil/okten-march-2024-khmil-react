import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../models/user.interface";
import {AxiosError} from "axios";
import {usersExtraReducers} from "../extra-reducers/users.extra.reducers";

type TUsersSlice = {
    allUsers: IUser[],
    isLoaded: boolean,
    error: AxiosError
}

const initialState: TUsersSlice = {
    allUsers: [],
    isLoaded: false,
    error: {} as AxiosError
};

const usersSlice = createSlice({
    name: 'usersSliceName',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(usersExtraReducers.getAllUsers.fulfilled,
            (state, action) => {
                state.error = {} as AxiosError;
                state.allUsers = action.payload;
                state.isLoaded = true;
            })
            .addCase(usersExtraReducers.getAllUsers.rejected,
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