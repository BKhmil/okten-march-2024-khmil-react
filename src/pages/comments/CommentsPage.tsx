import React from 'react';
import css from './CommentsPage.module.css';
import H1 from "../../components/h1/H1";
import commentsIcon from "../../assets/icons/comments.icon.png";
import CommentsList from "../../components/comments-list/CommentsList";
import Paginator from "../../components/paginator/Paginator";
import {useGetDisablingValues} from "../../hooks/useGetDisablingValues";

const CommentsPage = () => {
    const {disablingValues} = useGetDisablingValues();

    return (
        <div className={css.CommentsPage}>
            <div>
                <H1 text={'Here can be other page-content'} icon={commentsIcon}/>
                <CommentsList />
                <Paginator
                    total={disablingValues.total}
                    skip={disablingValues.skip}
                    limit={disablingValues.limit}
                />
            </div>
        </div>
    );
};

export default CommentsPage;