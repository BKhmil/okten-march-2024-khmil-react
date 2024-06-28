import React, {FC} from 'react';
import {IComment} from "../../models/comment.interface";
import CommentComponent from "../comment-component/CommentComponent";
import css from './CommentsComponent.module.css';

interface IProps {
    comments: IComment[];
}

const CommentsComponent: FC<IProps> = ({comments}) => {
    return (
        <div>
            {
                comments.length !== 0 && <h1 style={{textAlign: 'center'}}>Post id - {comments[0].postId}</h1>
            }
            <div className={css.wrapper}>
                {
                    comments.map((comment, index) => <CommentComponent key={index} comment={comment}/>)
                }
            </div>
        </div>
    );
};

export default CommentsComponent;