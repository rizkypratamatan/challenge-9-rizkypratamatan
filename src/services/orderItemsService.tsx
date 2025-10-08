import {apiClient} from "@/lib/api-client";
import {OrderItemsRequest} from "@/types/interfaces/OrderItemsRequest";
import {ProductsResponse} from "@/types/interfaces/ProductsResponse";


export const orderItemsService = async(params: OrderItemsRequest) => {
    let url: string = `page=${params.page}&limit=${params.limit}`;

    if(params.status) {
        url += `&status=${params.status}`;
    }

    const {data} = await apiClient.get<ProductsResponse>(`/seller/order-items?${url}`);
    console.log(data)

    return data;
};
