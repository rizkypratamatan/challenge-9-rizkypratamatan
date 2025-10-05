import {Input} from "@/components/ui/input";
import Image from "next/image";
import React, {Dispatch, SetStateAction} from "react";


type Props = {
    index: number;
    quantities: number[];
    setQuantities: Dispatch<SetStateAction<number[]>>;
};

const QuantityAdjust: React.FC<Props> = ({index, quantities, setQuantities}) => {
    const minus = () => {
        const currentQuantities = [...quantities];

        if(currentQuantities[index] > 1) {
            currentQuantities[index] -= 1
            setQuantities(currentQuantities);
        }
    };

    const plus = () => {
        const currentQuantities = [...quantities];

        if(currentQuantities[index] < 100) {
            currentQuantities[index] += 1
            setQuantities(currentQuantities);
        }
    };

    return (
        <div className="flex gap-2 items-center px-3 py-2 border border-neutral-300 rounded-xl">
            <Image className="cursor-pointer" src={'/images/icon-minus.png'} width={24} height={24} alt={'Minus Icon'} onClick={minus}/>
            <Input className="w-10 h-26_ p-0 border-none text-lg font-bold text-center shadow-none" type="text" value={quantities[index]} onChange={() => {
            }}/>
            <Image className="cursor-pointer" src={'/images/icon-plus.png'} width={24} height={24} alt={'Plus Icon'} onClick={plus}/>
        </div>
    );
};

export default QuantityAdjust;
