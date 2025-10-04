import Image from "next/image";
import React from "react";


type Props = {
    src: string;
    alt: string;
    text: string;
    active: boolean;
};

const MenuItem: React.FC<Props> = ({src, alt, text, active}) => {
    return (
        <div className={`${active ? 'bg-neutral-100' : ''} flex gap-2 items-center h-12 px-4 py-2 rounded-md`}>
            <Image src={src} width={20} height={20} alt={alt}/>
            <p className={`${active ? 'font-bold' : ''} text-sm`}>{text}</p>
        </div>
    );
};

export default MenuItem;
