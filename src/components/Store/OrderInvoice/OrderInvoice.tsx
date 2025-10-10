import {OrderItem} from "@/types/interfaces/OrderItem";
import React from "react";


type Props = {
    item: OrderItem;
};

const OrderInvoice: React.FC<Props> = ({item}) => {
    return (
        <div className="flex flex-col gap-2 items-start md:flex-row md:items-center">
            <p className="px-2 py-0.5 border border-neutral-300 rounded-sm font-semibold">{item.status}</p>
            <div className="flex gap-2 items-center w-full md:w-auto">
                <div className="basis-3_ h-3_ bg-neutral-950 rounded-full"></div>
                <p className="text-sm">{item.code}</p>
                <div className="basis-3_ h-3_ bg-neutral-950 rounded-full"></div>
                <p className="text-sm truncate">{item.createdAt.toString()}</p>
            </div>
        </div>
    );
};

export default OrderInvoice;
