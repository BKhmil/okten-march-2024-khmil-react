const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const urls = {
    users: {
        // я тут подумав навіщо я називав в подібних ситуаціях getAll, якщо це не метод
        // методи гетами треба називати
        all: '/users',
        getUserById: (id: number) => urls.users.all + '/' + id
    },
    posts: {
        all: '/posts'
    }
}

export {
    API_BASE_URL,
    urls
}