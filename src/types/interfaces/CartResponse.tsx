import {BaseResponse} from "@/types/interfaces/BaseResponse";
import {CartItem} from "@/types/interfaces/CartItem";


interface CartResponseData {
    cartId: number;

    items: CartItem[];

    grandTotal: number;
}


export interface CartResponse extends BaseResponse {
    data: CartResponseData;
}
