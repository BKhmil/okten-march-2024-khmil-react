const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

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
    urls
}