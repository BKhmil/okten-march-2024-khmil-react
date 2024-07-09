import React from 'react';
import css from './CommentsPage.module.css';
import H1 from "../../components/h1/H1";
import commentsIcon from "../../assets/icons/comments.icon.png";
import CommentsList from "../../components/comments-list/CommentsList";

const CommentsPage = () => {
    return (
        <div className={css.CommentsPage}>
            <div>
                <H1 text={'Here can be other page-content'} icon={commentsIcon}/>
                <CommentsList />
            </div>
        </div>
    );
};

export default CommentsPage;