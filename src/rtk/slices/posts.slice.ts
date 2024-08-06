import {AxiosError} from "axios";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost} from "../../models/post.interface";
import {postsExtraReducers} from "../extra-reducers/posts.extra.reducers";

type TPostsSlice = {
    allPosts: Map<number, IPost>;
    favouritePost: IPost | undefined;
    isLoaded: boolean;
    error: AxiosError;
}

const initialState: TPostsSlice = {
    allPosts: new Map(),
    favouritePost: undefined,
    isLoaded: false,
    error: {} as AxiosError
};

const postsSlice = createSlice({
    name: 'postsSliceName',
    initialState,
    reducers: {
        setFavouritePost(state, action: PayloadAction<number>) {
            state.favouritePost = state.allPosts.get(action.payload);
        }
    },
    extraReducers: builder =>
        builder
            .addCase(postsExtraReducers.getAllPosts.fulfilled,
                (state, action) => {
                    const postsMap = new Map();
                    action.payload.forEach(post => postsMap.set(post.id, post));

                    state.error = {} as AxiosError;
                    state.allPosts = postsMap;
                    state.isLoaded = true;
                })
            .addCase(postsExtraReducers.getAllPosts.rejected,
                (state, action) => {
                    state.error = action.payload as AxiosError;
                    state.isLoaded = false;
                })
});

const postsSliceActions = {
    ...postsExtraReducers,
    ...postsSlice.actions
};

export {
    postsSlice,
    postsSliceActions
}