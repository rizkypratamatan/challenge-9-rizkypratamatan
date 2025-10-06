import {CartItemChecked} from "@/types/interfaces/CartItemChecked";
import {Dispatch, SetStateAction} from "react";


export interface ContextData {
    cartItems: CartItemChecked[];

    setCartItems: Dispatch<SetStateAction<CartItemChecked[]>>;

    cartCount: number;

    setCartCount: Dispatch<SetStateAction<number>>;

    cartTotal: number;

    setCartTotal: Dispatch<SetStateAction<number>>;
}
