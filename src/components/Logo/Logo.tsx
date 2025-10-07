"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";


type Props = {
    dynamic: boolean;
};

const Logo: React.FC<Props> = ({dynamic}) => {
    return (
        <Link className="flex gap-9.19_ items-center" href={'/'}>
            <Image src={'/images/logo.png'} width={42} height={42} alt={'Logo'}/>
            <h1 className={`${dynamic ? 'hidden md:block' : ''} text-2xl font-bold`}>Shirt</h1>
        </Link>
    );
};

export default Logo;
