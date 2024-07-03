import {IPost} from "./post.interface";

export interface IPostsResponse {
    posts: IPost[];
    total: number;
    skip: number;
    limit: number;
}