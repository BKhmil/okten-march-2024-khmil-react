import React from 'react';
import css from './PostsPage.module.css';
import H1 from "../../components/h1/H1";
import postsIcon from '../../assets/icons/posts.icon.png';
import PostsList from "../../components/posts-list/PostsList";
import {useGetDisablingValues} from "../../hooks/useGetDisablingValues";
import Paginator from "../../components/paginator/Paginator";

const PostsPage = () => {
    const {disablingValues} = useGetDisablingValues();

    return (
        <div className={css.PostsPage}>
            <div>
                <H1 text={'Here can be other page-content'} icon={postsIcon}/>
                <PostsList />
                <Paginator
                    total={disablingValues.total}
                    skip={disablingValues.skip}
                    limit={disablingValues.limit}
                />
            </div>
        </div>
    );
};

export default PostsPage;