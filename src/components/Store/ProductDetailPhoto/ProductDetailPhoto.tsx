import Image from "next/image";
import React from "react";


type Props = {
    text: string;
};

const ProductDetailPhoto: React.FC<Props> = ({text}) => {
    return (
        <div className="px-6 py-4 border border-dashed border-neutral-300 rounded-xl">
            <div className="flex flex-col gap-3">
                <Image src={'/images/icon-featured.png'} width={40} height={40} alt={'Featured Icon'}/>
                <p className="text-sm">{text}</p>
            </div>
        </div>
    );
};

export default ProductDetailPhoto;
