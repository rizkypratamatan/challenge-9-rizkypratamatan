"use client";

import BuyerSidebar from "@/components/BuyerSidebar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MenuMobile from "@/components/MenuMobile";
import OrderItem from "@/components/OrderItem";
import OrderStore from "@/components/OrderStore";
import ResponsePage from "@/components/ResponsePage";
import Search from "@/components/Search";
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
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
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
import {Textarea} from "@/components/ui/textarea";
import {useCompleteOrder} from "@/hooks/useCompleteOrder";
import {useGiveReview} from "@/hooks/useGiveReview";
import {useMyOrders} from "@/hooks/useMyOrders";
import {BuyerSidebarPage} from "@/types/enums/BuyerSidebarPage";
import {CheckoutPaymentStatus} from "@/types/enums/CheckoutPaymentStatus";
import {MyOrder} from "@/types/interfaces/MyOrder";
import {MyOrderItem} from "@/types/interfaces/MyOrderItem";
import Image from "next/image";
import React, {useState} from "react";


const Order: React.FC = () => {
    const [tab, setTab] = useState("all");
    const [index, setIndex] = useState<number>(1);
    const [paymentStatus, setPaymentStatus] = useState<CheckoutPaymentStatus>();
    const [star, setStar] = useState<number>(0);

    const rateStar = (star: number) => {
        setStar(star);
    };

    const reviewProductId = (items: MyOrderItem[]) => {
        let id: string = '';

        items.map((item: MyOrderItem) => {
            id += `,${item.product.id}`;
        });

        return id.substring(1);
    };

    const {data} = useMyOrders(index, paymentStatus);
    const {register, handleSubmit, errors, onSubmit} = useGiveReview();
    const {onClick: onClickCompleteOrder} = useCompleteOrder();

    return (
        <React.Fragment>
            <Header/>
            <MenuMobile/>
            <main className="gap-6 items-start site">
                <BuyerSidebar page={BuyerSidebarPage.Order}/>
                <section className="grow flex flex-col gap-4">
                    <h2 className="text-32_ font-bold">Order List</h2>
                    <Search/>
                    <Select value={tab} onValueChange={(value) => setTab(value)}>
                        <SelectTrigger className="w-full !h-11">
                            <SelectValue placeholder="Status"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Order</SelectItem>
                            <SelectItem value="processing">Processing</SelectItem>
                            <SelectItem value="delivered">Delivered</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                    </Select>
                    <Tabs className="flex flex-col gap-4" value={tab} onValueChange={setTab}>
                        <TabsList className="hidden w-full h-auto p-3 bg-contrast-0 rounded-xl md:block">
                            <TabsTrigger className="order-tab-nav" value="all">All Order</TabsTrigger>
                            <TabsTrigger className="order-tab-nav" value="processing">Processing</TabsTrigger>
                            <TabsTrigger className="order-tab-nav" value="delivered">Delivered</TabsTrigger>
                            <TabsTrigger className="order-tab-nav" value="completed">Completed</TabsTrigger>
                            <TabsTrigger className="order-tab-nav" value="cancelled">Cancelled</TabsTrigger>
                        </TabsList>
                        <TabsContent value="all">
                            <div className="flex flex-col gap-4">
                                {data?.data.orders.map((order: MyOrder, index: number) => {
                                    return <div key={index} className="flex flex-col gap-3 p-5 bg-contrast-0 rounded-xl">
                                        <OrderStore order={order}/>
                                        <div className="line"></div>
                                        {order.items.map((item: MyOrderItem, index1: number) => {
                                            return <React.Fragment key={index1}>
                                                <OrderItem item={item}/>
                                                <div className="line"></div>
                                            </React.Fragment>
                                        })}
                                        <div className="flex justify-between items-center">
                                            <div className="flex flex-col">
                                                <p className="leading-7 text-sm">Total Payment</p>
                                                <p className="leading-7.5 font-bold">{order.totalAmount.toLocaleString('id-ID')}</p>
                                            </div>
                                            <AlertDialog>
                                                <AlertDialogTrigger className="hidden basis-160_ h-10 p-2 bg-contrast-0 border border-neutral-300 rounded-lg text-sm font-bold text-neutral-950">Cancel
                                                    Order</AlertDialogTrigger>
                                                <AlertDialogContent className="flex-col gap-4 bg-contrast-0 border-0">
                                                    <AlertDialogHeader className="flex-col gap-4">
                                                        <AlertDialogTitle className="flex justify-between items-center">
                                                            <p className="text-xl font-bold">Cancel Order</p>
                                                            <AlertDialogCancel className="bg-transparent border-0 shadow-none">
                                                                <Image src={'/images/icon-close.png'} width={20} height={20} alt={'Close Icon'}/>
                                                            </AlertDialogCancel>
                                                        </AlertDialogTitle>
                                                        <AlertDialogDescription className="text-sm">
                                                            <p className="font-bold">Cancel this order?</p>
                                                            <p>This action cannot be undone. If you continue, the order
                                                                will be cancelled and you will no</p>
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel className="basis-1/2 h-10 bg-contras-0 border-neutral-300 rounded-lg text-sm font-semibold md:basis-137_">Keep
                                                            Order</AlertDialogCancel>
                                                        <AlertDialogAction className="basis-1/2 h-10 bg-red-100 border-0 text-sm font-semibold md:basis-137_">Cancel
                                                            Order</AlertDialogAction>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                            <AlertDialog>
                                                <AlertDialogTrigger className={`${order.paymentStatus === CheckoutPaymentStatus.PAID ? '' : 'hidden'} basis-160_ h-10 p-2 bg-neutral-950 border border-neutral-300 rounded-lg text-sm font-bold text-contrast-0`}>Complete
                                                    Order</AlertDialogTrigger>
                                                <AlertDialogContent className="flex-col gap-4 bg-contrast-0 border-0">
                                                    <AlertDialogHeader className="flex-col gap-4">
                                                        <AlertDialogTitle className="flex justify-between items-center">
                                                            <p className="text-xl font-bold">Complete Order</p>
                                                            <AlertDialogCancel className="bg-transparent border-0 shadow-none">
                                                                <Image src={'/images/icon-close.png'} width={20} height={20} alt={'Close Icon'}/>
                                                            </AlertDialogCancel>
                                                        </AlertDialogTitle>
                                                        <AlertDialogDescription className="text-sm">
                                                            <p className="font-bold">Mark this order as
                                                                completed?</p>
                                                            <p>Once confirmed, this order will be closed and cannot be
                                                                changed.</p>
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel className="basis-1/2 h-10 bg-contras-0 border-neutral-300 rounded-lg text-sm font-semibold md:basis-137_">Back</AlertDialogCancel>
                                                        <AlertDialogAction className="basis-1/2 h-10 bg-neutral-950 border-0 text-sm font-semibold md:basis-137_" onClick={() => onClickCompleteOrder({id: order.id})}>Complete
                                                            Order</AlertDialogAction>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                            <AlertDialog>
                                                <AlertDialogTrigger className={`${order.paymentStatus === CheckoutPaymentStatus.COMPLETED ? '' : 'hidden'} basis-160_ h-10 p-2 bg-neutral-950 border border-neutral-300 rounded-lg text-sm font-bold text-contrast-0`}>Give
                                                    Review</AlertDialogTrigger>
                                                <AlertDialogContent className="flex-col gap-4 bg-contrast-0 border-0">
                                                    <AlertDialogHeader className="flex-col gap-4">
                                                        <AlertDialogTitle className="flex justify-between items-center">
                                                            <p className="text-xl font-bold">Give Rating</p>
                                                            <AlertDialogCancel className="bg-transparent border-0 shadow-none">
                                                                <Image src={'/images/icon-close.png'} width={20} height={20} alt={'Close Icon'}/>
                                                            </AlertDialogCancel>
                                                        </AlertDialogTitle>
                                                        <AlertDialogDescription className="text-sm">
                                                            <p className="font-bold text-center text-neutral-950">Give
                                                                Rating</p>
                                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                                <fieldset>
                                                                    <Input {...register('productId')} className="hidden" type="text" value={reviewProductId(order.items)}/>
                                                                    {errors.productId &&
                                                                        <p className="text-sm text-red">{errors.productId.message}</p>}
                                                                    <Input {...register('star')} className="hidden" type="number"/>
                                                                    {errors.star &&
                                                                        <p className="text-sm text-red">{errors.star.message}</p>}
                                                                    <div className="flex gap-1 justify-center mb-4">
                                                                        <Image className="cursor-pointer" src={star >= 1 ? '/images/icon-star.png' : '/images/icon-star-gray.png'} width={40} height={40} alt={'Star Icon'} onClick={() => rateStar(1)}/>
                                                                        <Image className="cursor-pointer" src={star >= 2 ? '/images/icon-star.png' : '/images/icon-star-gray.png'} width={40} height={40} alt={'Star Icon'} onClick={() => rateStar(2)}/>
                                                                        <Image className="cursor-pointer" src={star >= 3 ? '/images/icon-star.png' : '/images/icon-star-gray.png'} width={40} height={40} alt={'Star Icon'} onClick={() => rateStar(3)}/>
                                                                        <Image className="cursor-pointer" src={star >= 4 ? '/images/icon-star.png' : '/images/icon-star-gray.png'} width={40} height={40} alt={'Star Icon'} onClick={() => rateStar(4)}/>
                                                                        <Image className="cursor-pointer" src={star >= 5 ? '/images/icon-star.png' : '/images/icon-star-gray.png'} width={40} height={40} alt={'Star Icon'} onClick={() => rateStar(5)}/>
                                                                    </div>
                                                                    <Textarea className="mb-4" {...register('comment')} rows={5} placeholder="Write your review here"/>
                                                                    {errors.comment &&
                                                                        <p className="text-sm text-red">{errors.comment.message}</p>}
                                                                    <Button className="w-full h-10 bg-neutral-950 border-0 text-sm font-semibold">Submit</Button>
                                                                </fieldset>
                                                            </form>
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                        </div>
                                    </div>
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
                        <TabsContent value="processing">
                            <ResponsePage src={'/images/image-order.png'} alt={'Order Image'} heading={'No Orders Yet'} description={'Once you place an order, you can see all your purchases right here.'} href={'/catalog/'} linkText={'Start Shopping'}/>
                        </TabsContent>
                        <TabsContent value="delivered">
                            <ResponsePage src={'/images/image-order.png'} alt={'Order Image'} heading={'No Orders Yet'} description={'Once you place an order, you can see all your purchases right here.'} href={'/catalog/'} linkText={'Start Shopping'}/>
                        </TabsContent>
                        <TabsContent value="completed">
                            <ResponsePage src={'/images/image-order.png'} alt={'Order Image'} heading={'No Orders Yet'} description={'Once you place an order, you can see all your purchases right here.'} href={'/catalog/'} linkText={'Start Shopping'}/>
                        </TabsContent>
                        <TabsContent value="cancelled">
                            <ResponsePage src={'/images/image-order.png'} alt={'Order Image'} heading={'No Orders Yet'} description={'Once you place an order, you can see all your purchases right here.'} href={'/catalog/'} linkText={'Start Shopping'}/>
                        </TabsContent>
                    </Tabs>
                </section>
            </main>
            <Footer/>
        </React.Fragment>
    );
};

export default Order;
