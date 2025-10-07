import {MyOrderItem} from "@/types/interfaces/MyOrderItem";
import Image from "next/image";
import React from "react";


type Props = {
    item: MyOrderItem;
};

const OrderItem: React.FC<Props> = ({item}) => {
    return (
        <div className="flex gap-2.5">
            <Image className="aspect-square object-cover" src={item.product.images[0]} width={48} height={48} alt={'Product Thumbnail'}/>
            <div className="flex flex-col justify-center">
                <p className="leading-6.5 text-sm font-semibold">{item.product.title}</p>
                <p className="leading-6.5 text-sm">{item.qty} x Rp{item.priceSnapshot.toLocaleString('id-ID')}</p>
            </div>
        </div>
    );
};

export default OrderItem;
