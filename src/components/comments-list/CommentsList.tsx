import React, {useEffect, useState} from 'react';
import {IComment} from "../../models/comments-block/comment.interface";
import {commentService} from "../../services/comment.service";
import CommentsListItem from "../comments-list-item/CommentsListItem";
import {COMMENTS_LIMIT} from "../../constants/urls";
import {useGetDisablingValues} from "../../hooks/useGetDisablingValues";
import {useSearchParams} from "react-router-dom";

const CommentsList = () => {
    const {getDisablingValues} = useGetDisablingValues();

    const [comments, setComments] = useState<IComment[]>([]);
    const [searchParams] = useSearchParams();
    const page = Number(searchParams.get('page') ?? '1');

    useEffect(() => {
        let skipValue = Number(page) * COMMENTS_LIMIT - COMMENTS_LIMIT;
        commentService.getAll(skipValue, COMMENTS_LIMIT).then(data => {
            getDisablingValues({total: data.total, skip: data.skip, limit: data.limit});
            setComments(data.comments);
        });
    }, [page]);

    const commentsElements = comments.map(comment =>
        <CommentsListItem key={comment.id} comment={comment} />);

    return (
        <div>
            <h2>All comments</h2>
            {commentsElements}
        </div>
    );
};

export default CommentsList;