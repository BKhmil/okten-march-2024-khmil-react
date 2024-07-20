import {apiService} from "./api.service";
import {urls} from "../constants/urls";
import {IPostsResponse} from "../models/posts-block/posts-response.interface";

export const postService = {
    getAll: (skip: number, limit: number): Promise<IPostsResponse> =>
        apiService.get(urls.posts.getAll + '?skip=' + skip + '&limit=' + limit)
            .then(res => res.data)
}