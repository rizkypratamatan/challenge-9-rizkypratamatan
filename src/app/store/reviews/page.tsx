"use client";

import Search from "@/components/Search";
import Header from "@/components/Store/Header";
import ReviewItem from "@/components/Store/ReviewItem/ReviewItem";
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
import Image from "next/image";
import React, {useEffect, useState} from "react";


const StoreReviews: React.FC = () => {
    const [mobile, setMobile] = useState<boolean>(false);

    useEffect(() => {
        if(window.innerWidth < 768) {
            setMobile(true);
        }
    }, []);

    return (
        <React.Fragment>
            <Sidebar/>
            <Header/>
            <main className="pt-64_ store-content">
                <h2 className="px-6 pt-6 text-28_ font-bold">Reviews</h2>
                <div className="flex flex-col gap-4 p-6">
                    <div className="flex justify-between">
                        <div className="hidden gap-0.5 items-center md:flex">
                            <Image src={'/images/icon-star.png'} width={40} height={40} alt={'Star Icon'}/>
                            <p className="text-2xl font-bold">4.9<span className="text-lg font-normal">/5.0</span></p>
                        </div>
                        <Search className="w-full md:w-254_"/>
                    </div>
                    <div className="flex flex-col gap-3 p-4 bg-contrast-0 border border-neutral-200 rounded-xl">
                        {mobile ? (<>
                            <div className="flex flex-col gap-3 p-3 bg-contrast-0 border border-neutral-200 rounded-xl shadow-25">
                                <div className="flex flex-col gap-3">
                                    <div className="flex gap-2.5">
                                        <Image className="rounded-sm" src={'/images/products/image-product.png'} width={48} height={48} alt={'Product Image'}/>
                                        <div className="flex flex-col">
                                            <p className="text-sm font-semibold">Sneakers Court Minimalis</p>
                                            <p className="text-sm text-neutral-600">Shoes</p>
                                        </div>
                                    </div>
                                    <div className="line-horizontal"></div>
                                    <div className="flex gap-9.5 items-center">
                                        <div className="flex flex-col">
                                            <p className="text-sm font-semibold">Rating</p>
                                            <div className="flex gap-0.5 items-center">
                                                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                                                <p className="text-sm font-semibold">4.9</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-sm font-semibold">Total Review</p>
                                            <p className="text-sm">100</p>
                                        </div>
                                    </div>
                                    <div className="line-horizontal"></div>
                                    <Button className="bg-contrast-0 border border-neutral-300 text-neutral-950">See All
                                        Review</Button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 p-3 bg-contrast-0 border border-neutral-200 rounded-xl shadow-25">
                                <div className="flex flex-col gap-3">
                                    <div className="flex gap-2.5">
                                        <Image className="rounded-sm" src={'/images/products/image-product.png'} width={48} height={48} alt={'Product Image'}/>
                                        <div className="flex flex-col">
                                            <p className="text-sm font-semibold">Sneakers Court Minimalis</p>
                                            <p className="text-sm text-neutral-600">Shoes</p>
                                        </div>
                                    </div>
                                    <div className="line-horizontal"></div>
                                    <div className="flex gap-9.5 items-center">
                                        <div className="flex flex-col">
                                            <p className="text-sm font-semibold">Rating</p>
                                            <div className="flex gap-0.5 items-center">
                                                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                                                <p className="text-sm font-semibold">4.9</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-sm font-semibold">Total Review</p>
                                            <p className="text-sm">100</p>
                                        </div>
                                    </div>
                                    <div className="line-horizontal"></div>
                                    <Button className="bg-contrast-0 border border-neutral-300 text-neutral-950">See All
                                        Review</Button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 p-3 bg-contrast-0 border border-neutral-200 rounded-xl shadow-25">
                                <div className="flex flex-col gap-3">
                                    <div className="flex gap-2.5">
                                        <Image className="rounded-sm" src={'/images/products/image-product.png'} width={48} height={48} alt={'Product Image'}/>
                                        <div className="flex flex-col">
                                            <p className="text-sm font-semibold">Sneakers Court Minimalis</p>
                                            <p className="text-sm text-neutral-600">Shoes</p>
                                        </div>
                                    </div>
                                    <div className="line-horizontal"></div>
                                    <div className="flex gap-9.5 items-center">
                                        <div className="flex flex-col">
                                            <p className="text-sm font-semibold">Rating</p>
                                            <div className="flex gap-0.5 items-center">
                                                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                                                <p className="text-sm font-semibold">4.9</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-sm font-semibold">Total Review</p>
                                            <p className="text-sm">100</p>
                                        </div>
                                    </div>
                                    <div className="line-horizontal"></div>
                                    <Button className="bg-contrast-0 border border-neutral-300 text-neutral-950">See All
                                        Review</Button>
                                </div>
                            </div>
                        </>) : (<table className="product-list">
                            <thead>
                            <tr>
                                <th>No</th>
                                <th>Product Name</th>
                                <th>Rating</th>
                                <th>Total Review</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <ReviewItem index={1}/>
                            <ReviewItem index={2}/>
                            <ReviewItem index={3}/>
                            <ReviewItem index={4}/>
                            <ReviewItem index={5}/>
                            </tbody>
                        </table>)}
                        <div className="flex flex-col justify-between items-center px-6 py-1.5 md:flex-row">
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
                </div>
            </main>
        </React.Fragment>
    );
};

export default StoreReviews;
