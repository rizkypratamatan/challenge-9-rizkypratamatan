import {BaseResponse} from "@/types/interfaces/BaseResponse";
import {CartGroup} from "@/types/interfaces/CartGroup";
import {CartItem} from "@/types/interfaces/CartItem";


interface CartResponseData {
    cartId: number;

    items: CartItem[];

    groups: CartGroup[];

    grandTotal: number;
}


export interface CartResponse extends BaseResponse {
    data: CartResponseData;
}
