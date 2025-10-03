import Image from "next/image";
import React from "react";


const CheckoutItem: React.FC = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-4">
                <Image className="rounded-lg" src={'/images/products/image-product.png'} width={80} height={80} alt={'Product Thumbnail'}/>
                <div className="flex flex-col justify-center">
                    <h4 className="leading-8 text-lg font-bold">Kaos Katun Premium</h4>
                    <p className="leading-30_ text-neutral-600">T-Shirt</p>
                </div>
            </div>
            <p className="text-lg font-bold">1 x Rp1.100.000</p>
        </div>
    );
};

export default CheckoutItem;
