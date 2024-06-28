import {IComment} from "../models/comment.interface";
import {apiService} from "./api.service";

const commentsService = {
    getCommentsByPostId: (id: number): Promise<IComment[]> => {
        return apiService.get('/posts/' + id + '/comments').then(res => res.data);
    }
}

export {
    commentsService
}