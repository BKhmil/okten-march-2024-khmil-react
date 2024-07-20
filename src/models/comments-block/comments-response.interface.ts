import {IComment} from "./comment.interface";

export interface ICommentsResponse {
    comments: IComment[];
    total: number;
    skip: number;
    limit: number;
}