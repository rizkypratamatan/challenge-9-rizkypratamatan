import {apiClient} from "@/lib/api-client";
import {StoreOpenRequest} from "@/types/StoreOpenRequest";


export const storeOpenService = async(params: StoreOpenRequest) => {
    const formData = new FormData();
    formData.append('name', params.name);
    formData.append('address', params.address);

    const {data} = await apiClient.post('/seller/activate', formData, {headers: {'Content-Type': 'multipart/form-data'}});

    return data;
};
