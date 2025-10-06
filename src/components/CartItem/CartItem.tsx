import QuantityAdjust from "@/components/QuantityAdjust";
import {Checkbox} from "@/components/ui/checkbox";
import {useDeleteCart} from "@/hooks/useDeleteCart";
import {useApp} from "@/providers/ContextProvider";
import {ContextData} from "@/types/interfaces/ContextData";
import Image from "next/image";
import React from "react";


type Props = {
    index: number;
};

const CartItem: React.FC<Props> = ({index}) => {
    const context: ContextData | undefined = useApp();

    const {onClick} = useDeleteCart();

    const check = () => {
        const checked: boolean[] = [...context?.cartItemsChecked ?? []];
        checked[index] = !checked[index];
        context?.setCartItemsChecked(checked);
    }

    return (
        <div className="flex flex-col gap-6 justify-between items-center md:flex-row">
            <div className="grow flex gap-3 w-full md:w-auto">
                <Checkbox checked={context?.cartItemsChecked[index]} onCheckedChange={check}/>
                <div className="grow flex gap-4 items-center overflow-hidden">
                    <Image className="rounded-md" src={context?.cartItems[index].product.images[0] ?? ''} width={80} height={80} alt={'Product Thumbnail'}/>
                    <div className="grow flex flex-col justify-center">
                        <h3 className="leading-8 text-sm font-bold md:text-lg">{context?.cartItems[index].product.title}</h3>
                        <p className="leading-7.5 text-xs text-neutral-600 md:text-base">Shoes</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 justify-between items-center w-full md:basis-168_ md:flex-col md:items-end md:w-auto">
                <h4 className="pl-7 text-sm font-bold text-right md:pl-0 md:text-xl">Rp{context?.cartItems[index].product.price.toLocaleString('id-ID')}</h4>
                <div className="flex gap-4 items-center">
                    <Image src={'/images/icon-trash.png'} width={24} height={24} alt={'Trash Icon'} onClick={() => onClick({itemId: context?.cartItems[index].id ?? 0})}/>
                    <QuantityAdjust index={index} items={context?.cartItems!} setItems={context?.setCartItems!} updateCart={true}/>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
