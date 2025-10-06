"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MenuMobile from "@/components/MenuMobile";
import ProductCard from "@/components/ProductCard";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useCategories} from "@/hooks/useCategories";
import {useProducts} from "@/hooks/useProducts";
import {toggleFilter} from "@/hooks/useToggle";
import {ProductSort} from "@/types/enums/ProductSort";
import {Product} from "@/types/interfaces/Product";
import {ProductCategory} from "@/types/interfaces/ProductCategory";
import Image from "next/image";
import React, {useState} from "react";
import FilterCategory from "../../components/FilterCategory";
import FilterRating from "../../components/FilterRating";


const Catalog: React.FC = () => {
    const [index, setIndex] = useState<number>(1);
    const [categoryId, setCategoryId] = useState<number>(0);
    const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
    const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
    const [rating, setRating] = useState<number | undefined>(undefined);
    const [sort, setSort] = useState('newest');

    const {data: dataCategories} = useCategories();
    const {data: dataProducts} = useProducts(sort as ProductSort, index, categoryId, minPrice, maxPrice, rating);

    return (
        <React.Fragment>
            <Header/>
            <MenuMobile/>
            <main className="flex-col gap-6 site">
                <h2 className="text-32_ font-bold">Catalog</h2>
                <div className="flex flex-col gap-6 items-start md:flex-row">
                    <section id="filter" className="fixed left-0 top-0 z-60 w-298_ h-[100vh] p-4 bg-contrast-0 overflow-x-hidden overflow-y-auto duration-500 hide-filter md:static md:basis-266_ md:z-10 md:h-auto md:p-0 md:rounded-xl">
                        <div className="flex flex-col gap-6 py-4 border border-neutral-300 rounded-xl">
                            <div className="flex flex-col gap-2.5 px-4">
                                <p className="font-bold uppercase">Filter</p>
                                <p className="font-semibold">Categories</p>
                                <FilterCategory category={{
                                    id: 0,
                                    name: 'All',
                                    slug: ''
                                }} categoryId={categoryId} setCategoryId={setCategoryId}/>
                                {dataCategories?.data.categories.map((category: ProductCategory, index: number) => {
                                    return <FilterCategory key={index} category={category} categoryId={categoryId} setCategoryId={setCategoryId}/>
                                })}
                            </div>
                            <div className="line"></div>
                            <div className="flex flex-col gap-2.5 px-4">
                                <p className="font-semibold">Price</p>
                                <div className="flex gap-2 p-2 border border-neutral-300 rounded-lg">
                                    <p className="flex justify-center items-center h-38_ p-2 bg-neutral-200 rounded font-semibold">Rp</p>
                                    <Input className='h-38_' value={minPrice} placeholder={'Minimum Price'} onBlur={(event) => setMinPrice(Number(event.target.value))}/>
                                </div>
                                <div className="flex gap-2 p-2 border border-neutral-300 rounded-lg">
                                    <p className="flex justify-center items-center h-38_ p-2 bg-neutral-200 rounded font-semibold">Rp</p>
                                    <Input className='h-38_' value={maxPrice} placeholder={'Maximum Price'} onBlur={(event) => setMaxPrice(Number(event.target.value))}/>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="flex flex-col gap-2.5 px-4">
                                <p className="font-semibold">Rating</p>
                                <div className="flex flex-col">
                                    {[5, 4, 3, 2, 1].map((rate) => (
                                        <FilterRating key={rate} rate={rate} rating={rating} setRating={setRating}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div id="filter-toggle" className="invisible fixed top-4 left-305_ w-8 h-8 p-1.5 bg-contrast-0 rounded-full" onClick={() => toggleFilter()}>
                            <Image src={'/images/icon-close.png'} width={32} height={32} alt={'Close Icon'}/>
                        </div>
                    </section>
                    <section className="grow flex flex-col gap-6 w-full md:w-373_">
                        <div className="flex flex-col gap-3 justify-between items-center md:flex-row">
                            <p className="grow">Showing 160 products</p>
                            <div className="flex gap-3 items-center">
                                <p className="hidden font-bold md:block">Sort</p>
                                <div className="basis-1/2 flex gap-3 justify-between items-center h-11 px-3 border border-neutral-300 rounded-xl cursor-pointer md:hidden" onClick={() => toggleFilter()}>
                                    <p>Filter</p>
                                    <Image src={'/images/icon-filter.png'} width={16} height={16} alt={'Filter Icon'}/>
                                </div>
                                <Select defaultValue={sort} onValueChange={(value) => setSort(value)}>
                                    <SelectTrigger className="basis-1/2 !h-11 md:!w-167_">
                                        <SelectValue placeholder="Sorting"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="price">Price</SelectItem>
                                        <SelectItem value="rating">Rating</SelectItem>
                                        <SelectItem value="popular">Popular</SelectItem>
                                        <SelectItem value="newest">Newest</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {dataProducts?.data.products.map((product: Product, index: number) => {
                                return <ProductCard key={index} product={product}/>
                            })}
                        </div>
                        <div className="text-center">
                            <Button className="w-220_ h-12 p-2 bg-contrast-0 border border-neutral-300 rounded-xl font-semibold text-neutral-950 cursor-pointer">Load
                                More</Button>
                        </div>
                    </section>
                </div>
            </main>
            <Footer/>
        </React.Fragment>
    );
};

export default Catalog;
