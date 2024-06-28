import React, {FC} from 'react';
import {IPost} from "../../models/post.interface";
import css from './PostComponent.module.css';

interface IProps {
    post: IPost;
    showComms: (id: number) => void;
}

const PostComponent: FC<IProps> = ({post, showComms}) => {
    return (
        <div className={css.wrapper}>
            <div className={css.field}>id: {post.id}</div>
            <div className={css.field}>title: {post.title}</div>
            <div className={css.field}>body: {post.body}</div>
            <button onClick={() => showComms(post.id)}>Show post's comments</button>
        </div>
    );
};

export default PostComponent;