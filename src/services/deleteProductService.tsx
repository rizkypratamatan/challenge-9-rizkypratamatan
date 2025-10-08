import {apiClient} from "@/lib/api-client";
import {DeleteProductRequest} from "@/types/interfaces/DeleteProductRequest";
import {DeleteProductResponse} from "@/types/interfaces/DeleteProductResponse";


export const deleteProductService = async(params: DeleteProductRequest) => {
    const {data} = await apiClient.delete<DeleteProductResponse>(`/seller/products/${params.id}`);

    return data;
};
