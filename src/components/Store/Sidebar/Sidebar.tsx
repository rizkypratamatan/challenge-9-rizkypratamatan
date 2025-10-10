"use client";

import Logo from "@/components/Store/Logo";
import MenuItem from "@/components/Store/MenuItem";
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
import {useLogout} from "@/hooks/useLogin";
import {toggleSellerSidebar} from "@/hooks/useToggle";
import Image from "next/image";
import React from "react";


const Sidebar: React.FC = () => {
    return (
        <div id="menu-seller" className="fixed z-60 flex flex-col gap-4 w-216_ h-[100vh] p-4 bg-contrast-0 border border-neutral-200 duration-500 hide-seller-sidebar">
            <div className="flex justify-between items-center py-2">
                <Logo/>
                <Image className="md:hidden" src={'/images/icon-close.png'} width={24} height={24} alt={'Close Icon'} onClick={toggleSellerSidebar}/>
            </div>
            <nav className="flex flex-col store-sidebar-menu">
                <MenuItem href={'/store/dashboard/'} src={'/images/icon-grid.png'} alt={'Grid Icon'} text={'Dashboard'} active={true}/>
                <MenuItem href={'/store/products/'} src={'/images/icon-archive.png'} alt={'Archive Icon'} text={'Products'} active={false}/>
                <MenuItem href={'/store/orders/'} src={'/images/icon-file.png'} alt={'File Icon'} text={'Order List'} active={false}/>
                <MenuItem href={'/store/reviews/'} src={'/images/icon-star-outline.png'} alt={'Star Outline Icon'} text={'Reviews'} active={false}/>
                <MenuItem href={'/store/settings/'} src={'/images/icon-gear.png'} alt={'Gear Icon'} text={'Settings'} active={false}/>
            </nav>
            <AlertDialog>
                <AlertDialogTrigger className="fixed bottom-4 flex gap-2 items-center w-182_ h-12 px-4 py-2 rounded-md">
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
        </div>
    );
};

export default Sidebar;
