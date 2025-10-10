import {BasePagination} from "@/types/interfaces/BasePagination";
import {BaseResponse} from "@/types/interfaces/BaseResponse";
import {OrderItem} from "@/types/interfaces/OrderItem";


interface OrderItemsResponseData {
    items: OrderItem[];

    pagination: BasePagination;
}


export interface OrderItemsResponse extends BaseResponse {
    data: OrderItemsResponseData;
}
