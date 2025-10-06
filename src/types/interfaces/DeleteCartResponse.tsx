import {BaseResponse} from "@/types/interfaces/BaseResponse";


export interface DeleteCartResponse extends BaseResponse {
    id: number;

    cartId: number;

    productId: number;

    qty: number;

    priceSnapshot: number;
}
