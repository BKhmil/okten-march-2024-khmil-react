import React from 'react';
import css from './PostsPage.module.css';
import H1 from "../../components/h1/H1";
import postsIcon from '../../assets/icons/posts.icon.png';
import PostsList from "../../components/posts-list/PostsList";

const PostsPage = () => {
    return (
        <div className={css.PostsPage}>
            <div>
                <H1 text={'Here can be other page-content'} icon={postsIcon}/>
                <PostsList />
            </div>
        </div>
    );
};

export default PostsPage;