import {IPost} from "../../models/post.interface";
import {FC} from "react";
import {useAppDispatch} from "../../hooks/rtk";
import {postsSliceActions} from "../../rtk/slices/posts.slice";

interface IProps {
    post: IPost;
    withButton: boolean;
}

const Post: FC<IProps> = ({post, withButton}) => {
    const dispatch = useAppDispatch();

    const clickHandler = () => {
        dispatch(postsSliceActions.setFavouritePost(post.id));
    }

    return (
        <div>
            <div>id: {post.id}</div>
            <div>title: {post.title}</div>
            <div>body: {post.body}</div>
            {withButton && <button onClick={clickHandler}>set post as favourite</button>}
        </div>
    );
}

export default Post;