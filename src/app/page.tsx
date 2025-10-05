"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MenuMobile from "@/components/MenuMobile";
import ProductCard from "@/components/ProductCard";
import {Button} from "@/components/ui/button";
import {useProducts} from "@/hooks/useProducts";
import {ProductSort} from "@/types/enums/ProductSort";
import {Product} from "@/types/interfaces/Product";
import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";


const Home: React.FC = () => {
    const [index, setIndex] = useState<number>(1);
    const [products, setProducts] = useState<Product[]>([]);

    const {data, isLoading, isError, error} = useProducts(ProductSort.Newest, index);

    useEffect(() => {
        if(data) {
            const currentProducts: Product[] = products;
            currentProducts.concat(data.data.products);
            setProducts(currentProducts);
        }
    }, [data]);

    return (
        <>
            <Header/>
            <MenuMobile/>
            <main className="flex-col gap-10 site">
                <section className="relative h-183_ bg-cream-0 rounded-2xl sm:h-340_">
                    <Image className="absolute w-185_ top-4 sm:top-0.5 sm:w-376_ lg:left-64_ xl:left-150_ 2xl:left-150_" src={'/images/image-hero.png'} width={376} height={376} alt={'Hero Image'}/>
                    <div className="absolute w-150_ top-8 right-2 flex flex-col gap-3 sm:top-2 sm:gap-4 sm:w-[270px] lg:right-101_ lg:top-77_ xl:right-180_ 2xl:right-300_ lg:w-auto">
                        <h2 className="leading-8 text-lg font-bold text-brown-0 sm:leading-68_ sm:text-56_">New
                            Collection</h2>
                        <p className="leading-3.5 text-sm font-semibold text-brown-0 sm:leading-9 sm:text-2xl">Stylish
                            men&#39;s apparel for every
                            occasion</p>
                        <Link className="w-93_ h-7 bg-neutral-950 p-0 rounded-lg leading-7 text-10_ font-semibold text-contrast-0 text-center sm:w-180_ sm:h-12 sm:p-2 sm:leading-8 sm:text-base" href={'#'}>Get
                            Now</Link>
                    </div>
                </section>
                <section className="flex flex-col gap-10">
                    <h2 className="leading-11 text-4xl font-bold">Featured Product</h2>
                    <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                        {data?.data.products.map((product: Product, index: number) => {
                            return <ProductCard key={index} product={product}/>
                        })}
                    </div>
                </section>
                <section className="text-center">
                    <Button className="w-220_ h-12 p-2 bg-contrast-0 border border-neutral-300 rounded-xl font-semibold text-neutral-950 cursor-pointer">Load
                        More</Button>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default Home;
