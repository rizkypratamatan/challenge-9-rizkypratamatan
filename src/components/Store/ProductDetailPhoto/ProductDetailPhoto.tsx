import Image from "next/image";
import React from "react";


type Props = {
    index: number;
    files?: FileList;
    onClick?: () => void;
};

const ProductDetailPhoto: React.FC<Props> = ({index, files, onClick}) => {
    return (
        <div className="px-6 py-4 border border-dashed border-neutral-300 rounded-xl cursor-pointer" onClick={onClick}>
            <div className="flex flex-col gap-3">
                <Image src={files !== undefined && index in files ? URL.createObjectURL(files[index]) : '/images/icon-featured.png'} width={40} height={40} alt={'Featured Icon'}/>
                <p className="text-sm">Photo {index + 1}</p>
            </div>
        </div>
    );
};

export default ProductDetailPhoto;
