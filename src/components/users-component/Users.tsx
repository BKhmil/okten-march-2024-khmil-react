import React, {Component} from 'react';
import {IUser} from "../../models/users-block/user.interface";
import {usersService} from "../../services/users.service";
import User from "../user-component/User";

import css from './Users.module.css';
import {IPost} from "../../models/posts-block/post.interface";
import {postsService} from "../../services/posts.service";
import Posts from "../posts-component/Posts";

interface IState {
    users: IUser[];
    posts: IPost[];
    isFetchBefore: boolean;
}

class Users extends Component {
    state: IState = {
        users: [],
        posts: [],
        isFetchBefore: false
    }

    componentDidMount() {
        usersService.getAllUsers().then(data => this.setState({users: data.users}));
    }

    showPosts = (userId: number) => {
        postsService.getPostsOfUserById(userId).then(data =>
            this.setState(prevState => ({
                ...prevState,
                posts: data.posts,
                isFetchBefore: true
            }))
        );
    }

    render() {
        const {isFetchBefore, users, posts} = this.state;

        const userElements = users.map(user => <User
            key={user.id}
            user={user}
            handleClick={this.showPosts}
        />);

        return (
            <div>
                <hr/>
                <h1 style={{textAlign: 'center'}}>Users</h1>
                <div className={css.usersWrapper}>{userElements}</div>
                <hr/>
                {
                    isFetchBefore ?
                        <Posts posts={posts} />
                        :
                        <div style={{fontSize: '30px'}}>press "show user's posts" button</div>
                }
            </div>
        );
    }
}

export default Users;