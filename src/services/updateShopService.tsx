import {apiClient} from "@/lib/api-client";
import {UpdateCartResponse} from "@/types/interfaces/UpdateCartResponse";
import {UpdateShopRequest} from "@/types/interfaces/UpdateShopRequest";


export const updateShopService = async(params: UpdateShopRequest) => {
    const formData: FormData = new FormData();
    formData.append('name', params.name);
    formData.append('address', params.address);
    formData.append('isActive', String(params.isActive));

    Array.from(params.logo).forEach(file => {
        formData.append('logo', file);
    });

    const {data} = await apiClient.patch<UpdateCartResponse>('/seller/shop', formData, {headers: {'Content-Type': 'multipart/form-data'}});

    return data;
};
