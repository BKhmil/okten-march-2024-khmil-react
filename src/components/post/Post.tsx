import {IPost} from "../../models/post.interface";
import {FC} from "react";

interface IProps {
    post: IPost;
}

const Post: FC<IProps> = ({post}) => {
    return (
        <div>
            <div>id: {post.id}</div>
            <div>title: {post.title}</div>
            <div>body: {post.body}</div>
        </div>
    );
}

export default Post;