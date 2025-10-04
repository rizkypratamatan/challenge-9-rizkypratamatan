import {Button} from "@/components/ui/button";
import Image from "next/image";
import React from "react";


type Props = {
    index: number;
};

const ReviewItem: React.FC<Props> = ({index}) => {
    return (
        <tr>
            <td>{index}</td>
            <td>
                <div className="flex gap-2.5 items-center">
                    <Image className="rounded" src={'/images/products/image-product.png'} width={48} height={48} alt={'Product Thumbnail'}/>
                    <p className="font-semibold">Basketball Shoes Dunk Master</p>
                </div>
            </td>
            <td>
                <div className="flex gap-0.5">
                    <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                    <p className="font-semibold">4.9</p>
                </div>
            </td>
            <td>100</td>
            <td>
                <Button className="h-8 px-2 py-0.5 bg-contrast-0 border border-neutral-300 rounded-sm text-neutral-950">See
                    All Review</Button>
            </td>
        </tr>
    );
};

export default ReviewItem;
