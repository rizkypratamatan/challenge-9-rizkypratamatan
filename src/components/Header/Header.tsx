"use client";

import Logo from "@/components/Logo";
import Search from "@/components/Search";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {useCart} from "@/hooks/useCart";
import {toggleMobileMenu} from "@/hooks/useToggle";
import {getToken} from "@/hooks/useToken";
import {CartItem} from "@/types/interfaces/CartItem";
import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";


const Header: React.FC = () => {
    const token: string | null = getToken();

    const [cart, setCart] = useState<number>(0);

    const {data, isLoading, isError, error} = useCart();

    useEffect(() => {
        if(data) {
            let count: number = 0;

            data.data.items.map((item: CartItem) => {
                count += item.qty;
            });

            setCart(count);
        }
    }, [data]);

    return (
        <header className="fixed z-50 w-full bg-contrast-0">
            <div className="flex gap-4 justify-between items-center h-64_ px-4 md:h-84_ lg:px-10 xl:px-120_ shadow-25">
                <Logo dynamic={true}/>
                <div className="grow flex gap-1.5 max-w-623_ md:gap-3">
                    <Link className="flex gap-1.5 items-center w-10 h-10 px-2.5 border border-neutral-300 rounded-xl md:w-auto md:h-11 md:px-4" href={'/catalog/'}>
                        <Image src={'/images/icon-grid.png'} width={20} height={20} alt={'Grid Icon'}/>
                        <p className="hidden text-sm md:block">Catalog</p>
                    </Link>
                    <Search className="grow w-157_"/>
                </div>
                <div className="flex gap-3 items-center lg:gap-8">
                    <Link className="relative" href={'/cart/'}>
                        <Image src={'/images/icon-cart.png'} width={24} height={24} alt={'Cart Icon'}/>
                        {cart > 0 &&
                            <div className="absolute top-min10_ right-min8_ flex justify-center items-center w-5 h-5 bg-red rounded-full text-xs font-semibold text-contrast-0">{cart}</div>}
                    </Link>
                    <div className="hidden gap-3 lg:flex">
                        {token && <>
                            <Link className="flex gap-2 items-center h-11 px-3 py-2 border border-neutral-300 rounded-full cursor-pointer" href={'/store/open/'}>
                                <Image src={'/images/icon-store.png'} width={20} height={20} alt={'Store Icon'}/>
                                <p className="text-sm font-bold">Open Store</p>
                            </Link>
                            <div className="flex gap-2 items-center h-11 px-3 py-2 border border-neutral-300 rounded-full cursor-pointer">
                                <Avatar>
                                    <AvatarImage src={'/images/avatars/avatar-default.png'} width={32} height={32} alt={'Profile Picture'}/>
                                    <AvatarFallback>John Doe</AvatarFallback>
                                </Avatar>
                                <p className="text-sm font-bold">John Doe</p>
                            </div>
                        </>}
                        {!token && <>
                            <Link className="w-144_ h-10 p-2 border border-neutral-300 rounded-sm text-sm font-semibold text-center" href={'/login/'}>Login</Link>
                            <Link className="w-144_ h-10 p-2 bg-neutral-950 border border-neutral-300 rounded-sm text-sm font-semibold text-center text-contrast-0" href={'/register/'}>Register</Link>
                        </>}
                    </div>
                    <Image className="block cursor-pointer lg:hidden" src={'/images/icon-hamburger.png'} width={24} height={24} alt={'Hamburger Icon'} onClick={() => toggleMobileMenu()}/>
                </div>
            </div>
        </header>
    );
};


export default Header;
