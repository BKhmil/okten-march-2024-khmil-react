import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {postsService} from "../../services/posts.service";
import {IPost} from "../../models/post.interface";

const getAllPosts = createAsyncThunk<IPost[], void, {}>(
    'postsSlice/getAllPosts',
    async (_, {fulfillWithValue, rejectWithValue}) => {
        try {
            const posts = await postsService.getAll();

            return fulfillWithValue(posts);
        } catch (e) {
            return rejectWithValue(e as AxiosError);
        }
    }
);

export const postsExtraReducers = {
    getAllPosts
}