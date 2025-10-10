"use client";

import Search from "@/components/Search";
import Header from "@/components/Store/Header";
import OrderInvoice from "@/components/Store/OrderInvoice";
import OrderItem from "@/components/Store/OrderItem";
import Sidebar from "@/components/Store/Sidebar";
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
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {useCancelOrder} from "@/hooks/useCancelOrder";
import {useOrderItems} from "@/hooks/useOrderItems";
import {OrderItemStatus} from "@/types/enums/OrderItemStatus";
import {OrderItem as OrderItemData} from "@/types/interfaces/OrderItem";
import Image from "next/image";
import React, {useState} from "react";


const StoreOrder: React.FC = () => {
    const [tab, setTab] = useState("all");
    const [index, setIndex] = useState<number>(1);
    const [status, setStatus] = useState<OrderItemStatus>();

    const {data} = useOrderItems(index, status);
    const {onClick} = useCancelOrder();

    return (
        <React.Fragment>
            <Sidebar/>
            <Header/>
            <main className="pt-64_ store-content">
                <h2 className="px-6 pt-6 text-28_ font-bold">Order List</h2>
                <div className="flex flex-col gap-4 p-6">
                    <div className="flex flex-col gap-3 justify-between md:flex-row">
                        <div className="flex gap-1.5 items-center h-12 px-4 py-2 bg-contrast-0 border border-neutral-300 rounded-xl md:basis-254_">
                            <Image src={'/images/icon-calendar.png'} width={20} height={20} alt={'Calendar Icon'}/>
                            <p className="text-sm">30 Days ago</p>
                        </div>
                        <Search className="md:w-254_"/>
                        <Select value={tab} onValueChange={(value) => setTab(value)}>
                            <SelectTrigger className="w-full !h-11 bg-contrast-0 !rounded-xl">
                                <SelectValue placeholder="Status"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Order</SelectItem>
                                <SelectItem value="new">New</SelectItem>
                                <SelectItem value="confirmed">Confirmed</SelectItem>
                                <SelectItem value="completed">Completed</SelectItem>
                                <SelectItem value="cancelled">Cancelled</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Tabs className="flex flex-col gap-4" value={tab} onValueChange={setTab}>
                        <TabsList className="hidden w-full h-auto p-3 bg-contrast-0 rounded-xl md:block">
                            <TabsTrigger className="order-tab-nav" value="all">All Order</TabsTrigger>
                            <TabsTrigger className="order-tab-nav" value="new">New</TabsTrigger>
                            <TabsTrigger className="order-tab-nav" value="confirmed">Confirmed</TabsTrigger>
                            <TabsTrigger className="order-tab-nav" value="completed">Completed</TabsTrigger>
                            <TabsTrigger className="order-tab-nav" value="cancelled">Cancelled</TabsTrigger>
                        </TabsList>
                        <TabsContent value="all">
                            <div className="flex flex-col gap-4">
                                {data?.data.items.map((item: OrderItemData, index: number) => {
                                    return (
                                        <div key={index} className="flex flex-col gap-3 p-5 bg-contrast-0 rounded-xl">
                                            <OrderInvoice item={item}/>
                                            <div className="line"></div>
                                            <OrderItem item={item}/>
                                            <div className="line"></div>
                                            <div className="flex flex-col gap-3 justify-between items-center md:flex-row">
                                                <div className="flex flex-col w-full md:w-auto">
                                                    <p className="leading-7 text-sm">Total Payment</p>
                                                    <p className="leading-7.5 font-bold">Rp{(item.priceSnapshot * item.qty).toLocaleString('id-ID')}</p>
                                                </div>
                                                <div className="line-horizontal md:hidden"></div>
                                                <div className="flex gap-4 w-full md:basis-336_ md:w-auto">
                                                    <AlertDialog>
                                                        <AlertDialogTrigger className="basis-1/2 h-10 p-2 bg-contrast-0 border border-neutral-300 rounded-lg text-sm font-bold text-neutral-950 md:basis-160_">Reject
                                                            Order</AlertDialogTrigger>
                                                        <AlertDialogContent className="flex-col gap-4 bg-contrast-0 border-0">
                                                            <AlertDialogHeader className="flex-col gap-4">
                                                                <AlertDialogTitle className="flex justify-between items-center">
                                                                    <p className="text-xl font-bold">Reject Order</p>
                                                                    <AlertDialogCancel className="bg-transparent border-0 shadow-none">
                                                                        <Image src={'/images/icon-close.png'} width={20} height={20} alt={'Close Icon'}/>
                                                                    </AlertDialogCancel>
                                                                </AlertDialogTitle>
                                                                <AlertDialogDescription className="text-sm">
                                                                    <p className="font-bold">Reject this order?</p>
                                                                    <p>If you reject, this order will be cancelled and
                                                                        the customer will be notified.</p>
                                                                </AlertDialogDescription>
                                                            </AlertDialogHeader>
                                                            <AlertDialogFooter>
                                                                <AlertDialogCancel className="basis-1/2 h-10 bg-contras-0 border-neutral-300 rounded-lg text-sm font-semibold md:basis-137_">Keep
                                                                    Order</AlertDialogCancel>
                                                                <AlertDialogAction className="basis-1/2 h-10 bg-red-100 border-0 text-sm font-semibold md:basis-137_" onClick={() => onClick({
                                                                    id: item.orderId,
                                                                    reason: 'Change of mind'
                                                                })}>Reject
                                                                    Order</AlertDialogAction>
                                                            </AlertDialogFooter>
                                                        </AlertDialogContent>
                                                    </AlertDialog>
                                                    <AlertDialog>
                                                        <AlertDialogTrigger className="basis-1/2 h-10 p-2 bg-primary border border-neutral-300 rounded-lg text-sm font-bold text-contrast-0 md:basis-160_">Accept
                                                            Order</AlertDialogTrigger>
                                                        <AlertDialogContent className="flex-col gap-4 bg-contrast-0 border-0">
                                                            <AlertDialogHeader className="flex-col gap-4">
                                                                <AlertDialogTitle className="flex justify-between items-center">
                                                                    <p className="text-xl font-bold">Accept Order</p>
                                                                    <AlertDialogCancel className="bg-transparent border-0 shadow-none">
                                                                        <Image src={'/images/icon-close.png'} width={20} height={20} alt={'Close Icon'}/>
                                                                    </AlertDialogCancel>
                                                                </AlertDialogTitle>
                                                                <AlertDialogDescription className="text-sm">
                                                                    <p className="font-bold">Accept this order?</p>
                                                                    <p>By accepting, you confirm this order and can
                                                                        start processing it for shipment</p>
                                                                </AlertDialogDescription>
                                                            </AlertDialogHeader>
                                                            <AlertDialogFooter>
                                                                <AlertDialogCancel className="basis-1/2 h-10 bg-contras-0 border-neutral-300 rounded-lg text-sm font-semibold md:basis-137_">Back</AlertDialogCancel>
                                                                <AlertDialogAction className="basis-1/2 h-10 bg-neutral-950 border-0 text-sm font-semibold md:basis-137_">Accept
                                                                    Order</AlertDialogAction>
                                                            </AlertDialogFooter>
                                                        </AlertDialogContent>
                                                    </AlertDialog>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                <div className="flex flex-col justify-between items-center px-10 py-3 bg-contrast-0 rounded-xl shadow-25 md:flex-row">
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
                        <TabsContent value="new">Change your password here.</TabsContent>
                        <TabsContent value="confirmed">Change your password here.</TabsContent>
                        <TabsContent value="completed">Change your password here.</TabsContent>
                        <TabsContent value="cancelled">Change your password here.</TabsContent>
                    </Tabs>
                </div>
            </main>
        </React.Fragment>
    );
};

export default StoreOrder;
