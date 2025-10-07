"use client";

import Image from "next/image";
import React from "react";


type Props = {
    src: string;
    width: number;
    height: number;
    alt: string;
}

const SocialMedia: React.FC<Props> = ({src, width, height, alt}) => {
    return (
        <div className="flex justify-center items-center w-10 h-10 border border-neutral-300 rounded-full">
            <Image src={src} width={width} height={height} alt={alt}/>
        </div>
    );
};

export default SocialMedia;
