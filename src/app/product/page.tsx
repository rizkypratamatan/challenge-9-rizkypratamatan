import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import ProductReview from "@/components/ProductReview";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Product: React.FC = () => {
    return (
        <>
            <Header/>
            <main className="gap-12">
                <section className="flex flex-col gap-6">
                    <div className="flex gap-2 items-center h-30_">
                        <Link className="font-semibold" href={'/'}>Home</Link>
                        <Image src={'/images/icon-chevron-right.png'} width={16} height={16} alt={'Chevron Right Icon'}/>
                        <Link className="font-semibold" href={'/'}>Detail</Link>
                        <Image src={'/images/icon-chevron-right.png'} width={16} height={16} alt={'Chevron Right Icon'}/>
                        <p>Sneakers Court Minimalis</p>
                    </div>
                    <div className="flex gap-7">
                        <div className="flex flex-col gap-4 overflow-x-hidden">
                            <Image className="rounded-xl" src={'/images/products/image-product.png'} width={402} height={402} alt={'Product Thumbnail'}/>
                            <div className="grid grid-cols-5 gap-2 w-[105%] ml-0.5 mb-0.5">
                                <Image className="p-1 rounded-xl outline outline-1 outline-solid outline-neutral-950" src={'/images/products/image-product.png'} width={74} height={74} alt={'Product Thumbnail'}/>
                                <Image className="p-1 rounded-xl" src={'/images/products/image-product.png'} width={74} height={74} alt={'Product Thumbnail'}/>
                                <Image className="p-1 rounded-xl" src={'/images/products/image-product.png'} width={74} height={74} alt={'Product Thumbnail'}/>
                                <Image className="p-1 rounded-xl" src={'/images/products/image-product.png'} width={74} height={74} alt={'Product Thumbnail'}/>
                                <Image className="p-1 rounded-xl" src={'/images/products/image-product.png'} width={74} height={74} alt={'Product Thumbnail'}/>
                            </div>
                        </div>
                        <div className="grow flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-semibold">Sneakers Court Minimalis</h2>
                                <h3 className="text-32_ font-bold">Rp275.000</h3>
                                <div className="flex gap-0.5 items-center">
                                    <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                                    <p className="text-lg font-semibold">4.9</p>
                                </div>
                            </div>
                            <div className="line"></div>
                            <p className="text-lg font-bold">Deskripsi</p>
                            <div className="product-description">
                                <p>Sneakers Court Minimalis – Ivory Beige<br/>Sepatu sneakers bergaya minimalis dengan
                                    kombinasi warna ivory dan beige yang elegan. Terbuat dari material kulit sintetis
                                    berkualitas dengan sentuhan suede halus di bagian panel samping dan depan.</p>
                                <ul>
                                    <li>Desain: Low-top dengan siluet klasik yang timeless</li>
                                    <li>Material: Kulit sintetis premium + suede sintetis</li>
                                    <li>Sol: Outsole karet anti-slip dengan warna natural gum untuk daya cengkeram yang
                                        baik
                                    </li>
                                    <li>Kenyamanan: Insole empuk dengan bantalan ekstra untuk pemakaian sehari-hari</li>
                                    <li>Warna: Ivory Beige</li>
                                    <li>Gaya: Cocok untuk casual look, street style, maupun semi-formal</li>
                                </ul>
                            </div>
                            <div className="line"></div>
                            <div className="flex justify-between items-center">
                                <div className="grow flex gap-4">
                                    <Avatar className="w-64_ h-64_">
                                        <AvatarImage src={'/images/avatars/seller/avatar-default.png'} width={64} height={64} alt={'Seller Profile Picture'}/>
                                        <AvatarFallback>Toko Barokah Jaya</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col justify-center">
                                        <p className="leading-30_ font-bold">Toko Barokah Jaya</p>
                                        <p className="leading-30_">Jakarta Selatan</p>
                                    </div>
                                </div>
                                <Button className="w-160_ h-48_">See Store</Button>
                            </div>
                            <div className="line"></div>
                            <div className="flex gap-4 items-center">
                                <p className="font-semibold">Quantity</p>
                                <div className="flex gap-2 items-center px-3 py-2 border border-neutral-300 rounded-xl">
                                    <Image src={'/images/icon-minus.png'} width={24} height={24} alt={'Minus Icon'}/>
                                    <Input className="w-10 h-26_ p-0 border-none text-lg font-bold text-center shadow-none" type="text" value="1"/>
                                    <Image src={'/images/icon-plus.png'} width={24} height={24} alt={'Plus Icon'}/>
                                </div>
                            </div>
                            <Button className="w-312_ h-48_ font-semibold">
                                <Image src={'/images/icon-add-to-cart.png'} width={20} height={20} alt={'Add to Cart Icon'}/>
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </section>
                <div className="line"></div>
                <section className="flex flex-col gap-4">
                    <h2 className="text-32_ font-bold">Product Reviews</h2>
                    <div className="flex gap-0.5">
                        <Image src={'/images/icon-star.png'} width={40} height={40} alt={'Star Icon'}/>
                        <p className="text-2xl font-bold">4.9<span className="text-lg font-normal">/5.0</span></p>
                    </div>
                    <ProductReview/>
                    <div className="line"></div>
                    <ProductReview/>
                    <div className="line"></div>
                    <ProductReview/>
                    <div className="text-center">
                        <Button className="w-220_ h-48_ p-2 bg-contrast-0 border border-neutral-300 rounded-xl font-semibold text-neutral-950 cursor-pointer">Load
                            More</Button>
                    </div>
                </section>
                <div className="line"></div>
                <section className="flex flex-col gap-4">
                    <h2 className="text-32_ font-bold">Related Product</h2>
                    <div className="grid grid-cols-4 gap-5">
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default Product;
