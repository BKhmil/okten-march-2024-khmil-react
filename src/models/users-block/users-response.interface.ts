import {IUser} from "./user.interface";

export interface IUsersResponse  {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}