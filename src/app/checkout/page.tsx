import CheckoutItem from "@/components/CheckoutItem";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {Input} from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import Image from "next/image";
import React from "react";


const Checkout: React.FC = () => {
    return (
        <>
            <Header/>
            <main className="flex-col gap-6">
                <h2 className="text-32_ font-bold">Checkout</h2>
                <div className="flex gap-8">
                    <section className="grow flex flex-col gap-6">
                        <div className="flex flex-col gap-4 px-5 py-5 bg-contrast-0 rounded-lg shadow-25">
                            <h3>Shipping Address</h3>
                            <Input className="h-56_ px-3 py-2 border border-neutral-300 rounded-xl" type="text" placeholder="Name"/>
                            <Input className="h-56_ px-3 py-2 border border-neutral-300 rounded-xl" type="text" placeholder="Phone Number"/>
                            <Input className="h-56_ px-3 py-2 border border-neutral-300 rounded-xl" type="text" placeholder="City"/>
                            <Input className="h-56_ px-3 py-2 border border-neutral-300 rounded-xl" type="text" placeholder="Postal Code"/>
                            <Textarea className="h-56_ px-3 py-2 border border-neutral-300 rounded-xl resize-none" rows={5} placeholder="Address"/>
                        </div>
                        <div className="flex flex-col gap-4 px-5 py-5 bg-contrast-0 rounded-lg">
                            <div className="flex gap-1.5 items-center">
                                <Image src={'/images/icon-store.png'} width={20} height={20} alt={'Store Icon'}/>
                                <p className="font-semibold">Toko Abadi Fashion</p>
                            </div>
                            <CheckoutItem/>
                            <CheckoutItem/>
                            <div className="line"></div>
                            <div className="flex flex-col gap-3">
                                <h3 className="text-lg font-bold">Shipping Method</h3>
                                <Select>
                                    <SelectTrigger className="w-full !h-56_">
                                        <SelectValue placeholder={'Select Shipping'}/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value={'Shipping Method'}>Shipping Method</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col gap-4 py-5 bg-contrast-0 rounded-xl shadow-25">
                        <div className="flex flex-col gap-4 px-5">
                            <h3 className="text-lg font-bold">Payment Method</h3>
                            <RadioGroup>
                                <div className="flex gap-2 items-center">
                                    <Image src={'/images/image-bni.png'} width={40} height={40} alt={'BNI Logo'}/>
                                    <Label className="text-base" htmlFor="payment-method-bni">BNI Virtual Account</Label>
                                    <RadioGroupItem value="BNI" id="payment-method-bni"/>
                                </div>
                                <div className="line"></div>
                                <div className="flex gap-2 items-center">
                                    <Image src={'/images/image-bri.png'} width={40} height={40} alt={'BRI Logo'}/>
                                    <Label className="text-base" htmlFor="payment-method-bri">BRI Virtual Account</Label>
                                    <RadioGroupItem value="BRI" id="payment-method-bri"/>
                                </div>
                                <div className="line"></div>
                                <div className="flex gap-2 items-center">
                                    <Image src={'/images/image-bca.png'} width={40} height={40} alt={'BCA Logo'}/>
                                    <Label className="text-base" htmlFor="payment-method-bca">BCA Virtual Account</Label>
                                    <RadioGroupItem value="BCA" id="payment-method-bca"/>
                                </div>
                                <div className="line"></div>
                                <div className="flex gap-2 items-center">
                                    <Image src={'/images/image-mandiri.png'} width={40} height={40} alt={'Mandiri Logo'}/>
                                    <Label className="text-base" htmlFor="payment-method-mandiri">Mandiri Virtual Account</Label>
                                    <RadioGroupItem value="Mandiri" id="payment-method-mandiri"/>
                                </div>
                            </RadioGroup>
                        </div>
                        <div className="line"></div>
                    </section>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default Checkout;
