import {Product} from "@/types/interfaces/Product";


interface OrderItemBuyer {
    name: string;

    phone: string;
}


interface OrderItemShipping {
    method: string;

    address: string;

    city: string;

    postalCode: string;
}


export interface OrderItem {
    id: number;

    orderId: number;

    code: string;

    productId: number;

    qty: number;

    priceSnapshot: number;

    status: string;

    product: Product;

    createdAt: Date;

    buyer: OrderItemBuyer;

    shipping: OrderItemShipping;
}
