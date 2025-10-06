import {CartItem} from "@/types/interfaces/CartItem";
import {ProductShop} from "@/types/interfaces/ProductShop";


export interface CartGroup {
    shop: ProductShop;

    items: CartItem[];

    subtotal: number;
}
