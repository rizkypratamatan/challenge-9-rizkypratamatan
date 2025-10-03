import Logo from "@/components/Logo";
import Search from "@/components/Search";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Image from "next/image";
import React from "react";


const Header: React.FC = () => {
    return (
        <header className="fixed z-50 w-full bg-contrast-0">
            <div className="flex justify-between items-center h-84_ px-120_ shadow-25">
                <Logo/>
                <div className="grow flex gap-3 max-w-623_">
                    <div className="flex gap-1.5 items-center h-44_ px-4 border border-neutral-300 rounded-xl">
                        <Image src={'/images/icon-grid.png'} width={20} height={20} alt={'Grid Icon'}/>
                        <p className="text-sm">Catalog</p>
                    </div>
                    <Search grow={true}/>
                </div>
                <div className="flex gap-8 items-center">
                    <div className="relative">
                        <Image src={'/images/icon-cart.png'} width={24} height={24} alt={'Cart Icon'}/>
                        <div className="absolute top-min10_ right-min8_ flex justify-center items-center w-5 h-5 bg-red rounded-full text-xs font-semibold text-contrast-0">6</div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex gap-2 items-center px-3 py-2 border border-neutral-300 rounded-full cursor-pointer">
                            <Image src={'/images/icon-store.png'} width={20} height={20} alt={'Store Icon'}/>
                            <p className="text-sm font-bold">Open Store</p>
                        </div>
                        <div className="flex gap-2 items-center px-3 py-2 border border-neutral-300 rounded-full cursor-pointer">
                            <Avatar>
                                <AvatarImage src={'/images/avatars/avatar-default.png'} width={32} height={32} alt={'Profile Picture'}/>
                                <AvatarFallback>John Doe</AvatarFallback>
                            </Avatar>
                            <p className="text-sm font-bold">John Doe</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};


export default Header;
