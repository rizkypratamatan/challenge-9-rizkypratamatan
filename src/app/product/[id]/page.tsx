"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MenuMobile from "@/components/MenuMobile";
import ProductReview from "@/components/ProductReview";
import QuantityAdjust from "@/components/QuantityAdjust";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {useAddToCart} from "@/hooks/useAddToCart";
import {useProduct} from "@/hooks/useProduct";
import {ProductReview as ProductReviewItem} from "@/types/interfaces/ProductReview";
import Image from "next/image";
import Link from "next/link";
import {useParams} from "next/navigation";
import React, {useEffect, useState} from "react";


type Props = {
    params: Promise<{ id: string }>
};

const Product: React.FC<Props> = ({params}) => {
    const id: number = Number(useParams().id as string);

    const [featuredImage, setFeaturedImage] = useState<string>('');
    const [quantities, setQuantities] = useState<number[]>([1]);
    const [reviewLimit, setReviewLimit] = useState<number>(3);

    const {data, isLoading, isError, error} = useProduct(id);

    useEffect(() => {
        setFeaturedImage(data?.data.images[0]!);
    }, [data]);

    const {onClick} = useAddToCart();

    return (
        <>
            <Header/>
            <MenuMobile/>
            <main className="flex-col gap-12 site">
                <section className="flex flex-col gap-6">
                    <div className="flex gap-2 items-center h-7.5">
                        <Link className="font-semibold" href={'/'}>Home</Link>
                        <Image src={'/images/icon-chevron-right.png'} width={16} height={16} alt={'Chevron Right Icon'}/>
                        <Link className="font-semibold" href={'/'}>Detail</Link>
                        <Image src={'/images/icon-chevron-right.png'} width={16} height={16} alt={'Chevron Right Icon'}/>
                        <p className="truncate">{data?.data.title}</p>
                    </div>
                    <div className="flex flex-col gap-7 md:flex-row">
                        <div className="flex flex-col gap-4 min-w-305_ max-w-402_ mx-auto overflow-x-hidden">
                            {featuredImage &&
                                <Image className="mx-auto rounded-xl" src={featuredImage} width={402} height={402} alt={'Product Thumbnail'}/>}
                            <div className="grid grid-cols-5 gap-2 w-[105%] ml-0.5 mb-0.5">
                                {data?.data.images.map((image: string, index: number) => {
                                    return <Image key={index} className={`${image === featuredImage ? 'outline outline-solid outline-neutral-950' : ''} p-1 rounded-xl cursor-pointer`} src={image} width={74} height={74} alt={'Product Thumbnail'} onClick={() => setFeaturedImage(image)}/>
                                })}
                            </div>
                        </div>
                        <div className="grow flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-semibold">{data?.data.title}</h2>
                                <h3 className="text-32_ font-bold">Rp{data?.data.price.toLocaleString('id-ID')}</h3>
                                <div className="flex gap-0.5 items-center">
                                    <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                                    <p className="text-lg font-semibold">{data?.data.rating}</p>
                                </div>
                            </div>
                            <div className="line"></div>
                            <p className="text-lg font-bold">Deskripsi</p>
                            <div className="product-description">
                                <p>{data?.data.description}</p>
                            </div>
                            <div className="line"></div>
                            <div className="flex justify-between items-center">
                                <div className="grow flex gap-4 items-center">
                                    <Avatar className="w-12 h-12 md:w-64_ md:h-64_">
                                        <AvatarImage src={'/images/avatars/seller/avatar-default.png'} width={64} height={64} alt={'Seller Profile Picture'}/>
                                        <AvatarFallback>{data?.data.shop.name}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col justify-center">
                                        <p className="leading-7.5 font-bold truncate">{data?.data.shop.name}</p>
                                        <p className="leading-7.5 truncate">{data?.data.shop.address}</p>
                                    </div>
                                </div>
                                <Button className="w-96_ h-10 md:w-160_ md:h-12">See Store</Button>
                            </div>
                            <div className="line"></div>
                            <div className="flex gap-4 items-center">
                                <p className="font-semibold">Quantity</p>
                                <QuantityAdjust index={0} quantities={quantities} setQuantities={setQuantities}/>
                            </div>
                            <Button className="w-312_ h-12 bg-neutral-950 font-semibold" onClick={() => onClick({
                                productId: data?.data.id!,
                                qty: quantities[0]
                            })}>
                                <Image src={'/images/icon-add-to-cart.png'} width={20} height={20} alt={'Add to Cart Icon'}/>
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </section>
                <div className="line"></div>
                <section className="flex flex-col gap-4">
                    <h2 className="text-32_ font-bold">Product Reviews</h2>
                    <div className="flex gap-0.5 items-center">
                        <Image src={'/images/icon-star.png'} width={40} height={40} alt={'Star Icon'}/>
                        <p className="text-2xl font-bold">{data?.data.rating}</p>
                        <p className="text-lg font-normal">/5.0</p>
                    </div>
                    {data?.data.reviews.map((review: ProductReviewItem, index: number) => {
                        if(index < reviewLimit) {
                            return <>
                                <ProductReview key={index}/>
                                {index < (data.data.reviewCount - 1) && <div className="line"></div>}
                            </>
                        }
                    })}
                    <div className="text-center">
                        {reviewLimit < data?.data.reviewCount! &&
                            <Button className="w-220_ h-12 p-2 bg-contrast-0 border border-neutral-300 rounded-xl font-semibold text-neutral-950 cursor-pointer">Load
                                More</Button>}
                    </div>
                </section>
                <div className="line"></div>
                <section className="flex flex-col gap-4">
                    <h2 className="text-32_ font-bold">Related Product</h2>
                    <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                        {/*<ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>*/}
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default Product;
