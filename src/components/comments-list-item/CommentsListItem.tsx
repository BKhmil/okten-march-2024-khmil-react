import React, {FC} from 'react';
import {IComment} from "../../models/comments-block/comment.interface";
import css from './CommentsListItem.module.css';

interface IProps {
    comment: IComment;
}

const CommentsListItem: FC<IProps> = ({comment}) => {
    return (
        <div className={css.item}>
            <div>id: {comment.id}</div>
            <div>likes: {comment.likes}</div>
            <div>body: {comment.body}</div>
        </div>
    );
};

export default CommentsListItem;