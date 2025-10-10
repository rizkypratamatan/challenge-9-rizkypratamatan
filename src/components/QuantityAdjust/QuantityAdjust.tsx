import {Input} from "@/components/ui/input";
import {useUpdateCart} from "@/hooks/useUpdateCart";
import {CartItemChecked} from "@/types/interfaces/CartItemChecked";
import Image from "next/image";
import React, {Dispatch, SetStateAction} from "react";


type Props = {
    groupIndex: number;
    itemIndex: number;
    items: CartItemChecked[];
    setItems?: Dispatch<SetStateAction<CartItemChecked[]>>;
    updateCart: boolean;
};

const QuantityAdjust: React.FC<Props> = ({groupIndex, itemIndex, items, setItems, updateCart}) => {
    const {onClick} = useUpdateCart();

    const updateData = (itemId: number, qty: number) => {
        onClick({
            itemId: itemId,
            qty: qty
        });
    };

    const minus = () => {
        const currentItems: CartItemChecked[] = [...items];

        if(currentItems[groupIndex].items[itemIndex].qty > 1) {
            currentItems[groupIndex].items[itemIndex].qty -= 1
            setItems!(currentItems);

            if(updateCart) {
                updateData(currentItems[groupIndex].items[itemIndex].id, currentItems[groupIndex].items[itemIndex].qty);
            }
        }
    };

    const plus = () => {
        const currentItems: CartItemChecked[] = [...items];

        if(currentItems[groupIndex].items[itemIndex].qty < 100) {
            currentItems[groupIndex].items[itemIndex].qty += 1
            setItems!(currentItems);

            if(updateCart) {
                updateData(currentItems[groupIndex].items[itemIndex].id, currentItems[groupIndex].items[itemIndex].qty);
            }
        }
    };

    return (
        <div className="flex gap-2 items-center px-3 py-2 border border-neutral-300 rounded-xl">
            <Image className="cursor-pointer" src={'/images/icon-minus.png'} width={24} height={24} alt={'Minus Icon'} onClick={minus}/>
            <Input className="w-10 h-26_ p-0 border-none text-lg font-bold text-center shadow-none" type="text" value={items[groupIndex].items[itemIndex].qty} onChange={() => {
            }}/>
            <Image className="cursor-pointer" src={'/images/icon-plus.png'} width={24} height={24} alt={'Plus Icon'} onClick={plus}/>
        </div>
    );
};

export default QuantityAdjust;
