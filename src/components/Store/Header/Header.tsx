"use client";

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {toggleSellerSidebar} from "@/hooks/useToggle";
import Image from "next/image";
import React from "react";


const Header: React.FC = () => {
    return (
        <header className="fixed flex items-center h-64_ px-6 bg-contrast-0 border-b border-neutral-200 duration-500 store-header">
            <div className="grow">
                <Image className="cursor-pointer" src={'/images/icon-hamburger.png'} width={24} height={24} alt={'Hamburger Icon'} onClick={toggleSellerSidebar}/>
            </div>
            <div className="relative flex gap-4 items-center">
                <div className="flex gap-2 items-center">
                    <Avatar className="w-10 h-10">
                        <AvatarImage src={'/images/avatars/avatar-default.png'} width={40} height={40} alt={'Profile Picture'}/>
                        <AvatarFallback>John Doe</AvatarFallback>
                    </Avatar>
                    <p className="text-sm font-bold">John Doe</p>
                </div>
                <Image src={'/images/icon-chevron-down.png'} width={16} height={16} alt={'Chevron Down Icon'}/>
                <div className="invisible absolute top-[120%] right-0 flex flex-col gap-4 w-261_ p-4 bg-contrast-0 border border-neutral-300 rounded-sm">
                    <div className="flex gap-3 items-center">
                        <Avatar className="w-10 h-10">
                            <AvatarImage src={'/images/avatars/avatar-default.png'} width={48} height={48} alt={'Profile Picture'}/>
                            <AvatarFallback>John Doe</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <p className="leading-7 text-sm font-bold">John Doe</p>
                            <div className="flex gap-1 items-center">
                                <Image src={'/images/icon-store.png'} width={16} height={16} alt={'Store Icon'}/>
                                <p className="text-sm">Toko Barokah Jaya</p>
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <Button className="h-11 p-2 bg-contrast-0 border border-neutral-300 rounded-lg text-sm font-semibold text-neutral-950">Back
                        to Buyer Account</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
