import React from "react";


const OrderInvoice: React.FC = () => {
    return (
        <div className="flex gap-2 items-center">
            <p className="px-2 py-0.5 border border-neutral-300 rounded-sm font-semibold">New</p>
            <div className="basis-3_ h-3_ bg-neutral-950 rounded-full"></div>
            <p className="text-sm">INV12345567890</p>
            <div className="basis-3_ h-3_ bg-neutral-950 rounded-full"></div>
            <p className="text-sm">22 sept 2025, 17:22</p>
        </div>
    );
};

export default OrderInvoice;
