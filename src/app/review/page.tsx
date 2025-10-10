"use client";

import BuyerSidebar from "@/components/BuyerSidebar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MenuMobile from "@/components/MenuMobile";
import OrderItem from "@/components/OrderItem";
import OrderStore from "@/components/OrderStore";
import Search from "@/components/Search";
import {useMyReviews} from "@/hooks/useMyReviews";
import {BuyerSidebarPage} from "@/types/enums/BuyerSidebarPage";
import Image from "next/image";
import React, {useState} from "react";


const Review: React.FC = () => {
    const [index, setIndex] = useState<number>(1);

    const {data, isLoading, isError, error} = useMyReviews(index);

    return (
        <React.Fragment>
            <Header/>
            <MenuMobile/>
            <main className="gap-6 items-start site">
                <BuyerSidebar page={BuyerSidebarPage.Review}/>
                <section className="grow flex flex-col gap-4">
                    <h2 className="text-32_ font-bold">Review</h2>
                    <Search/>
                    <div className="flex flex-col gap-3 p-5 bg-contrast-0 rounded-xl">
                        <OrderStore order={''}/>
                        <div className="line"></div>
                        <OrderItem item={''}/>
                        <div className="line"></div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-sm font-semibold">My Review</h3>
                            <div className="flex gap-0.5">
                                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                            </div>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Ullamcorper tellus quam
                                congue id. At neque massa ultrices ultrices nulla aliquet.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 p-5 bg-contrast-0 rounded-xl">

                        <div className="line"></div>

                        <div className="line"></div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-sm font-semibold">My Review</h3>
                            <div className="flex gap-0.5">
                                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                            </div>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Ullamcorper tellus quam
                                congue id. At neque massa ultrices ultrices nulla aliquet.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 p-5 bg-contrast-0 rounded-xl">

                        <div className="line"></div>

                        <div className="line"></div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-sm font-semibold">My Review</h3>
                            <div className="flex gap-0.5">
                                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                            </div>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Ullamcorper tellus quam
                                congue id. At neque massa ultrices ultrices nulla aliquet.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </React.Fragment>
    );
};

export default Review;
