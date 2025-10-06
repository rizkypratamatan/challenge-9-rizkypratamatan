import {Input} from "@/components/ui/input";
import {useUpdateCart} from "@/hooks/useUpdateCart";
import {CartItem} from "@/types/interfaces/CartItem";
import Image from "next/image";
import React, {Dispatch, SetStateAction} from "react";


type Props = {
    index: number;
    items: CartItem[];
    setItems: Dispatch<SetStateAction<CartItem[]>>;
    updateCart: boolean;
};

const QuantityAdjust: React.FC<Props> = ({index, items, setItems, updateCart}) => {
    const {onClick} = useUpdateCart();

    const updateData = (itemId: number, qty: number) => {
        onClick({
            itemId: itemId,
            qty: qty
        });
    };

    const minus = () => {
        const currentItems: CartItem[] = [...items];

        if(currentItems[index].qty > 1) {
            currentItems[index].qty -= 1
            setItems(currentItems);

            if(updateCart) {
                updateData(currentItems[index].id, currentItems[index].qty);
            }
        }
    };

    const plus = () => {
        const currentItems: CartItem[] = [...items];

        if(currentItems[index].qty < 100) {
            currentItems[index].qty += 1
            setItems(currentItems);

            if(updateCart) {
                updateData(currentItems[index].id, currentItems[index].qty);
            }
        }
    };

    return (
        <div className="flex gap-2 items-center px-3 py-2 border border-neutral-300 rounded-xl">
            <Image className="cursor-pointer" src={'/images/icon-minus.png'} width={24} height={24} alt={'Minus Icon'} onClick={minus}/>
            <Input className="w-10 h-26_ p-0 border-none text-lg font-bold text-center shadow-none" type="text" value={items[index].qty} onChange={() => {
            }}/>
            <Image className="cursor-pointer" src={'/images/icon-plus.png'} width={24} height={24} alt={'Plus Icon'} onClick={plus}/>
        </div>
    );
};

export default QuantityAdjust;
