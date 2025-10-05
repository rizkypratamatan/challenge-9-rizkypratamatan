import {apiClient} from "@/lib/api-client";
import {ProductsRequest} from "@/types/interfaces/ProductsRequest";
import {ProductsResponse} from "@/types/interfaces/ProductsResponse";


export const productsService = async(params: ProductsRequest) => {
    let url: string = `sort=${params.sort}&order=${params.order}&page=${params.page}&limit=${params.limit}`;

    if(params.categoryId && params.categoryId !== 0) {
        url += `&categoryId=${params.categoryId}`;
    }

    if(params.minPrice) {
        url += `&minPrice=${params.minPrice}`;
    }

    if(params.maxPrice) {
        url += `&maxPrice=${params.maxPrice}`;
    }

    if(params.rating) {
        url += `&rating=${params.rating}`;
    }

    const {data} = await apiClient.get<ProductsResponse>(`/products?${url}`);

    return data;
};
