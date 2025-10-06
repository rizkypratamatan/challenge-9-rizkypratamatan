import {Checkbox} from "@/components/ui/checkbox";
import {ProductShop} from "@/types/interfaces/ProductShop";
import Image from "next/image";
import React from "react";


type Props = {
    shop: ProductShop;
};

const CartSeller: React.FC<Props> = ({shop}) => {
    return (
        <div className="flex gap-3 items-center">
            <Checkbox/>
            <div className="flex gap-1.5 items-center">
                <Image src={shop.logo} width={20} height={20} alt={'Store Icon'}/>
                <p className="leading-7.5 font-semibold">{shop.name}</p>
            </div>
        </div>
    );
};

export default CartSeller;
