import {BasePagination} from "@/types/interfaces/BasePagination";
import {BaseResponse} from "@/types/interfaces/BaseResponse";
import {MyOrder} from "@/types/interfaces/MyOrder";


interface MyOrdersResponseData {
    orders: MyOrder[];

    pagination: BasePagination;
}


export interface MyOrdersResponse extends BaseResponse {
    data: MyOrdersResponseData;
}
