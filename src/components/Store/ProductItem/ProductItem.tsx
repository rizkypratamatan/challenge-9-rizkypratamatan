import {Product} from "@/types/interfaces/Product";
import Image from "next/image";
import React from "react";


type Props = {
    index: number;
    product: Product;
};

const ProductItem: React.FC<Props> = ({index, product}) => {
    return (
        <tr>
            <td>{index}</td>
            <td>
                <div className="flex gap-2.5 items-center">
                    <Image className="rounded" src={product.images[0]} width={48} height={48} alt={'Product Thumbnail'}/>
                    <div className="flex flex-col justify-center">
                        <p className="font-semibold">{product.title}</p>
                        <p>{product.category.name}</p>
                    </div>
                </div>
            </td>
            <td>Rp{product.price.toLocaleString('id-ID')}</td>
            <td>{product.stock.toLocaleString('id-ID')}</td>
            <td>
                <div className="flex gap-4">
                    <Image src={'/images/icon-eye.png'} width={20} height={20} alt={'Eye Icon'}/>
                    <Image src={'/images/icon-pencil.png'} width={20} height={20} alt={'Pencil Icon'}/>
                    <Image src={'/images/icon-trash-red.png'} width={20} height={20} alt={'Trash Icon'}/>
                </div>
            </td>
        </tr>
    );
};

export default ProductItem;
