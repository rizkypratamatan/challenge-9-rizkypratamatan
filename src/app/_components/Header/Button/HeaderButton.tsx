import Image from "next/image";
import React from "react";


type HeaderButtonProps = {
    src: string;
    width: number;
    height: number;
    alt: string;
    text: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const HeaderButton: React.FC<HeaderButtonProps> = ({src, width, height, alt, text, onClick}) => {
    return (
        <div className="flex gap-2 items-center px-3 py-2 border border-neutral-300 rounded-full cursor-pointer" onClick={onClick}>
            <Image src={src} width={width} height={height} alt={alt}/>
            <p className="text-sm font-bold">{text}</p>
        </div>
    );
};

export default HeaderButton;
