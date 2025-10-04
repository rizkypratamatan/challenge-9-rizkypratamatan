import Image from "next/image";
import Link from "next/link";
import React from "react";


const ProductCard: React.FC = () => {
    return (
        <Link className="flex flex-col bg-contrast-0 rounded-xl" href={'/product/1/'}>
            <Image className="w-full h-auto" src={'/images/products/image-product.png'} width={285} height={285} alt={'Product Thumbnail'}/>
            <div className="flex-flex-col gap-0.5 p-3">
                <h3 className="leading-7.5 text-sm truncate sm:text-base">Sneakers Court Minimalis</h3>
                <p className="leading-7.5 text-sm font-bold sm:text-base">Rp275.000</p>
                <div className="flex gap-1.5 items-center h-7.5">
                    <div className="flex gap-0.5 items-center">
                        <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                        <p className="text-sm sm:text-base">4.9</p>
                    </div>
                    <div className="w-3_ h-3_ bg-neutral-950 rounded-full"></div>
                    <p className="text-sm truncate sm:text-base">10 Sold</p>
                </div>
                <div className="flex gap-0.5 items-center h-7.5">
                    <Image src={'/images/icon-verified.png'} width={24} height={24} alt={'Verified Icon'}/>
                    <p className="text-sm truncate sm:text-base">Toko Barokah Jaya</p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
