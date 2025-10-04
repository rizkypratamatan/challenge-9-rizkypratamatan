"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MenuMobile from "@/components/MenuMobile";
import ProductCard from "@/components/ProductCard";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {toggleFilter} from "@/hooks/useToggle";
import Image from "next/image";
import React from "react";
import FilterCategory from "../../components/FilterCategory";
import FilterRating from "../../components/FilterRating";


const Catalog: React.FC = () => {
    return (
        <>
            <Header/>
            <MenuMobile/>
            <main className="flex-col gap-6 site">
                <h2 className="text-32_ font-bold">Catalog</h2>
                <div className="flex flex-col gap-6 items-start md:flex-row">
                    <section id="filter" className="fixed left-0 top-0 z-60 w-298_ h-[100vh] p-4 bg-contrast-0 overflow-y-auto duration-500 hide-filter md:static md:basis-266_ md:p-0 md:rounded-xl">
                        <div className="flex flex-col gap-6 py-4 border border-neutral-300 rounded-xl">
                            <div className="flex flex-col gap-2.5 px-4">
                                <p className="font-bold uppercase">Filter</p>
                                <p className="font-semibold">Categories</p>
                                <FilterCategory text={'All'}/>
                                <FilterCategory text={'Shoes'}/>
                                <FilterCategory text={'Clothes'}/>
                                <FilterCategory text={'Accessories'}/>
                            </div>
                            <div className="line"></div>
                            <div className="flex flex-col gap-2.5 px-4">
                                <p className="font-semibold">Price</p>
                                <div className="flex gap-2 p-2 border border-neutral-300 rounded-lg">
                                    <p className="flex justify-center items-center h-38_ p-2 bg-neutral-200 rounded font-semibold">Rp</p>
                                    <Input className='h-38_' placeholder={'Minimum Price'}/>
                                </div>
                                <div className="flex gap-2 p-2 border border-neutral-300 rounded-lg">
                                    <p className="flex justify-center items-center h-38_ p-2 bg-neutral-200 rounded font-semibold">Rp</p>
                                    <Input className='h-38_' placeholder={'Maximum Price'}/>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="flex flex-col gap-2.5 px-4">
                                <p className="font-semibold">Rating</p>
                                <div className="flex flex-col">
                                    <FilterRating rate={5}/>
                                    <FilterRating rate={4}/>
                                    <FilterRating rate={3}/>
                                    <FilterRating rate={2}/>
                                    <FilterRating rate={1}/>
                                </div>
                            </div>
                        </div>
                        <div id="filter-toggle" className="invisible fixed top-4 left-305_ w-8 h-8 p-1.5 bg-contrast-0 rounded-full" onClick={() => toggleFilter()}>
                            <Image src={'/images/icon-close.png'} width={32} height={32} alt={'Close Icon'}/>
                        </div>
                    </section>
                    <section className="grow flex flex-col gap-6 w-full md:w-auto">
                        <div className="flex flex-col gap-3 justify-between md:flex-row">
                            <p className="grow">Showing 160 products</p>
                            <div className="flex gap-3 items-center">
                                <p className="hidden font-bold md:block">Sort</p>
                                <div className="basis-1/2 flex gap-3 justify-between items-center h-11 px-3 border border-neutral-300 rounded-xl cursor-pointer md:hidden" onClick={() => toggleFilter()}>
                                    <p>Filter</p>
                                    <Image src={'/images/icon-filter.png'} width={16} height={16} alt={'Filter Icon'}/>
                                </div>
                                <Select>
                                    <SelectTrigger className="basis-1/2 !h-11 md:!w-167_">
                                        <SelectValue placeholder={'Sorting'}/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value={'Latest'}>Latest</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                        </div>
                        <div className="text-center">
                            <Button className="w-220_ h-12 p-2 bg-contrast-0 border border-neutral-300 rounded-xl font-semibold text-neutral-950 cursor-pointer">Load
                                More</Button>
                        </div>
                    </section>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default Catalog;
