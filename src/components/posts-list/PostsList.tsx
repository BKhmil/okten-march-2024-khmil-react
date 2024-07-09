import React, {useEffect, useState} from 'react';
import {IPost} from "../../models/post.interface";
import {postService} from "../../services/post.service";
import PostsListItem from "../posts-list-item/PostsListItem";

const PostsList = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        postService.getAll().then(data => setPosts(data.slice(0, 20)));
    }, []);

    const postsElements = posts.map(post => <PostsListItem key={post.id} post={post} />)

    return (
        <div>
            <h2>All posts</h2>
            {postsElements}
        </div>
    );
};

export default PostsList;