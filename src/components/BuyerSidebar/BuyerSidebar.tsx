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
import {BuyerSidebarPage} from "@/types/enums/BuyerSidebarPage";
import Image from "next/image";
import Link from "next/link";
import React from "react";


type Props = {
    page: BuyerSidebarPage;
};

const BuyerSidebar: React.FC<Props> = ({page}) => {
    return (
        <section className="hidden basis-227_ flex-col gap-4 p-4 bg-contrast-0 border border-neutral-200 rounded-2xl md:flex">
            <div className="flex gap-2 items-center">
                <Avatar>
                    <AvatarImage src={'/images/avatars/avatar-default.png'} width={40} height={40} alt={'Profile Picture'}/>
                    <AvatarFallback>John Doe</AvatarFallback>
                </Avatar>
                <p className="text-sm font-bold">John Doe</p>
            </div>
            <nav className="flex flex-col">
                <Link className={`${page === BuyerSidebarPage.Order ? 'bg-neutral-100' : ''} flex gap-2 items-center h-12 px-4 py-2 rounded-lg`} href={'/order/'}>
                    <Image src={'/images/icon-file.png'} width={20} height={20} alt={'File Icon'}/>
                    <p className="text-sm font-bold">Order List</p>
                </Link>
                <Link className={`${page === BuyerSidebarPage.Review ? 'bg-neutral-100' : ''} flex gap-2 items-center h-12 px-4 py-2 rounded-lg`} href={'/review/'}>
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
        </section>
    );
};

export default BuyerSidebar;
