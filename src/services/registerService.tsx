import {apiClient} from "@/lib/api-client";
import {RegisterRequest} from "@/types/RegisterRequest";


export const registerService = async(params: RegisterRequest) => {
    const formData = new FormData();
    formData.append('name', params.name);
    formData.append('email', params.email);
    formData.append('password', params.password);

    const {data} = await apiClient.post('/auth/register', formData, {headers: {'Content-Type': 'multipart/form-data'}});

    return data;
};
