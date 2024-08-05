import {RouteObject} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/home-page/HomePage";
import UsersPage from "../pages/users-page/UsersPage";
import PostsPage from "../pages/posts-page/PostsPage";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'home',
                element: <HomePage />
            },
            {
                path: 'users',
                element: <UsersPage />
            },
            {
                path: 'posts',
                element: <PostsPage />
            }
        ]
    }
];