import {apiClient} from "@/lib/api-client";
import {AddToCartResponse} from "@/types/interfaces/AddToCartResponse";
import {CancelOrderRequest} from "@/types/interfaces/CancelOrderRequest";


export const cancelOrderService = async(params: CancelOrderRequest) => {
    const body = {
        reason: params.reason
    };
    const {data} = await apiClient.patch<AddToCartResponse>(`/orders/${params.id}/cancel`, body);

    return data;
};
