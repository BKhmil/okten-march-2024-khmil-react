import {apiService} from "./api.service";
import {urls} from "../constants/urls";
import {ICommentsResponse} from "../models/comments-block/comments-response.interface";

export const commentService = {
    getAll: (skip: number, limit: number): Promise<ICommentsResponse> =>
        apiService.get(urls.comments.getAll + '?skip=' + skip + '&limit=' + limit)
            .then(res => res.data)
}