import {apiClient} from "@/lib/api-client";
import {CheckoutRequest} from "@/types/interfaces/CheckoutRequest";
import {CheckoutResponse} from "@/types/interfaces/CheckoutResponse";


export const checkoutService = async(params: CheckoutRequest) => {
    const {data} = await apiClient.post<CheckoutResponse>('/orders/checkout', params);

    return data;
};
