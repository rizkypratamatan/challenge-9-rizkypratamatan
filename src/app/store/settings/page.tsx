import Header from "@/components/Store/Header";
import Sidebar from "@/components/Store/Sidebar";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Image from "next/image";
import React from "react";


const StoreSettings: React.FC = () => {
    return (
        <>
            <Sidebar/>
            <Header/>
            <main className="pt-64_ store-content">
                <h2 className="px-6 pt-6 text-28_ font-bold">Settings</h2>
                <div className="p-6">
                    <Tabs className="flex flex-col gap-6 p-5 bg-contrast-0 rounded-xl" defaultValue="profile">
                        <TabsList className="!w-240_ h-auto p-3 bg-contrast-0 rounded-xl">
                            <TabsTrigger className="order-tab-nav" value="profile">Profile</TabsTrigger>
                            <TabsTrigger className="order-tab-nav" value="address">Address</TabsTrigger>
                        </TabsList>
                        <TabsContent value="profile">
                            <div className="w-457_ flex flex-col gap-4 p-5 border border-neutral-300 rounded-md">
                                <div className="flex flex-col gap-4">
                                    <Image src={'/images/image-store.png'} width={64} height={64} alt={'Store Image'}/>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-semibold">Store Name</p>
                                        <p className="text-sm">Toko Barokah Jaya</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-semibold">Store Domain</p>
                                        <p className="text-sm">www.shirt.com/tokobarokahjaya</p>
                                    </div>
                                    <Button className="h-48_ p-2 bg-contrast-0 border border-neutral-300 rounded-lg font-semibold text-neutral-950">Change
                                        Profile</Button>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="address">
                            <div className="flex gap-0.5 justify-between items-center p-4 border border-neutral-300 rounded-md">
                                <div className="basis-404_ flex flex-col gap-0.5">
                                    <p className="leading-7 text-sm font-bold">Jakarta Selatan</p>
                                    <p className="leading-7 text-sm">612421</p>
                                    <p className="leading-7 text-sm">Lorem ipsum dolor sit amet consectetur. Maecenas
                                        volutpat sit ut ut molestie suspendisse odio maecenas. Quam cursus commodo a
                                        donec potenti feugiat.</p>
                                </div>
                                <Button className="basis-261_ h-48_ p-2 bg-contrast-0 border border-neutral-300 rounded-lg font-semibold text-neutral-950">Change
                                    Address</Button>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
        </>
    );
};

export default StoreSettings;
