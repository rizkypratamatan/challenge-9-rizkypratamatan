import {apiClient} from "@/lib/api-client";
import {LoginRequest} from "@/types/LoginRequest";
import {LoginResponse} from "@/types/LoginResponse";


export const loginService = async(params: LoginRequest) => {
    const {data} = await apiClient.post<LoginResponse>('/auth/login', params);

    return data;
};
