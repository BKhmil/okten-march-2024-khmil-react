import {IComment} from "../models/comment.interface";
import {apiService} from "./api.service";
import {urls} from "../constants/urls";

export const commentService = {
    getAll: (): Promise<IComment[]> => apiService.get<IComment[]>(urls.comments.getAll)
        .then(res => res.data)
}