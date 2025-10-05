import {apiClient} from "@/lib/api-client";
import {AddToCartRequest} from "@/types/interfaces/AddToCartRequest";
import {AddToCartResponse} from "@/types/interfaces/AddToCartResponse";


export const addToCartService = async(params: AddToCartRequest) => {
    const {data} = await apiClient.post<AddToCartResponse>('/cart/items', params);

    return data;
};
