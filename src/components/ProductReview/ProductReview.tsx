import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Image from "next/image";
import React from "react";


const ProductReview: React.FC = () => {
    return (
        <div className="flex flex-col gap-4 py-9_">
            <div className="flex gap-3">
                <Avatar className="w-64_ h-64_">
                    <AvatarImage src={'/images/avatars/avatar-default.png'} width={64} height={64} alt={'Profile Picture'}/>
                    <AvatarFallback>John Doe</AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-center">
                    <p className="leading-30_ font-bold">John Doe</p>
                    <p className="leading-30_">25 August 2025, 13:38</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex gap-0.5">
                    <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                    <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                    <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                    <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                    <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur. Pulvinar porttitor aliquam viverra nunc sed facilisis. Integer
                tristique nullam morbi mauris ante.</p>
        </div>
    );
};

export default ProductReview;
