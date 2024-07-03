import React, {Component} from 'react';
import {IPost} from "../../models/posts-block/post.interface";
import Post from "../post-component/Post";

import css from './Posts.module.css';

interface IProps {
    posts: IPost[]
}

class Posts extends Component<IProps> {
    render() {
        const posts = this.props.posts.map(post => <Post key={post.id} post={post} />)

        return (
            <div>
                {
                   posts.length !== 0 && <h1 style={{textAlign: 'center'}}>User id - {this.props.posts[0].userId}</h1>
                }
                <div className={css.wrapper}>
                    {
                        posts.length === 0 ?
                            <div style={{fontSize: '30px'}}>user does not has any posts</div>
                            :
                            posts
                    }
                </div>
            </div>);
    }
}

export default Posts;