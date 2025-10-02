import {Checkbox} from "@/components/ui/checkbox";
import Image from "next/image";
import React from "react";


const CartSeller: React.FC = () => {
    return (
        <div className="flex gap-3 items-center">
            <Checkbox/>
            <div className="flex gap-1.5 items-center">
                <Image src={'/images/icon-store.png'} width={20} height={20} alt={'Store Icon'}/>
                <p className="leading-30_ font-semibold">Toko Barokah Jaya</p>
            </div>
        </div>
    );
};

export default CartSeller;
