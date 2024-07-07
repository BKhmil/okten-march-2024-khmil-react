import {IUser} from "../models/user.interface";
import {apiService} from "./api.service";
import {urls} from "../constants/urls";
import {IUserForm} from "../models/user-form.interface";

export const userService = {
    createUser: (formData: IUserForm): Promise<IUser> => apiService.post(urls.user.post, formData)
        .then(response => response.data)
};