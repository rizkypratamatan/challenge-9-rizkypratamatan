import {BaseResponse} from "@/types/interfaces/BaseResponse";


interface RegisterResponseData {
    id: number;

    name: string;

    email: string;

    avatarUrl: string;
}


export interface RegisterResponse extends BaseResponse {
    data: RegisterResponseData;
}
