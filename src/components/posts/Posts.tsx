import {useAppDispatch, useAppSelector} from "../../hooks/rtk";
import ErrorBox from "../error-box/ErrorBox";
import Spinner from "../spinner/Spinner";
import Post from "../post/Post";
import {useEffect} from "react";
import {postsSliceActions} from "../../rtk/slices/posts.slice";

const Posts = () => {
    const {allPosts, isLoaded, error} =
        useAppSelector(state => state.postsSlice);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postsSliceActions.getAllPosts());
    }, []);

    const postsElements = allPosts.map(post => <Post key={post.id} post={post} />);

    return (
        <div>
            {
                Object.keys(error).length !== 0 ?
                    <ErrorBox error={error} /> : isLoaded ?
                        postsElements : <Spinner />
            }
        </div>
    );
}

export default Posts;