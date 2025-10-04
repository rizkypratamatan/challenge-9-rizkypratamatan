import QuantityAdjust from "@/components/QuantityAdjust";
import {Checkbox} from "@/components/ui/checkbox";
import Image from "next/image";
import React from "react";


const CartItem: React.FC = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="grow flex gap-3">
                <Checkbox/>
                <div className="grow flex gap-4 items-center">
                    <Image src={'/images/products/image-product.png'} width={80} height={80} alt={'Product Thumbnail'}/>
                    <div className="grow flex flex-col justify-center">
                        <h3 className="leading-8 text-lg font-bold">Sneakers Court Minimalis</h3>
                        <p className="leading-7.5 text-neutral-600">Shoes</p>
                    </div>
                </div>
            </div>
            <div className="basis-168_ flex flex-col gap-4">
                <h4 className="text-xl font-bold text-right">Rp275.000</h4>
                <div className="flex gap-4 items-center">
                    <Image src={'/images/icon-trash.png'} width={24} height={24} alt={'Trash Icon'}/>
                    <QuantityAdjust/>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
