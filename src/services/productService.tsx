import {apiClient} from "@/lib/api-client";
import {ProductRequest} from "@/types/interfaces/ProductRequest";
import {ProductResponse} from "@/types/interfaces/ProductResponse";


export const productService = async(params: ProductRequest) => {
    const {data} = await apiClient.get<ProductResponse>(`/products/${params.id}`);

    return data;
};
