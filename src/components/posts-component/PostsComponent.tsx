import React, {useEffect, useState} from 'react';
import {IPost} from "../../models/post.interface";
import {postsService} from "../../services/posts.service";
import PostComponent from "../post-component/PostComponent";
import css from './PostsComponent.module.css';
import CommentsComponent from "../comments-component/CommentsComponent";
import {IComment} from "../../models/comment.interface";
import {commentsService} from "../../services/comments.service";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        postsService.getAllPosts().then(data => setPosts(data.slice(0, 10)));
    }, []);

    const showComms = (id: number) => {
        commentsService.getCommentsByPostId(id).then(data => setComments(data));
    }

    return (
        <div>
            <hr/>
            <h1 style={{textAlign: 'center'}}>Posts</h1>
            <div className={css.postsWrapper}>
                {
                    posts.map((post, index) => <PostComponent key={index} post={post} showComms={showComms}/>)
                }
            </div>
            <hr/>
            {
                comments ?
                    <CommentsComponent comments={comments} />
                    :
                    <div style={{fontSize: '30px'}}>press "show post's comments" button</div>
            }
        </div>
    );
};

export default PostsComponent;