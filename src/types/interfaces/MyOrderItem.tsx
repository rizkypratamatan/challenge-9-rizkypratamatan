import {Product} from "@/types/interfaces/Product";
import {ProductShop} from "@/types/interfaces/ProductShop";


export interface MyOrderItem {
    id: number;

    productId: number;

    shopId: number;

    qty: number;

    priceSnapshot: number;

    status: string;

    product: Product;

    shop: ProductShop;
}

