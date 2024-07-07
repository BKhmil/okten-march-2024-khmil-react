import {IUser} from "../models/user.interface";
import {apiService} from "./api.service";
import {urls} from "../constants/urls";

export const userService = {
    createUser: (user: IUser): Promise<IUser> => apiService.post(urls.user.post, user)
        .then(response => response.data)
};