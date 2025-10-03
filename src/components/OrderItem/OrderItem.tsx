import Image from "next/image";
import React from "react";


const OrderItem: React.FC = () => {
    return (
        <div className="flex gap-2.5">
            <Image src={'/images/products/image-product.png'} width={48} height={48} alt={'Product Thumbnail'}/>
            <div className="flex flex-col justify-center">
                <p className="leading-6.5 text-sm font-semibold">Sneakers Court Minimalis</p>
                <p className="leading-6.5 text-sm">1 x Rp100.000</p>
            </div>
        </div>
    );
};

export default OrderItem;
