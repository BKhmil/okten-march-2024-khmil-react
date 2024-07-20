import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/main/MainLayout";
import HomePage from "../pages/home/HomePage";
import ErrorLayout from "../layouts/error/ErrorLayout";
import UsersPage from "../pages/users/UsersPage";
import PostsPage from "../pages/posts/PostsPage";
import CommentsPage from "../pages/comments/CommentsPage";
import UsersList from "../components/users-list/UsersList";
import UserFullInfo from "../components/user-full-info/UserFullInfo";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'users',
                element: <UsersPage />,
                children: [
                    {
                        index: true,
                        element: <UsersList />
                    },
                    {
                        path: ':userId',
                        element: <UserFullInfo />
                    }
                ]
            },
            {
                path: 'posts',
                element: <PostsPage />
            },
            {
                path: 'comments',
                element: <CommentsPage />
            }
        ]
    }
]);