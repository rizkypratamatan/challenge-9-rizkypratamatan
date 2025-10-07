import {CheckoutPaymentStatus} from "@/types/enums/CheckoutPaymentStatus";


export interface MyOrdersRequest {
    page: number;

    limit: number;

    paymentStatus?: CheckoutPaymentStatus;
}
