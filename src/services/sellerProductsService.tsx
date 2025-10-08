import {apiClient} from "@/lib/api-client";
import {ProductsResponse} from "@/types/interfaces/ProductsResponse";
import {SellerProductsRequest} from "@/types/interfaces/SellerProductsRequest";


export const sellerProductsService = async(params: SellerProductsRequest) => {
    let url: string = `page=${params.page}&limit=${params.limit}`;

    if(params.q) {
        url += `&q=${params.q}`;
    }

    if(params.isActive) {
        url += `&isActive=${params.isActive}`;
    }

    const {data} = await apiClient.get<ProductsResponse>(`/seller/products?${url}`);

    return data;
};
