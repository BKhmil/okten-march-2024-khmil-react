import {useAppDispatch, useAppSelector} from "../../hooks/rtk";
import ErrorBox from "../error-box/ErrorBox";
import Spinner from "../spinner/Spinner";
import Post from "../post/Post";
import {useEffect} from "react";
import {postsSliceActions} from "../../rtk/slices/posts.slice";
import {IPost} from "../../models/post.interface";

const Posts = () => {
    const {allPosts, isLoaded, error} =
        useAppSelector(state => state.postsSlice);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postsSliceActions.getAllPosts());
    }, []);

    // можна було напевно і в самому слайсі завести окремо масив і окремо Map
    // але тоді у нас буде постійно виділена пам'ять по суті для одного місця в коді
    // хоча якщо додаток був би більшим, то нам би 100% потрібний був саме масив з постами ще десь
    // ну але це таке, основна ідея ж в тому щоб не робити запити на кожен пост
    // звісно якщо б при запиті нам би давалось більше інфи ніж при запиті на всі пости, то те що я зробив - фігня
    // але в даному випадку все гуд

    // по-ідеї можна було б і просто через Array.findIndex чи Array.filter таке робити
    // але уявімо що нам одним куском 1000 юзерів віддається
    // краще тоді 1 раз промотати цю тисячу для того щоб зробити з Map масив,
    // ніж кожен раз мотати тисячу при кліку, бо операція доступу по key в Map значно швидша
    const postsArray: IPost[] = [];
    allPosts.forEach(value => postsArray.push(value));

    const postsElements = postsArray.map(post =>
        <Post key={post.id} post={post} withButton={true} />);

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