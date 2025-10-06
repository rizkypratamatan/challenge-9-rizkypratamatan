import {CartItem} from "@/types/interfaces/CartItem";
import Image from "next/image";
import React from "react";


type Props = {
    item: CartItem;
};

const CheckoutItem: React.FC<Props> = ({item}) => {
    return (
        <div className="flex gap-4 items-center">
            <Image className="rounded-lg" src={item.product.images[0] ?? ''} width={80} height={80} alt={'Product Thumbnail'}/>
            <div className="grow flex flex-col justify-between gap-0 md:flex-row md:gap-4">
                <div className="flex flex-col justify-center">
                    <h4 className="leading-7 text-sm font-bold md:leading-8 md:text-lg">{item.product.title}</h4>
                    <p className="leading-7 text-sm text-neutral-600 md:leading-7.5 md:text-base">T-Shirt</p>
                </div>
                <p className="leading-7 text-sm font-bold md:text-lg">{item.qty} x
                    Rp{item.product.price.toLocaleString('id-ID')}</p>
            </div>
        </div>
    );
};

export default CheckoutItem;
