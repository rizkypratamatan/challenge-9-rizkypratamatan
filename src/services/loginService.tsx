import {apiClient} from "@/lib/api-client";
import {LoginRequest} from "@/types/interfaces/LoginRequest";
import {LoginResponse} from "@/types/interfaces/LoginResponse";


export const loginService = async(params: LoginRequest) => {
    const {data} = await apiClient.post<LoginResponse>('/auth/login', params);

    return data;
};
