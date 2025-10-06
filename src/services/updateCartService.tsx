import {apiClient} from "@/lib/api-client";
import {UpdateCartRequest} from "@/types/interfaces/UpdateCartRequest";
import {UpdateCartResponse} from "@/types/interfaces/UpdateCartResponse";


export const updateCartService = async(params: UpdateCartRequest) => {
    const body: object = {
        qty: params.qty
    };
    const {data} = await apiClient.patch<UpdateCartResponse>(`/cart/items/${params.itemId}`, body);

    return data;
};
