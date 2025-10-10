"use client";

import Header from "@/components/Store/Header";
import Sidebar from "@/components/Store/Sidebar";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {useSellerShop} from "@/hooks/useSellerShop";
import {useUpdateShop} from "@/hooks/useUpdateShop";
import Image from "next/image";
import React, {RefObject, useEffect, useRef, useState} from "react";


const StoreSettings: React.FC = () => {
    const logoRef: RefObject<HTMLInputElement | null> = useRef<HTMLInputElement | null>(null);

    const [logoPreview, setLogoPreview] = useState<string[]>([]);

    const logoClick = () => {
        logoRef.current?.click();
    };

    const logoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files: FileList | null = event.target.files;

        if(files) {
            const urls: string[] = [];

            for(const file of files) {
                urls.push(URL.createObjectURL(file));
            }

            setLogoPreview(urls);
        }
    };

    const {data, isLoading, isError, error} = useSellerShop();

    const {register, setValue, handleSubmit, errors, onSubmit} = useUpdateShop();

    useEffect(() => {
        setValue('name', data?.data.name ?? '');
        setValue('slug', data?.data.slug ?? '');
        setValue('address', data?.data.address ?? '');
    }, [data]);

    return (
        <React.Fragment>
            <Sidebar/>
            <Header/>
            <main className="pt-64_ store-content">
                <h2 className="px-6 pt-6 text-28_ font-bold">Settings</h2>
                <div className="p-6">
                    <Tabs className="flex flex-col gap-6 p-5 bg-contrast-0 rounded-xl" defaultValue="profile">
                        <TabsList className="w-full h-auto p-3 bg-contrast-0 rounded-xl md:!w-240_">
                            <TabsTrigger className="order-tab-nav" value="profile">Profile</TabsTrigger>
                            <TabsTrigger className="order-tab-nav" value="address">Address</TabsTrigger>
                        </TabsList>
                        <TabsContent value="profile">
                            <div className="flex flex-col gap-4 p-5 border border-neutral-300 rounded-md md:w-457_">
                                <div className="flex flex-col gap-4">
                                    <Image src={data?.data.logo ?? '/images/image-store.png'} width={64} height={64} alt={'Store Image'}/>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-semibold">Store Name</p>
                                        <p className="text-sm">{data?.data.name}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-semibold">Store Domain</p>
                                        <p className="text-sm">www.shirt.com/{data?.data.slug}</p>
                                    </div>
                                    <AlertDialog>
                                        <AlertDialogTrigger className="h-12 p-2 bg-contrast-0 border border-neutral-300 rounded-lg font-semibold text-neutral-950">Change
                                            Profile</AlertDialogTrigger>
                                        <AlertDialogContent className="bg-contrast-0 border-0">
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <fieldset className="flex flex-col gap-4 bg-contrast-0 border-0">
                                                    <AlertDialogHeader className="flex-col gap-4">
                                                        <AlertDialogTitle className="flex justify-between items-center">
                                                            <p className="text-xl font-bold">Change Profile</p>
                                                            <AlertDialogCancel className="bg-transparent border-0 shadow-none">
                                                                <Image src={'/images/icon-close.png'} width={20} height={20} alt={'Close Icon'}/>
                                                            </AlertDialogCancel>
                                                        </AlertDialogTitle>
                                                        <AlertDialogDescription className="flex flex-col gap-4 text-sm">
                                                            <Input {...register('logo')} ref={(event) => {
                                                                register("logo").ref(event);
                                                                logoRef.current = event;
                                                            }} className="hidden" type="file" multiple={true} placeholder="Photo" onChange={(event) => {
                                                                logoChange(event);
                                                                register('logo').onChange(event);
                                                            }}/>
                                                            <Image className="mx-auto" src={logoPreview[0] ?? '/images/image-store.png'} width={100} height={100} alt={'Store Image'}/>
                                                            <p className="w-137_ mx-auto p-2 bg-contrast-0 border border-neutral-300 rounded-lg text-sm font-semibold text-neutral-950 text-center cursor-pointer" onClick={logoClick}>Change
                                                                Photo</p>
                                                            <Input {...register('name')} className="w-full h-56_ px-3 py-2 border border-neutral-300 rounded-lg" type="text" placeholder="Store Name"/>
                                                            <Input {...register('slug')} className="w-full h-56_ px-3 py-2 border border-neutral-300 rounded-lg" type="text" placeholder="Store Domain"/>
                                                            <Input {...register('address')} className="hidden" type="text" placeholder="Address"/>
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter className="flex flex-row justify-end">
                                                        <Button className="w-full h-10 bg-neutral-950 border-0 text-sm font-semibold">Save</Button>
                                                    </AlertDialogFooter>
                                                </fieldset>
                                            </form>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="address">
                            <div className="flex flex-col gap-0.5 justify-between items-center p-4 border border-neutral-300 rounded-md md:flex-row">
                                <div className="flex flex-col gap-0.5 md:basis-404_">
                                    <p className="leading-7 text-sm font-bold">Jakarta Utara</p>
                                    <p className="leading-7 text-sm">612421</p>
                                    <p className="leading-7 text-sm">{data?.data.address}</p>
                                </div>
                                <AlertDialog>
                                    <AlertDialogTrigger className="h-12 p-2 bg-contrast-0 border border-neutral-300 rounded-lg font-semibold text-neutral-950 md:basis-261_">Change
                                        Address</AlertDialogTrigger>
                                    <AlertDialogContent className="bg-contrast-0 border-0">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <fieldset className="flex flex-col gap-4 bg-contrast-0 border-0">
                                                <AlertDialogHeader className="flex-col gap-4">
                                                    <AlertDialogTitle className="flex justify-between items-center">
                                                        <p className="text-xl font-bold">Change Address</p>
                                                        <AlertDialogCancel className="bg-transparent border-0 shadow-none">
                                                            <Image src={'/images/icon-close.png'} width={20} height={20} alt={'Close Icon'}/>
                                                        </AlertDialogCancel>
                                                    </AlertDialogTitle>
                                                    <AlertDialogDescription className="flex flex-col gap-4 text-sm">
                                                        <Input {...register('name')} className="hidden" type="text" placeholder="Store Name"/>
                                                        <Input className="w-full h-56_ px-3 py-2 border border-neutral-300 rounded-lg" type="text" placeholder="City"/>
                                                        <Input {...register('slug')} className="w-full h-56_ px-3 py-2 border border-neutral-300 rounded-lg" type="text" placeholder="Store Domain"/>
                                                        <Input {...register('address')} className="w-full h-56_ px-3 py-2 border border-neutral-300 rounded-lg" type="text" placeholder="Address"/>
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter className="flex flex-row justify-end">
                                                    <Button className="w-full h-10 bg-neutral-950 border-0 text-sm font-semibold">Save</Button>
                                                </AlertDialogFooter>
                                            </fieldset>
                                        </form>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
        </React.Fragment>
    );
};

export default StoreSettings;
