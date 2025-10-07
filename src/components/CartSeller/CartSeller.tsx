import {Checkbox} from "@/components/ui/checkbox";
import {setSelectedCart} from "@/hooks/useSelectedCart";
import {useApp} from "@/providers/ContextProvider";
import {CartItemChecked, CartItemCheckedItem} from "@/types/interfaces/CartItemChecked";
import {ContextData} from "@/types/interfaces/ContextData";
import {ProductShop} from "@/types/interfaces/ProductShop";
import Image from "next/image";
import React from "react";


type Props = {
    groupIndex: number;
    shop: ProductShop;
};

const CartSeller: React.FC<Props> = ({groupIndex, shop}) => {
    const context: ContextData | undefined = useApp();

    const selectAllChecked = () => {
        let checked: boolean = true;

        context?.cartItems[groupIndex].items.map((item: CartItemCheckedItem) => {
            if(!item.checked) {
                checked = false;
            }
        });

        return checked;
    };

    const checked = () => {
        const cartItems: CartItemChecked[] = [...context?.cartItems ?? []];
        const value: boolean = !selectAllChecked();

        cartItems[groupIndex].items.map((item: CartItemCheckedItem, index: number) => {
            cartItems[groupIndex].items[index].checked = value;
        });

        context?.setCartItems(cartItems);
        setSelectedCart(cartItems);
    }

    return (
        <div className="flex gap-3 items-center">
            <Checkbox checked={selectAllChecked()} onCheckedChange={checked}/>
            <div className="flex gap-1.5 items-center">
                {shop.logo && <Image src={shop.logo} width={20} height={20} alt={'Store Icon'}/>}
                <p className="leading-7.5 font-semibold">{shop.name}</p>
            </div>
        </div>
    );
};

export default CartSeller;
