import React, {useEffect, useState} from 'react';
import {IComment} from "../../models/comment.interface";
import {commentService} from "../../services/comment.service";
import CommentsListItem from "../comments-list-item/CommentsListItem";

const CommentsList = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        commentService.getAll().then(data => setComments(data.slice(0, 20)));
    }, []);

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