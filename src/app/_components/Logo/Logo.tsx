import Image from "next/image";
import React from "react";


const Logo: React.FC = () => {
    return (
        <div className="flex gap-9.19_ items-center">
            <Image src={'/images/logo.png'} width={42} height={42} alt={'Logo'}/>
            <h1 className="text-2xl font-bold">Shirt</h1>
        </div>
    );
};

export default Logo;
