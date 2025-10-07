import {apiClient} from "@/lib/api-client";
import {MyOrdersRequest} from "@/types/interfaces/MyOrdersRequest";
import {MyOrdersResponse} from "@/types/interfaces/MyOrdersResponse";


export const myOrdersService = async(params: MyOrdersRequest) => {
    let url: string = `page=${params.page}&limit=${params.limit}`;

    if(params.paymentStatus) {
        url += `&paymentStatus=${params.paymentStatus}`;
    }

    const {data} = await apiClient.get<MyOrdersResponse>(`/orders/my?${url}`);

    return data;
};
