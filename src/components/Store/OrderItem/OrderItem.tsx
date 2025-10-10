import {OrderItem as OrderItemData} from "@/types/interfaces/OrderItem";
import Image from "next/image";
import React from "react";


type Props = {
    item: OrderItemData;
};

const OrderItem: React.FC<Props> = ({item}) => {
    return (
        <div className="flex flex-col gap-3 justify-between items-center md:flex-row">
            <div className="flex gap-2.5 w-full md:w-auto">
                <Image src={item.product.images[0]} width={48} height={48} alt={'Product Thumbnail'}/>
                <div className="flex flex-col justify-center">
                    <p className="leading-6.5 text-sm font-semibold">{item.product.title}</p>
                    <p className="leading-6.5 text-sm">{item.qty} x Rp{item.priceSnapshot.toLocaleString('id-ID')}</p>
                </div>
            </div>
            <div className="line-horizontal md:line-vertical"></div>
            <div className="flex flex-col w-full md:w-auto md:basis-262_">
                <p className="leading-7 text-sm font-semibold">Address</p>
                <p className="leading-7 text-sm">{item.buyer.name} ({item.buyer.phone})<br/>{item.shipping.address}, {item.shipping.city}
                </p>
            </div>
            <div className="line-horizontal md:line-vertical"></div>
            <div className="flex flex-col w-full md:w-auto md:basis-262_">
                <p className="leading-7 text-sm font-semibold">Shipping</p>
                <p className="leading-7 text-sm">{item.shipping.method}</p>
            </div>
        </div>
    );
};

export default OrderItem;
