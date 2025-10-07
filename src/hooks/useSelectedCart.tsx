import {CartItemChecked} from "@/types/interfaces/CartItemChecked";


export const getSelectedCart = (): CartItemChecked[] | null => {
    if(typeof window !== 'undefined') {
        const storage: string | null = localStorage.getItem('cart');

        if(storage) {
            return JSON.parse(storage) as CartItemChecked[];
        }
    }

    return null;
};


export const setSelectedCart = (cart: CartItemChecked[]) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};
