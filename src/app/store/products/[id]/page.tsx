"use client";

import ResponsePage from "@/components/ResponsePage";
import Header from "@/components/Store/Header";
import ProductDetailPhoto from "@/components/Store/ProductDetailPhoto";
import Sidebar from "@/components/Store/Sidebar";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import Image from "next/image";
import {useParams} from "next/navigation";
import React from "react";


type Props = {
    params: Promise<{ id: string }>
};

const StoreProductsDetail: React.FC<Props> = ({params}) => {
    const id: number = Number(useParams().id as string);
    console.log(id);

    return (
        <React.Fragment>
            <Sidebar/>
            <Header/>
            <main className="pt-104_ store-content">
                <div className="flex flex-col gap-6 w-760_ mx-auto p-5 bg-contrast-0 border border-neutral-200 rounded-xl shadow-25">
                    <div className="flex gap-3">
                        <Image src={'/images/icon-arrow-narrow-left.png'} width={32} height={32} alt={'Arrow Left Icon'}/>
                        <h2 className="text-2xl font-bold">Add Product</h2>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Input className="h-56_ px-3 py-2 border border-neutral-300 rounded-lg" type="text" placeholder="Product Name"/>
                        <Select>
                            <SelectTrigger className="w-full !h-56_ px-3 py-2">
                                <SelectValue placeholder={'Category'}/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={'Latest'}>Latest</SelectItem>
                            </SelectContent>
                        </Select>
                        <Input className="h-56_ px-3 py-2 border border-neutral-300 rounded-lg" type="text" placeholder="Price"/>
                        <Input className="h-56_ px-3 py-2 border border-neutral-300 rounded-lg" type="text" placeholder="Stock"/>
                        <Textarea className="px-3 py-2 border border-neutral-300 resize-none" rows={5} placeholder="Description"></Textarea>
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold">Photo Product</p>
                            <div className="flex gap-3">
                                <ProductDetailPhoto text={'Photo 1'}/>
                                <ProductDetailPhoto text={'Photo 2'}/>
                                <ProductDetailPhoto text={'Photo 3'}/>
                                <ProductDetailPhoto text={'Photo 4'}/>
                                <ProductDetailPhoto text={'Photo 5'}/>
                            </div>
                        </div>
                    </div>
                    <Button className="h-12 text-sm font-bold">Save</Button>
                </div>
                <ResponsePage src={'/images/image-product-box.png'} alt={'Product Box Image'} heading={'No Product Yet'} description={'Start adding your items to showcase and reach more customers.'} href={'#'} linkText={'Add Product'}/>
            </main>
        </React.Fragment>
    );
};

export default StoreProductsDetail;
