import {CheckoutPaymentStatus} from "@/types/enums/CheckoutPaymentStatus";
import {MyOrderItem} from "@/types/interfaces/MyOrderItem";


export interface MyOrder {
    id: number;

    code: string;

    paymentStatus: CheckoutPaymentStatus;

    address: string;

    totalAmount: number;

    createdAt: Date;

    items: MyOrderItem[];
}
