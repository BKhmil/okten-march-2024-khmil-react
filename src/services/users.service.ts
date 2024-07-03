import {IUsersResponse} from "../models/users-block/users-response.interface";
import {apiService} from "./api.service";

const usersService = {
    getAllUsers: (): Promise<IUsersResponse> => apiService.get('/users?limit=10')
        .then(res => res.data)
};

export {usersService};