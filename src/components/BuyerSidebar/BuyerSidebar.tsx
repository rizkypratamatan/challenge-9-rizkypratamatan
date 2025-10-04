import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Image from "next/image";
import React from "react";


const BuyerSidebar: React.FC = () => {
    return (
        <section className="basis-227_ flex flex-col gap-4 p-4 bg-contrast-0 border border-neutral-200 rounded-2xl">
            <div className="flex gap-2 items-center">
                <Avatar>
                    <AvatarImage src={'/images/avatars/avatar-default.png'} width={40} height={40} alt={'Profile Picture'}/>
                    <AvatarFallback>John Doe</AvatarFallback>
                </Avatar>
                <p className="text-sm font-bold">John Doe</p>
            </div>
            <nav className="flex flex-col">
                <div className="flex gap-2 items-center h-12 px-4 py-2 bg-neutral-100 rounded-lg">
                    <Image src={'/images/icon-file.png'} width={20} height={20} alt={'File Icon'}/>
                    <p className="text-sm font-bold">Order List</p>
                </div>
                <div className="flex gap-2 items-center h-12 px-4 py-2 rounded-lg">
                    <Image src={'/images/icon-star-outline.png'} width={20} height={20} alt={'Star Icon'}/>
                    <p className="text-sm">Review</p>
                </div>
                <div className="flex gap-2 items-center h-12 px-4 py-2 rounded-lg">
                    <Image src={'/images/icon-logout.png'} width={20} height={20} alt={'Logout Icon'}/>
                    <p className="text-sm text-red">Logout</p>
                </div>
            </nav>
        </section>
    );
};

export default BuyerSidebar;
