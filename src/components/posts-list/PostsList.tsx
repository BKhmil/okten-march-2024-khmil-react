import React, {useEffect, useState} from 'react';
import {IPost} from "../../models/posts-block/post.interface";
import {postService} from "../../services/post.service";
import PostsListItem from "../posts-list-item/PostsListItem";
import {POSTS_LIMIT} from "../../constants/urls";
import {useSearchParams} from "react-router-dom";
import {useGetDisablingValues} from "../../hooks/useGetDisablingValues";

const PostsList = () => {
    const {getDisablingValues} = useGetDisablingValues();

    const [posts, setPosts] = useState<IPost[]>([]);
    const [searchParams] = useSearchParams();
    const page = Number(searchParams.get('page') ?? '1');

    useEffect(() => {
        let skipValue = Number(page) * POSTS_LIMIT - POSTS_LIMIT;
        postService.getAll(skipValue, POSTS_LIMIT).then(data => {
            getDisablingValues({total: data.total, skip: data.skip, limit: data.limit});
            setPosts(data.posts);
        });
    }, [page]);

    const postsElements = posts.map(post => <PostsListItem key={post.id} post={post} />)

    return (
        <div>
            <h2>All posts</h2>
            {postsElements}
        </div>
    );
};

export default PostsList;