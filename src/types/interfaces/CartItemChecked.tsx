import {CartItem} from "@/types/interfaces/CartItem";
import {ProductShop} from "@/types/interfaces/ProductShop";


export interface CartItemCheckedItem extends CartItem {
    checked: boolean;
}


export interface CartItemChecked {
    shop: ProductShop;

    items: CartItemCheckedItem[];
}
