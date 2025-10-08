import {apiClient} from "@/lib/api-client";
import {AddProductRequest} from "@/types/interfaces/AddProductRequest";
import {AddProductResponse} from "@/types/interfaces/AddProductResponse";


export const addProductService = async(params: AddProductRequest) => {
    const formData: FormData = new FormData();
    formData.append('title', params.title);
    formData.append('description', params.description);
    formData.append('price', params.price);
    formData.append('stock', params.stock);
    formData.append('categoryId', params.categoryId);
    formData.append('isActive', String(params.isActive));

    Array.from(params.images).forEach(file => {
        formData.append('images', file);
    });

    const {data} = await apiClient.post<AddProductResponse>('/seller/products', formData, {headers: {'Content-Type': 'multipart/form-data'}});

    return data;
};
