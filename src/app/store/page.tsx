import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import React from "react";


const Store: React.FC = () => {
    return (
        <>
            <Header/>
            <main className="flex flex-col gap-8 site">
                <section className="flex justify-between items-center p-5 bg-contrast-0 border border-neutral-300 rounded-xl">
                    <div className="flex gap-4">
                        <Image src={'/images/image-store.png'} width={64} height={64} alt={'Store Thumbnail'}/>
                        <div className="flex flex-col justify-center">
                            <p className="leading-30_ font-bold">Toko Barokah Jaya</p>
                            <p className="leading-30_ text-neutral-700">Jakarta Selatan</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex gap-0.5 items-center">
                            <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                            <p className="text-xl font-bold">4.9</p>
                        </div>
                        <p className="text-neutral-700">Reviews dan Rating</p>
                    </div>
                </section>
                <section className="flex flex-col gap-5">
                    <h2 className="leading-11 text-4xl font-bold">Product</h2>
                    <div className="grid grid-cols-5 gap-5">
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
                        <Button className="w-220_ h-48_ p-2 bg-contrast-0 border border-neutral-300 rounded-xl font-semibold text-neutral-950 cursor-pointer">Load
                            More</Button>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default Store;
