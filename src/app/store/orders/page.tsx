import Search from "@/components/Search";
import Header from "@/components/Store/Header";
import OrderInvoice from "@/components/Store/OrderInvoice";
import OrderItem from "@/components/Store/OrderItem";
import Sidebar from "@/components/Store/Sidebar";
import {Button} from "@/components/ui/button";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Image from "next/image";
import React from "react";


const StoreOrder: React.FC = () => {
    return (
        <React.Fragment>
            <Sidebar/>
            <Header/>
            <main className="pt-64_ store-content">
                <h2 className="px-6 pt-6 text-28_ font-bold">Order List</h2>
                <div className="flex flex-col gap-4 p-6">
                    <div className="flex justify-between">
                        <div className="basis-254_ flex gap-1.5 items-center h-12 px-4 py-2 bg-contrast-0 border border-neutral-300 rounded-xl">
                            <Image src={'/images/icon-calendar.png'} width={20} height={20} alt={'Calendar Icon'}/>
                            <p className="text-sm">30 Days ago</p>
                        </div>
                        <Search className="w-254_"/>
                    </div>
                    <Tabs className="flex flex-col gap-4" defaultValue="all">
                        <TabsList className="w-full h-auto p-3 bg-contrast-0 rounded-xl">
                            <TabsTrigger className="order-tab-nav" value="all">All Order</TabsTrigger>
                            <TabsTrigger className="order-tab-nav" value="processing">New</TabsTrigger>
                            <TabsTrigger className="order-tab-nav" value="delivered">Confirmed</TabsTrigger>
                            <TabsTrigger className="order-tab-nav" value="completed">Completed</TabsTrigger>
                            <TabsTrigger className="order-tab-nav" value="cancelled">Cancelled</TabsTrigger>
                        </TabsList>
                        <TabsContent value="all">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-3 p-5 bg-contrast-0 rounded-xl">
                                    <OrderInvoice/>
                                    <div className="line"></div>
                                    <OrderItem/>
                                    <div className="line"></div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex flex-col">
                                            <p className="leading-7 text-sm">Total Payment</p>
                                            <p className="leading-7.5 font-bold">Rp175.000</p>
                                        </div>
                                        <div className="basis-336_ flex gap-4">
                                            <Button className="basis-160_ h-10 p-2 bg-contrast-0 border border-neutral-300 rounded-lg font-bold text-neutral-950">Reject
                                                Order</Button>
                                            <Button className="basis-160_ h-10 p-2 border border-neutral-300 rounded-lg font-bold">Accept
                                                Order</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 p-5 bg-contrast-0 rounded-xl">
                                    <OrderInvoice/>
                                    <div className="line"></div>
                                    <OrderItem/>
                                    <div className="line"></div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex flex-col">
                                            <p className="leading-7 text-sm">Total Payment</p>
                                            <p className="leading-7.5 font-bold">Rp175.000</p>
                                        </div>
                                        <div className="basis-336_ flex gap-4">
                                            <Button className="basis-160_ h-10 p-2 bg-contrast-0 border border-neutral-300 rounded-lg font-bold text-neutral-950">Reject
                                                Order</Button>
                                            <Button className="basis-160_ h-10 p-2 border border-neutral-300 rounded-lg font-bold">Accept
                                                Order</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 p-5 bg-contrast-0 rounded-xl">
                                    <OrderInvoice/>
                                    <div className="line"></div>
                                    <OrderItem/>
                                    <div className="line"></div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex flex-col">
                                            <p className="leading-7 text-sm">Total Payment</p>
                                            <p className="leading-7.5 font-bold">Rp175.000</p>
                                        </div>
                                        <div className="basis-336_ flex gap-4">
                                            <Button className="basis-160_ h-10 p-2 bg-contrast-0 border border-neutral-300 rounded-lg font-bold text-neutral-950">Reject
                                                Order</Button>
                                            <Button className="basis-160_ h-10 p-2 border border-neutral-300 rounded-lg font-bold">Accept
                                                Order</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 p-5 bg-contrast-0 rounded-xl">
                                    <OrderInvoice/>
                                    <div className="line"></div>
                                    <OrderItem/>
                                    <div className="line"></div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex flex-col">
                                            <p className="leading-7 text-sm">Total Payment</p>
                                            <p className="leading-7.5 font-bold">Rp175.000</p>
                                        </div>
                                        <div className="basis-336_ flex gap-4">
                                            <Button className="basis-160_ h-10 p-2 bg-contrast-0 border border-neutral-300 rounded-lg font-bold text-neutral-950">Reject
                                                Order</Button>
                                            <Button className="basis-160_ h-10 p-2 border border-neutral-300 rounded-lg font-bold">Accept
                                                Order</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 p-5 bg-contrast-0 rounded-xl">
                                    <OrderInvoice/>
                                    <div className="line"></div>
                                    <OrderItem/>
                                    <div className="line"></div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex flex-col">
                                            <p className="leading-7 text-sm">Total Payment</p>
                                            <p className="leading-7.5 font-bold">Rp175.000</p>
                                        </div>
                                        <div className="basis-336_ flex gap-4">
                                            <Button className="basis-160_ h-10 p-2 bg-contrast-0 border border-neutral-300 rounded-lg font-bold text-neutral-950">Reject
                                                Order</Button>
                                            <Button className="basis-160_ h-10 p-2 border border-neutral-300 rounded-lg font-bold">Accept
                                                Order</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center px-10 py-3 bg-contrast-0 rounded-xl shadow-25">
                                    <p className="text-sm">Showing 1 to 10 of 60 entries</p>
                                    <Pagination className="w-auto mx-0">
                                        <PaginationContent>
                                            <PaginationItem>
                                                <PaginationPrevious href="#"/>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#">1</PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationEllipsis/>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationNext href="#"/>
                                            </PaginationItem>
                                        </PaginationContent>
                                    </Pagination>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="processing">Change your password here.</TabsContent>
                        <TabsContent value="delivered">Change your password here.</TabsContent>
                        <TabsContent value="completed">Change your password here.</TabsContent>
                        <TabsContent value="cancelled">Change your password here.</TabsContent>
                    </Tabs>
                </div>
            </main>
        </React.Fragment>
    );
};

export default StoreOrder;
