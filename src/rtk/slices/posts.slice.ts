import {AxiosError} from "axios";
import {createSlice} from "@reduxjs/toolkit";
import {IPost} from "../../models/post.interface";
import {postsExtraReducers} from "../extra-reducers/posts.extra.reducers";

type TPostsSlice = {
    allPosts: IPost[],
    isLoaded: boolean,
    error: AxiosError
}

const initialState: TPostsSlice = {
    allPosts: [],
    isLoaded: false,
    error: {} as AxiosError
};

const postsSlice = createSlice({
    name: 'postsSliceName',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(postsExtraReducers.getAllPosts.fulfilled,
                (state, action) => {
                    state.error = {} as AxiosError;
                    state.allPosts = action.payload;
                    state.isLoaded = true;
                })
            .addCase(postsExtraReducers.getAllPosts.rejected,
                (state, action) => {
                    state.error = action.payload as AxiosError;
                    state.isLoaded = false;
                })
});

const postsSliceActions = {...postsExtraReducers};

export {
    postsSlice,
    postsSliceActions
}