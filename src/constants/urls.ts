const API_BASE_URL = 'https://dummyjson.com';

const USERS_LIMIT = 10;
const POSTS_LIMIT = 10;
const COMMENTS_LIMIT = 10;

const urls = {
    users: {
        getAll: '/users',
        getUserById: (id: string) => urls.users.getAll + '/' + id
    },
    posts: {
        getAll: '/posts'
    },
    comments: {
        getAll: '/comments'
    }
};

export {
    API_BASE_URL,
    USERS_LIMIT,
    POSTS_LIMIT,
    COMMENTS_LIMIT,
    urls
}