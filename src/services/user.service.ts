import {IUser} from "../models/user.interface";
import {apiService} from "./api.service";
import {urls} from "../constants/urls";

export const userService = {
    getAll: (): Promise<IUser[]> => apiService.get<IUser[]>(urls.users.getAll)
        .then(res => res.data),
    getById: (userId: string): Promise<IUser> => apiService.get<IUser>(urls.users.getUserById(userId))
        .then(res => res.data)
}