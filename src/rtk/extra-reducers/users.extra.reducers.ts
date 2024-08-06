import {createAsyncThunk} from "@reduxjs/toolkit";
import {IUser} from "../../models/user.interface";
import {usersService} from "../../services/users.service";
import {AxiosError} from "axios";

const getAllUsers = createAsyncThunk<IUser[], void>(
    'usersSlice/getAllUsers',
    async (_, {fulfillWithValue, rejectWithValue}) => {
        try {
            const users = await usersService.getAll();

            return fulfillWithValue(users);
        } catch (e) {
            return rejectWithValue(e as AxiosError);
        }
    }
);

const getUserById = createAsyncThunk<IUser | null, number>(
    'usersSlice/getUserById',
    async (id, {fulfillWithValue, rejectWithValue}) => {
        try {
            const user = await usersService.getUserById(id);

            return fulfillWithValue(user);
        } catch (e) {
            return rejectWithValue(e as AxiosError);
        }
    }
);

export const usersExtraReducers = {
    getAllUsers,
    getUserById
}