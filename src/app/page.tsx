import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Home: React.FC = () => {
    return (
        <>
            <Header/>
            <main className="gap-10">
                <section className="relative h-340_ bg-cream-0 rounded-2xl">
                    <Image className="absolute left-150_" src={'/images/image-hero.png'} width={376} height={376} alt={'Hero Image'}/>
                    <div className="absolute top-77_ right-300_ flex flex-col gap-4">
                        <h2 className="leading-68_ text-56_ font-bold text-brown-0">New Collection</h2>
                        <p className="leading-9 text-2xl font-semibold text-brown-0">Stylish men's apparel for every
                            occasion</p>
                        <Link className="w-180_ h-48_ bg-neutral-950 p-2 rounded-lg leading-8 font-semibold text-contrast-0 text-center" href={'#'}>Get
                            Now</Link>
                    </div>
                </section>
                <section className="flex flex-col gap-10">
                    <h2 className="leading-11 text-4xl font-bold">Featured Product</h2>
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
                </section>
                <section className="text-center">
                    <Button className="w-220_ h-48_ p-2 bg-contrast-0 border border-neutral-300 rounded-xl font-semibold text-neutral-950 cursor-pointer">Load
                        More</Button>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default Home;
