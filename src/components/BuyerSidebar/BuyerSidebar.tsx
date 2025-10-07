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
import Image from "next/image";
import React from "react";


const BuyerSidebar: React.FC = () => {
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
                <div className="flex gap-2 items-center h-12 px-4 py-2 bg-neutral-100 rounded-lg">
                    <Image src={'/images/icon-file.png'} width={20} height={20} alt={'File Icon'}/>
                    <p className="text-sm font-bold">Order List</p>
                </div>
                <div className="flex gap-2 items-center h-12 px-4 py-2 rounded-lg">
                    <Image src={'/images/icon-star-outline.png'} width={20} height={20} alt={'Star Icon'}/>
                    <p className="text-sm">Review</p>
                </div>
                <AlertDialog>
                    <AlertDialogTrigger className="flex gap-2 items-center h-12 px-4 py-2 rounded-lg">
                        <Image src={'/images/icon-logout.png'} width={20} height={20} alt={'Logout Icon'}/>
                        <p className="text-sm text-red">Logout</p>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-contrast-0 border-0">
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </nav>
        </section>
    );
};

export default BuyerSidebar;
