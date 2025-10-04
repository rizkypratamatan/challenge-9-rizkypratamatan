import Image from "next/image";
import React from "react";


const OrderItem: React.FC = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-2.5">
                <Image src={'/images/products/image-product.png'} width={48} height={48} alt={'Product Thumbnail'}/>
                <div className="flex flex-col justify-center">
                    <p className="leading-6.5 text-sm font-semibold">Sneakers Court Minimalis</p>
                    <p className="leading-6.5 text-sm">1 x Rp100.000</p>
                </div>
            </div>
            <div className="line-vertical"></div>
            <div className="basis-262_ flex flex-col">
                <p className="leading-7 text-sm font-semibold">Address</p>
                <p className="leading-7 text-sm">Johndoe (081234567890)<br/>Kebon Jeruk, Jakarta Barat</p>
            </div>
            <div className="line-vertical"></div>
            <div className="basis-262_ flex flex-col">
                <p className="leading-7 text-sm font-semibold">Shipping</p>
                <p className="leading-7 text-sm">JNE</p>
            </div>
        </div>
    );
};

export default OrderItem;
