import {IPostsResponse} from "../models/posts-block/posts-response.interface";
import {apiService} from "./api.service";

export const postsService = {
    getPostsOfUserById: (id: number): Promise<IPostsResponse> => apiService.get('/users/' + id + '/posts')
        .then(res => res.data)
};