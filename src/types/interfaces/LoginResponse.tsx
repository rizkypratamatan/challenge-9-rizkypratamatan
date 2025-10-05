import {BaseResponse} from "@/types/interfaces/BaseResponse";


interface LoginResponseUser {
    id: string;

    name: string;

    email: string;
}


interface LoginResponseData {
    token: string;

    user: LoginResponseUser;
}


export interface LoginResponse extends BaseResponse {
    data: LoginResponseData;
}
