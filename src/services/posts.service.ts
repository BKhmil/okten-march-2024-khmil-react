import {IPost} from "../models/post.interface";
import {axiosInstance} from "./axiosInstance.service";
import {urls} from "../constants/urls";

export const postsService = {
    getAll: (): Promise<IPost[]> => axiosInstance.get<IPost[]>(urls.posts.all)
        .then(res => res.data)
}