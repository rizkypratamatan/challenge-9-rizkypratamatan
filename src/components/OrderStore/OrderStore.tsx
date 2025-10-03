import Image from "next/image";
import React from "react";


const OrderStore: React.FC = () => {
    return (
        <div className="flex gap-1.5">
            <div className="grow flex gap-2 items-center">
                <div className="flex gap-1 items-center">
                    <Image src={'/images/icon-store.png'} width={16} height={16} alt={'Store Icon'}/>
                    <p className="text-sm">Toko Barokah Jaya</p>
                </div>
                <div className="basis-3_ h-3_ bg-neutral-950 rounded-full"></div>
                <p className="text-sm">INV12345567890</p>
                <div className="basis-3_ h-3_ bg-neutral-950 rounded-full"></div>
                <p className="text-sm">22 sept 2025, 17:22</p>
            </div>
            <p className="h-8 px-2 py-0.5 border border-neutral-300 rounded-sm leading-6.5 text-sm font-semibold">Processing</p>
        </div>
    );
};

export default OrderStore;
