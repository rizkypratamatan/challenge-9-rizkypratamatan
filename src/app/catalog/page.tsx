import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import React from "react";
import FilterCategory from "../../components/FilterCategory";
import FilterRating from "../../components/FilterRating";


const Catalog: React.FC = () => {
    return (
        <>
            <Header/>
            <main className="flex-col gap-6">
                <h2 className="text-32_ font-bold">Catalog</h2>
                <div className="flex gap-6 items-start">
                    <section className="basis-266_ flex flex-col gap-6 py-4 border border-neutral-300 rounded-xl">
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
                    </section>
                    <section className="grow flex flex-col gap-6">
                        <div className="flex justify-between">
                            <p className="grow">Showing 160 products</p>
                            <div className="flex gap-3 items-center">
                                <p className="font-bold">Sort</p>
                                <Select>
                                    <SelectTrigger className="!w-167_">
                                        <SelectValue placeholder={'Sorting'}/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value={'Latest'}>Latest</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-5">
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
                            <Button className="w-220_ h-48_ p-2 bg-contrast-0 border border-neutral-300 rounded-xl font-semibold text-neutral-950 cursor-pointer">Load
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
