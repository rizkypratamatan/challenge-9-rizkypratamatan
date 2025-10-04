import {Input} from "@/components/ui/input";
import Image from "next/image";
import React from "react";


const QuantityAdjust: React.FC = () => {
    return (
        <div className="flex gap-2 items-center px-3 py-2 border border-neutral-300 rounded-xl">
            <Image src={'/images/icon-minus.png'} width={24} height={24} alt={'Minus Icon'}/>
            <Input className="w-10 h-26_ p-0 border-none text-lg font-bold text-center shadow-none" type="text" value="1"/>
            <Image src={'/images/icon-plus.png'} width={24} height={24} alt={'Plus Icon'}/>
        </div>
    );
};

export default QuantityAdjust;
