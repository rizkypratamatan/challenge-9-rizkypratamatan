import Image from "next/image";
import React from "react";


type Props = {
    index: number;
};

const ProductItem: React.FC<Props> = ({index}) => {
    return (
        <tr>
            <td>{index}</td>
            <td>
                <div className="flex gap-2.5 items-center">
                    <Image className="rounded" src={'/images/products/image-product.png'} width={48} height={48} alt={'Product Thumbnail'}/>
                    <div className="flex flex-col justify-center">
                        <p className="font-semibold">Sneakers Court Minimalis</p>
                        <p>Shoes</p>
                    </div>
                </div>
            </td>
            <td>Rp275.000</td>
            <td>40</td>
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
