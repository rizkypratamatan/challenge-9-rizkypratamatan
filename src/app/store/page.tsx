import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MenuMobile from "@/components/MenuMobile";
import ProductCard from "@/components/ProductCard";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import React from "react";


const Store: React.FC = () => {
    return (
        <>
            <Header/>
            <MenuMobile/>
            <main className="flex flex-col gap-8 site">
                <section className="flex gap-6 justify-between items-center p-5 bg-contrast-0 border border-neutral-300 rounded-xl">
                    <div className="flex gap-4 items-center truncate">
                        <Image className="w-12 h-12 md:w-64_ md:h-64_" src={'/images/image-store.png'} width={64} height={64} alt={'Store Thumbnail'}/>
                        <div className="flex flex-col justify-center">
                            <p className="leading-7 text-sm font-bold truncate md:text-base md:leading-7.5">Toko Barokah
                                Jaya</p>
                            <p className="leading-7 text-sm text-neutral-700 truncate md:leading-7.5 md:text-base">Jakarta
                                Selatan</p>
                        </div>
                    </div>
                    <div className="flex flex-col truncate">
                        <div className="flex gap-0.5 items-center">
                            <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                            <p className="text-xl font-bold">4.9</p>
                        </div>
                        <p className="text-xs text-neutral-700 truncate md:text-base">Reviews dan Rating</p>
                    </div>
                </section>
                <section className="flex flex-col gap-5">
                    <h2 className="leading-11 text-4xl font-bold">Product</h2>
                    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        <ProductCard/>
                        <ProductCard/>
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
            </main>
            <Footer/>
        </>
    );
};

export default Store;
