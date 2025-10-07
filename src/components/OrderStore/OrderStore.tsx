import {MyOrder} from "@/types/interfaces/MyOrder";
import Image from "next/image";
import React from "react";


type Props = {
    order: MyOrder;
};

const OrderStore: React.FC<Props> = ({order}) => {
    return (
        <div className="flex flex-col-reverse gap-1.5 md:flex-row">
            <div className="grow flex flex-wrap gap-2 items-center">
                <div className="flex gap-1 items-center">
                    <Image src={'/images/icon-store.png'} width={16} height={16} alt={'Store Icon'}/>
                    <p className="text-sm">{order.items[0].shop.name}</p>
                </div>
                <div className="basis-3_ h-3_ bg-neutral-950 rounded-full"></div>
                <p className="text-sm">{order.code}</p>
                <div className="basis-3_ h-3_ bg-neutral-950 rounded-full"></div>
                <p className="text-sm">{new Date(order.createdAt).toISOString()}</p>
            </div>
            <p className="self-start h-8 px-2 py-0.5 border border-neutral-300 rounded-sm leading-6.5 text-sm font-semibold">{order.paymentStatus}</p>
        </div>
    );
};

export default OrderStore;
