import {apiClient} from "@/lib/api-client";
import {StoreOpenRequest} from "@/types/interfaces/StoreOpenRequest";


export const storeOpenService = async(params: StoreOpenRequest) => {
    const formData: FormData = new FormData();
    formData.append('name', params.name);
    formData.append('slug', params.domain);
    formData.append('address', params.address);

    Array.from(params.logo).forEach(file => {
        formData.append('logo', file);
    });

    const {data} = await apiClient.post('/seller/activate', formData, {headers: {'Content-Type': 'multipart/form-data'}});

    return data;
};
