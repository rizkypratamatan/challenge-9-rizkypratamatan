"use client";

import ResponsePage from "@/components/ResponsePage";
import Search from "@/components/Search";
import Header from "@/components/Store/Header";
import ProductItem from "@/components/Store/ProductItem";
import ProductItemMobile from "@/components/Store/ProductItemMobile";
import Sidebar from "@/components/Store/Sidebar";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";
import {useSellerProducts} from "@/hooks/useSellerProducts";
import {useToastSuccess} from "@/hooks/useToast";
import {Product} from "@/types/interfaces/Product";
import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {toast} from "sonner";


const StoreProducts: React.FC = () => {
    const [mobile, setMobile] = useState<boolean>(false);
    const [index, setIndex] = useState<number>(1);

    useEffect(() => {
        if(window.innerWidth < 768) {
            setMobile(true);
        }
        toast('Product has been deleted successfully.', useToastSuccess());
    }, []);
    const {data} = useSellerProducts(index);

    return (
        <React.Fragment>
            <Sidebar/>
            <Header/>
            <main className="pt-64_ store-content">
                <h2 className="px-6 pt-6 text-28_ font-bold">Products</h2>
                <div className="flex flex-col gap-4 p-6">
                    <div className="flex flex-col gap-3 justify-between md:flex-row">
                        <Link className="basis-11 flex gap-1.5 justify-center h-12 items-center bg-neutral-950 rounded-lg text-sm font-bold text-contrast-0 md:basis-180_" href={'/store/products/add/'}>
                            <Image src={'/images/icon-plus-white.png'} width={20} height={20} alt={'Plus Icon'}/>
                            Add Product
                        </Link>
                        <Search className="w-full md:w-254_"/>
                    </div>
                    <div className="flex flex-col gap-3 rounded-xl md:p-4 md:bg-contrast-0 md:border md:border-neutral-200">
                        {mobile ? (
                            (data?.data.products.length ?? 0) > 0 ? (
                                    data?.data.products.map((product: Product, index: number) => (
                                        <ProductItemMobile key={index} product={product}/>
                                    ))) :
                                <ResponsePage src={'/images/image-product-box.png'} alt={'Product Box Image'} heading={'No Product Yet'} description={'Start adding your items to showcase and reach more customers.'} href={'#'} linkText={'Add Product'}/>
                        ) : (
                            (data?.data.products.length ?? 0) > 0 ? <table className="product-list">
                                    <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Product Info</th>
                                        <th>Price</th>
                                        <th>Stock</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {data?.data.products.map((product: Product, index: number) => (
                                        <ProductItem key={index} index={index + 1} product={product}/>
                                    ))}
                                    </tbody>
                                </table> :
                                <ResponsePage src={'/images/image-product-box.png'} alt={'Product Box Image'} heading={'No Product Yet'} description={'Start adding your items to showcase and reach more customers.'} href={'#'} linkText={'Add Product'}/>
                        )}
                        <div className="flex flex-col justify-between items-center px-6 py-1.5 md:flex-row">
                            <p className="text-sm">Showing 1 to 10 of 60 entries</p>
                            <Pagination className="w-auto mx-0">
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious href="#"/>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationEllipsis/>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext href="#"/>
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
};

export default StoreProducts;
