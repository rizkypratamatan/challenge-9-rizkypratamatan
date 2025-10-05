"use client";

import {Product} from "@/types/interfaces/Product";
import Image from "next/image";
import Link from "next/link";
import React from "react";


type Props = {
    product: Product;
};

const ProductCard: React.FC<Props> = ({product}) => {
    return (
        <Link className="flex flex-col bg-contrast-0 rounded-xl overflow-hidden" href={`/product/${product.id}/`}>
            <Image className="w-full h-auto aspect-square object-cover" src={product.images[0]} width={285} height={285} alt={'Product Thumbnail'}/>
            <div className="flex-flex-col gap-0.5 p-3">
                <h3 className="leading-7.5 text-sm truncate sm:text-base">{product.title}</h3>
                <p className="leading-7.5 text-sm font-bold sm:text-base">Rp{product.price.toLocaleString('id-ID')}</p>
                <div className="flex gap-1.5 items-center h-7.5">
                    <div className="flex gap-0.5 items-center">
                        <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                        <p className="text-sm sm:text-base">{product.rating}</p>
                    </div>
                    <div className="w-3_ h-3_ bg-neutral-950 rounded-full"></div>
                    <p className="text-sm truncate sm:text-base">{product.soldCount} Sold</p>
                </div>
                <div className="flex gap-0.5 items-center h-7.5">
                    <Image src={'/images/icon-verified.png'} width={24} height={24} alt={'Verified Icon'}/>
                    <p className="text-sm truncate sm:text-base">{product.shop.name}</p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
