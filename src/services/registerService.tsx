import {apiClient} from "@/lib/api-client";
import {RegisterRequest} from "@/types/interfaces/RegisterRequest";
import {RegisterResponse} from "@/types/interfaces/RegisterResponse";


export const registerService = async(params: RegisterRequest) => {
    const formData: FormData = new FormData();
    formData.append('name', params.name);
    formData.append('email', params.email);
    formData.append('password', params.password);

    Array.from(params.avatar).forEach(file => {
        formData.append('avatar', file);
    });

    const {data} = await apiClient.post<RegisterResponse>('/auth/register', formData, {headers: {'Content-Type': 'multipart/form-data'}});

    return data;
};
