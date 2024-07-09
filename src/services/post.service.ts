import {IPost} from "../models/post.interface";
import {apiService} from "./api.service";
import {urls} from "../constants/urls";

export const postService = {
    getAll: (): Promise<IPost[]> => apiService.get<IPost[]>(urls.posts.getAll)
        .then(res => res.data)
}