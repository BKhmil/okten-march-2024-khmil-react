import React, {FC} from 'react';
import {IComment} from "../../models/comment.interface";
import css from './CommentComponent.module.css';

interface IProps {
    comment: IComment;
}

const CommentComponent: FC<IProps> = ({comment}) => {
    return (
        <div className={css.wrapper}>
            <div className={css.field}>id: {comment.id}</div>
            <div className={css.field}>email: {comment.email}</div>
            <div className={css.field}>name: {comment.name}</div>
            <div className={css.field}>body: {comment.body}</div>
        </div>
    );
};

export default CommentComponent;