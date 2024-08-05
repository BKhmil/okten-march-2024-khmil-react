import {configureStore} from "@reduxjs/toolkit";
import {usersSlice} from "./slices/users.slice";
import {postsSlice} from "./slices/posts.slice";

export const store = configureStore({
    reducer: {
        usersSlice: usersSlice.reducer,
        postsSlice: postsSlice.reducer
    }
});