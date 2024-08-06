import {useAppSelector} from "../../hooks/rtk";
import User from "../user/User";
import css from './Favourites.module.css';
import ErrorBox from "../error-box/ErrorBox";
import Spinner from "../spinner/Spinner";
import Post from "../post/Post";

const Favourites = () => {
    const {singleUser, isLoaded, error, allUsers} =
        useAppSelector(state => state.usersSlice);
    const {favouritePost} = useAppSelector(state => state.postsSlice);

    return (
        <div className={css.container}>
            <div>
                Favourite user:
                <br/>
                {allUsers.length !== 0 && Object.keys(error).length !== 0 && <ErrorBox error={error} />}
                {allUsers.length !== 0 && !isLoaded && <Spinner />}
                {allUsers.length !== 0 && singleUser ?
                    <User user={singleUser} withButton={false} /> : <div>No favourite users yet</div>}
            </div>
            <div>
                Favourite post:
                <br/>
                {favouritePost ? <Post post={favouritePost} withButton={false} /> : <div>No favourite posts yet</div>}
            </div>
        </div>
    );
}

export default Favourites;