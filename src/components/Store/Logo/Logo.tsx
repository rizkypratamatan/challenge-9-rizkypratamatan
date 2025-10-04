import Image from "next/image";
import React from "react";


const Logo: React.FC = () => {
    return (
        <div className="flex gap-2 items-center">
            <Image src={'/images/logo.png'} width={28} height={28} alt={'Logo'}/>
            <h1 className="leading-6 font-bold">Shirt<br/>Seller</h1>
        </div>
    );
};

export default Logo;
