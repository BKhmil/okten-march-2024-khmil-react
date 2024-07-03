import React, {Component} from 'react';
import {IPost} from "../../models/posts-block/post.interface";

import css from './Post.module.css';

interface IProps {
    post: IPost
}

class Post extends Component<IProps> {
    render() {
        const {post} = this.props;

        return (
            <div className={css.wrapper}>
                <div className={css.field}>id: {post.id}</div>
                <div className={css.field}>title: {post.title}</div>
                <div className={css.field}>body: {post.body}</div>
            </div>
        );
    }
}

export default Post;