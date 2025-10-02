import CartItem from "@/components/CartItem";
import CartSeller from "@/components/CartSeller";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import React from "react";


const Cart: React.FC = () => {
    return (
        <>
            <Header/>
            <main className="gap-10 items-start">
                <section className="grow flex flex-col gap-6">
                    <h2 className="text-32_ font-bold">Cart</h2>
                    <div className="flex gap-3 items-center">
                        <Checkbox/><p className="leading-30_ font-medium">Select All</p>
                    </div>
                    <div className="flex flex-col gap-4 p-4 border border-neutral-300 rounded-xl">
                        <CartSeller/>
                        <CartItem/>
                        <div className="line"></div>
                        <CartItem/>
                    </div>
                    <div className="flex flex-col gap-4 p-4 border border-neutral-300 rounded-xl">
                        <CartSeller/>
                        <CartItem/>
                        <div className="line"></div>
                        <CartItem/>

                    </div>
                    <div className="flex flex-col gap-4 p-4 border border-neutral-300 rounded-xl">
                        <CartSeller/>
                        <CartItem/>
                    </div>
                </section>
                <section className="basis-352_ flex flex-col gap-6 p-5 rounded-xl shadow-25">
                    <h3 className="text-xl font-bold">Total Shipping</h3>
                    <div className="flex justify-between">
                        <p className="text-lg">Total</p>
                        <p className="text-lg font-bold">Rp275.000</p>
                    </div>
                    <Button className="h-48_ font-semibold">Checkout</Button>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default Cart;
