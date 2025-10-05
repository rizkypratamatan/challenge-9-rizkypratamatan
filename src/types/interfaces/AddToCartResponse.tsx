import {BaseResponse} from "@/types/interfaces/BaseResponse";


interface AddToCartResponseData {
    id: number;

    cartId: number;

    productId: number;

    qty: number;

    priceSnapshot: number;
}


export interface AddToCartResponse extends BaseResponse {
    data: AddToCartResponseData;
}
