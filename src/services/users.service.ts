import {IUser} from "../models/user.interface";
import {axiosInstance} from "./axiosInstance.service";
import {urls} from "../constants/urls";

export const usersService = {
    getAll: (): Promise<IUser[]> => axiosInstance.get<IUser[]>(urls.users.all)
        .then(res => res.data)
}