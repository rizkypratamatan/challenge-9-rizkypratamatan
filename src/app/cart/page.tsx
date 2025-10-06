"use client";

import CartItem from "@/components/CartItem";
import CartSeller from "@/components/CartSeller";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MenuMobile from "@/components/MenuMobile";
import {Checkbox} from "@/components/ui/checkbox";
import {useApp} from "@/providers/ContextProvider";
import {CartItem as CartItemData} from "@/types/interfaces/CartItem";
import {CartItemChecked} from "@/types/interfaces/CartItemChecked";
import {ContextData} from "@/types/interfaces/ContextData";
import Link from "next/link";
import React from "react";


const Cart: React.FC = () => {
    const context: ContextData | undefined = useApp();

    return (
        <React.Fragment>
            <Header/>
            <MenuMobile/>
            <main className="flex-col gap-10 items-start site lg:flex-row">
                <section className="grow flex flex-col gap-6">
                    <h2 className="text-32_ font-bold">Cart</h2>
                    <div className="flex gap-3 items-center">
                        <Checkbox/><p className="leading-7.5 text-sm font-medium md:text-base">Select All</p>
                    </div>
                    {context?.cartItems.map((itemGroup: CartItemChecked, index: number) => {
                        return <div key={index} className="flex flex-col gap-4 p-4 border border-neutral-300 rounded-xl">
                            <CartSeller shop={itemGroup.shop}/>
                            {itemGroup.items.map((item: CartItemData, index1: number) => {
                                return <React.Fragment key={index1}>
                                    <CartItem index={index}/>
                                    {index < (context?.cartItems.length - 1) && <div className="line"></div>}
                                </React.Fragment>
                            })}
                        </div>
                    })}
                </section>
                <section className="flex flex-col gap-6 w-full p-5 rounded-xl shadow-25 md:basis-352_ md:w-auto">
                    <h3 className="text-lg font-bold md:text-xl">Total Shipping</h3>
                    <div className="flex justify-between">
                        <p className="md:text-lg">Total</p>
                        <p className="font-bold md:text-lg">Rp{context?.cartTotal.toLocaleString('id-ID')}</p>
                    </div>
                    <Link className="h-12 p-2 bg-neutral-950 rounded-lg leading-8 font-semibold text-center text-contrast-0" href={'/checkout/'}>Checkout</Link>
                </section>
            </main>
            <Footer/>
        </React.Fragment>
    );
};

export default Cart;
