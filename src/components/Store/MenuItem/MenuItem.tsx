import Image from "next/image";
import Link from "next/link";
import React from "react";


type Props = {
    href: string;
    src: string;
    alt: string;
    text: string;
    active: boolean;
};

const MenuItem: React.FC<Props> = ({href, src, alt, text, active}) => {
    return (
        <Link className={`${active ? 'bg-neutral-100' : ''} flex gap-2 items-center h-12 px-4 py-2 rounded-md`} href={href}>
            <Image src={src} width={20} height={20} alt={alt}/>
            <p className={`${active ? 'font-bold' : ''} text-sm`}>{text}</p>
        </Link>
    );
};

export default MenuItem;
