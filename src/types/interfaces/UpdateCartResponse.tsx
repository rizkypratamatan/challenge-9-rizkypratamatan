import {BaseResponse} from "@/types/interfaces/BaseResponse";


interface UpdateCartResponseData {
    id: number;

    cartId: number;

    productId: number;

    qty: number;

    priceSnapshot: number;
}


export interface UpdateCartResponse extends BaseResponse {
    data: UpdateCartResponseData;
}
