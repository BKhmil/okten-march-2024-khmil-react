import React, {FC} from 'react';
import {IPost} from "../../models/post.interface";
import css from './PostListItem.module.css';

interface IProps {
    post: IPost;
}

const PostsListItem: FC<IProps> = ({post}) => {
    return (
        <div className={css.item}>
            <div>id: {post.id}</div>
            <div>title: {post.title}</div>
            <div>body: {post.body}</div>
        </div>
    );
};

export default PostsListItem;