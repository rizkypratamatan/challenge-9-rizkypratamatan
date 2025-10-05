import {apiClient} from "@/lib/api-client";
import {CartResponse} from "@/types/interfaces/CartResponse";


export const cartService = async() => {
    const {data} = await apiClient.get<CartResponse>('/cart');

    return data;
};
