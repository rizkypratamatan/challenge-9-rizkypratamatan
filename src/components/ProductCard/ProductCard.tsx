import Image from "next/image";
import React from "react";


const ProductCard: React.FC = () => {
    return (
        <div className="flex flex-col bg-contrast-0 rounded-xl">
            <Image className="w-full h-auto" src={'/images/products/image-product.png'} width={285} height={285} alt={'Product Thumbnail'}/>
            <div className="flex-flex-col gap-0.5 p-3">
                <h3 className="leading-30_">Sneakers Court Minimalis</h3>
                <p className="leading-30_ font-bold">Rp275.000</p>
                <div className="flex gap-1.5 items-center h-30_">
                    <div className="flex gap-0.5">
                        <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                        <p>4.9</p>
                    </div>
                    <div className="w-3_ h-3_ bg-neutral-950 rounded-full"></div>
                    <p>10 Sold</p>
                </div>
                <div className="flex gap-0.5 items-center h-30_">
                    <Image src={'/images/icon-verified.png'} width={24} height={24} alt={'Verified Icon'}/>
                    <p>Toko Barokah Jaya</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
