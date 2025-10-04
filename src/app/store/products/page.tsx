import Search from "@/components/Search";
import Header from "@/components/Store/Header";
import ProductItem from "@/components/Store/ProductItem";
import Sidebar from "@/components/Store/Sidebar";
import {Button} from "@/components/ui/button";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";
import Image from "next/image";
import React from "react";


const StoreProducts: React.FC = () => {
    return (
        <>
            <Sidebar/>
            <Header/>
            <main className="pt-64_ store-content">
                <h2 className="px-6 pt-6 text-28_ font-bold">Products</h2>
                <div className="flex flex-col gap-4 p-6">
                    <div className="flex justify-between">
                        <Button className="h-12">
                            <Image src={'/images/icon-plus-white.png'} width={20} height={20} alt={'Plus Icon'}/>
                            Add Product
                        </Button>
                        <Search className="w-254_"/>
                    </div>
                    <div className="flex flex-col p-4 bg-contrast-0 border border-neutral-200 rounded-xl">
                        <table className="product-list">
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
                            <ProductItem index={1}/>
                            <ProductItem index={2}/>
                            <ProductItem index={3}/>
                            <ProductItem index={4}/>
                            <ProductItem index={5}/>
                            </tbody>
                        </table>
                        <div className="flex justify-between items-center px-6 py-1.5">
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
        </>
    );
};

export default StoreProducts;
