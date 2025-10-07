import {apiClient} from "@/lib/api-client";
import {CompleteOrderRequest} from "@/types/interfaces/CompleteOrderRequest";


export const completeOrderService = async(params: CompleteOrderRequest) => {
    const {data} = await apiClient.patch(`/orders/items/${params.id}/complete`, params);
    console.log(data);
    return data;
};
