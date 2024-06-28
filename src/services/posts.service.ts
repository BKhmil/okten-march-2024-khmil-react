import {IPost} from "../models/post.interface";
import {apiService} from "./api.service";

const postsService = {
    getAllPosts: (): Promise<IPost[]> => {
        return apiService.get('/posts').then(res => res.data);
    }
}

export {
    postsService
}