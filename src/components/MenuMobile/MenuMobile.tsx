"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {useLogout} from "@/hooks/useLogin";
import {toggleMobileMenu} from "@/hooks/useToggle";
import {getToken} from "@/hooks/useToken";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const MenuMobile: React.FC = () => {
    const token: string | null = getToken();

    return (
        <div id="menu-mobile" className="fixed z-50 w-full h-[100vh] bg-contrast-0 duration-500 translate-x-full">
            <div className="flex justify-between items-center h-64_ px-4 shadow-25">
                <h2 className="text-lg font-bold">Menu</h2>
                <Image className="cursor-pointer" src={'/images/icon-close.png'} width={24} height={24} alt={'Close Icon'} onClick={() => toggleMobileMenu()}/>
            </div>
            <div className="flex gap-2 p-3">
                {token && <>
                    <Link className="basis-1/2 flex gap-2 items-center h-11 px-3 py-2 border border-neutral-300 rounded-full cursor-pointer" href={'/store/open/'}>
                        <Image src={'/images/icon-store.png'} width={20} height={20} alt={'Store Icon'}/>
                        <p className="text-sm font-bold">Open Store</p>
                    </Link>
                    <div className="basis-1/2 flex gap-2 items-center h-11 px-3 py-2 border border-neutral-300 rounded-full cursor-pointer">
                        <Avatar>
                            <AvatarImage src={'/images/avatars/avatar-default.png'} width={32} height={32} alt={'Profile Picture'}/>
                            <AvatarFallback>John Doe</AvatarFallback>
                        </Avatar>
                        <p className="text-sm font-bold">John Doe</p>
                    </div>
                </>}
                {!token && <>
                    <Link className="basis-1/2 h-10 p-2 border border-neutral-300 rounded-sm text-sm font-semibold text-center" href={'/login/'}>Login</Link>
                    <Link className="basis-1/2 h-10 p-2 bg-neutral-950 border border-neutral-300 rounded-sm text-sm font-semibold text-center text-contrast-0" href={'/register/'}>Register</Link>
                </>}
            </div>
            <nav className="flex flex-col p-3">
                <Link className="flex gap-2 items-center h-12 px-4 py-2 bg-neutral-100 rounded-lg" href={'/order/'}>
                    <Image src={'/images/icon-file.png'} width={20} height={20} alt={'File Icon'}/>
                    <p className="text-sm font-bold">Order List</p>
                </Link>
                <Link className="flex gap-2 items-center h-12 px-4 py-2 rounded-lg" href={'/review/'}>
                    <Image src={'/images/icon-star-outline.png'} width={20} height={20} alt={'Star Icon'}/>
                    <p className="text-sm">Review</p>
                </Link>
                <AlertDialog>
                    <AlertDialogTrigger className="flex gap-2 items-center h-12 px-4 py-2 rounded-lg">
                        <Image src={'/images/icon-logout.png'} width={20} height={20} alt={'Logout Icon'}/>
                        <p className="text-sm text-red">Logout</p>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="flex-col gap-4 bg-contrast-0 border-0">
                        <AlertDialogHeader className="flex-col gap-4">
                            <AlertDialogTitle className="flex justify-between items-center">
                                <p className="text-xl font-bold">Logout</p>
                                <AlertDialogCancel className="bg-transparent border-0 shadow-none">
                                    <Image src={'/images/icon-close.png'} width={20} height={20} alt={'Close Icon'}/>
                                </AlertDialogCancel>
                            </AlertDialogTitle>
                            <AlertDialogDescription className="text-sm">
                                You will need to sign in again to access your account
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter className="flex flex-row justify-end">
                            <AlertDialogCancel className="basis-1/2 h-10 bg-contras-0 border-neutral-300 rounded-lg text-sm font-semibold md:basis-137_">Cancel</AlertDialogCancel>
                            <AlertDialogAction className="basis-1/2 h-10 bg-red-100 border-0 text-sm font-semibold md:basis-137_" onClick={useLogout}>Logout</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </nav>
        </div>
    );
};

export default MenuMobile;
