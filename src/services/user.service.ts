import {IUser} from "../models/users-block/user.interface";
import {apiService} from "./api.service";
import {urls} from "../constants/urls";
import {IUsersResponse} from "../models/users-block/users-response.interface";

export const userService = {
    getAll: (skip: number, limit: number): Promise<IUsersResponse> =>
        apiService.get(urls.users.getAll + '?skip=' + skip + '&limit=' + limit)
        .then(res => res.data),
    getById: (userId: string): Promise<IUser> => apiService.get<IUser>(urls.users.getUserById(userId))
        .then(res => res.data)
}