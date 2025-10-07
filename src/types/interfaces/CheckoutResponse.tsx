import {CheckoutPaymentStatus} from "@/types/enums/CheckoutPaymentStatus";
import {BaseResponse} from "@/types/interfaces/BaseResponse";
import {Product} from "@/types/interfaces/Product";
import {ProductShop} from "@/types/interfaces/ProductShop";


interface CheckoutResponseOrderItem {
    id: number;

    productId: number;

    shopId: number;

    qty: number;

    priceSnapshot: number;

    status: string;

    product: Product;

    shop: ProductShop;
}


interface CheckoutResponseOrder {
    id: number;

    code: string;

    paymentStatus: CheckoutPaymentStatus;

    address: string;

    totalAmount: number;

    createdAt: Date;

    items: CheckoutResponseOrderItem[];
}


export interface CheckoutResponse extends BaseResponse {
    count: number;

    orders: CheckoutResponseOrder[];
}
