import BuyerSidebar from "@/components/BuyerSidebar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OrderItem from "@/components/OrderItem";
import OrderStore from "@/components/OrderStore";
import Search from "@/components/Search";
import {Button} from "@/components/ui/button";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem, PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Image from "next/image";
import React from "react";


const Order: React.FC = () => {
    return (
        <>
            <Header/>
            <main className="gap-6 items-start">
                <BuyerSidebar/>
                <section className="grow flex flex-col gap-4">
                    <h2 className="text-32_ font-bold">Order List</h2>
                    <Search grow={false}/>
                    <Tabs className="flex flex-col gap-4" defaultValue="all">
                        <TabsList className="w-full h-auto p-3 bg-contrast-0 rounded-xl">
                            <TabsTrigger className="order-tab-nav" value="all">All Order</TabsTrigger>
                            <TabsTrigger className="order-tab-nav" value="processing">Processing</TabsTrigger>
                            <TabsTrigger className="order-tab-nav" value="delivered">Delivered</TabsTrigger>
                            <TabsTrigger className="order-tab-nav" value="completed">Completed</TabsTrigger>
                            <TabsTrigger className="order-tab-nav" value="cancelled">Cancelled</TabsTrigger>
                        </TabsList>
                        <TabsContent value="all">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-3 p-5 bg-contrast-0 rounded-xl">
                                    <OrderStore/>
                                    <div className="line"></div>
                                    <OrderItem/>
                                    <div className="line"></div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex flex-col">
                                            <p className="leading-7 text-sm">Total Payment</p>
                                            <p className="leading-7.5 font-bold">Total Payment</p>
                                        </div>
                                        <Button className="basis-160_ h-10 p-2 bg-contrast-0 border border-neutral-300 rounded-lg font-bold text-neutral-950">Cancel Order</Button>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center px-10 py-3 bg-contrast-0 rounded-xl shadow-25">
                                    <p className="text-sm">Showing 1 to 10 of 60 entries</p>
                                    <Pagination className="w-auto mx-0">
                                        <PaginationContent>
                                            <PaginationItem>
                                                <PaginationPrevious href="#" />
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#">1</PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationEllipsis />
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationNext href="#" />
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
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default Order;
