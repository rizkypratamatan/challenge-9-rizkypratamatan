import {apiClient} from "@/lib/api-client";
import {OrderItemsRequest} from "@/types/interfaces/OrderItemsRequest";
import {OrderItemsResponse} from "@/types/interfaces/OrderItemsResponse";


export const orderItemsService = async(params: OrderItemsRequest) => {
    let url: string = `page=${params.page}&limit=${params.limit}`;

    if(params.status) {
        url += `&status=${params.status}`;
    }

    const {data} = await apiClient.get<OrderItemsResponse>(`/seller/order-items?${url}`);

    return data;
};
