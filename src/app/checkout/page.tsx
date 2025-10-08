"use client";

import CheckoutItem from "@/components/CheckoutItem";
import CheckoutPaymentSummary from "@/components/CheckoutPaymentSummary";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MenuMobile from "@/components/MenuMobile";
import ResponsePage from "@/components/ResponsePage";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {useCheckout} from "@/hooks/useCheckout";
import {getSelectedCart} from "@/hooks/useSelectedCart";
import {StepStatus} from "@/types/enums/StepStatus";
import {CartItemChecked, CartItemCheckedItem} from "@/types/interfaces/CartItemChecked";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {Controller} from "react-hook-form";


const Checkout: React.FC = () => {
    const [status, setStatus] = useState<StepStatus>(StepStatus.OnProcess);
    const [items, setItems] = useState<CartItemChecked[]>([]);

    useEffect(() => {
        const cart: CartItemChecked[] | null = getSelectedCart();

        if(cart) {
            setItems(cart);
        }
    }, []);

    const {register, control, handleSubmit, errors, onSubmit} = useCheckout(setStatus);

    return (
        <React.Fragment>
            <Header/>
            <MenuMobile/>
            <main className="flex-col gap-6 site">
                {status === StepStatus.OnProcess && <React.Fragment>
                    <h2 className="text-32_ font-bold">Checkout</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <fieldset className="flex flex-col gap-8 items-start md:flex-row">
                            <section className="grow flex flex-col gap-6">
                                <div className="flex flex-col gap-4 px-5 py-5 bg-contrast-0 rounded-lg shadow-25">
                                    <h3>Shipping Address</h3>
                                    <Input {...register('address.name')} className="h-56_ px-3 py-2 border border-neutral-300 rounded-xl" type="text" placeholder="Name"/>
                                    {errors.address?.name &&
                                        <p className="text-sm text-red">{errors.address.name.message}</p>}
                                    <Input {...register('address.phone')} className="h-56_ px-3 py-2 border border-neutral-300 rounded-xl" type="text" placeholder="Phone Number"/>
                                    {errors.address?.phone &&
                                        <p className="text-sm text-red">{errors.address.phone.message}</p>}
                                    <Input {...register('address.city')} className="h-56_ px-3 py-2 border border-neutral-300 rounded-xl" type="text" placeholder="City"/>
                                    {errors.address?.city &&
                                        <p className="text-sm text-red">{errors.address.city.message}</p>}
                                    <Input {...register('address.postalCode')} className="h-56_ px-3 py-2 border border-neutral-300 rounded-xl" type="text" placeholder="Postal Code"/>
                                    {errors.address?.postalCode &&
                                        <p className="text-sm text-red">{errors.address.postalCode.message}</p>}
                                    <Textarea {...register('address.address')} className="h-56_ px-3 py-2 border border-neutral-300 rounded-xl resize-none" rows={5} placeholder="Address"/>
                                    {errors.address?.address &&
                                        <p className="text-sm text-red">{errors.address.address.message}</p>}
                                </div>
                                <div className="flex flex-col gap-4 px-5 py-5 bg-contrast-0 rounded-lg">
                                    {items.map((group: CartItemChecked, index: number) => {
                                        return (
                                            group.items.filter((item) => item.checked).length > 0 &&
                                            <React.Fragment key={index}>
                                                <div className="flex gap-1.5 items-center">
                                                    <Image src={'/images/icon-store.png'} width={20} height={20} alt={'Store Icon'}/>
                                                    <p className="font-semibold">{group.shop.name}</p>
                                                </div>
                                                {group.items.map((item: CartItemCheckedItem, index1: number) => (
                                                    item.checked && <CheckoutItem key={index1} item={item}/>
                                                ))}
                                            </React.Fragment>
                                        )
                                    })}
                                    <div className="line"></div>
                                    <div className="flex flex-col gap-3">
                                        <h3 className="font-bold md:text-lg">Shipping Method</h3>
                                        <Controller name="shippingMethod" control={control} render={({field}) => (
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <SelectTrigger className="w-full !h-56_">
                                                    <SelectValue placeholder={'Select Shipping'}/>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value={'JNE REG'}>JNE REG</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        )}/>
                                        {errors.shippingMethod &&
                                            <p className="text-sm text-red">{errors.shippingMethod.message}</p>}
                                    </div>
                                </div>
                            </section>
                            <section className="basis-389_ flex flex-col gap-4 w-full py-5 bg-contrast-0 rounded-xl shadow-25 md:w-auto">
                                <div className="flex flex-col gap-4 px-5">
                                    <h3 className="font-bold md:text-lg">Payment Method</h3>
                                    <RadioGroup>
                                        <div className="flex gap-2 items-center">
                                            <Image src={'/images/image-bni.png'} width={40} height={40} alt={'BNI Logo'}/>
                                            <Label className="grow text-sm md:text-base" htmlFor="payment-method-bni">BNI
                                                Virtual
                                                Account</Label>
                                            <RadioGroupItem value="BNI" id="payment-method-bni"/>
                                        </div>
                                        <div className="line"></div>
                                        <div className="flex gap-2 items-center">
                                            <Image src={'/images/image-bri.png'} width={40} height={40} alt={'BRI Logo'}/>
                                            <Label className="grow text-sm md:text-base" htmlFor="payment-method-bri">BRI
                                                Virtual
                                                Account</Label>
                                            <RadioGroupItem value="BRI" id="payment-method-bri"/>
                                        </div>
                                        <div className="line"></div>
                                        <div className="flex gap-2 items-center">
                                            <Image src={'/images/image-bca.png'} width={40} height={40} alt={'BCA Logo'}/>
                                            <Label className="grow text-sm md:text-base" htmlFor="payment-method-bca">BCA
                                                Virtual
                                                Account</Label>
                                            <RadioGroupItem value="BCA" id="payment-method-bca"/>
                                        </div>
                                        <div className="line"></div>
                                        <div className="flex gap-2 items-center">
                                            <Image src={'/images/image-mandiri.png'} width={40} height={40} alt={'Mandiri Logo'}/>
                                            <Label className="grow text-sm md:text-base" htmlFor="payment-method-mandiri">Mandiri
                                                Virtual
                                                Account</Label>
                                            <RadioGroupItem value="Mandiri" id="payment-method-mandiri"/>
                                        </div>
                                    </RadioGroup>
                                </div>
                                <div className="line"></div>
                                <div className="flex flex-col gap-3 px-5">
                                    <h3 className="font-bold md:text-lg">Payment Summary</h3>
                                    <CheckoutPaymentSummary title={'Total Price of Goods'} price={'Rp1.100.000'} total={false}/>
                                    <CheckoutPaymentSummary title={'Shipping Cost'} price={'Rp10.000'} total={false}/>
                                    <CheckoutPaymentSummary title={'Total'} price={'Rp1.110.000'} total={true}/>
                                    <Button className="h-12 font-semibold">Pay Now</Button>
                                </div>
                            </section>
                        </fieldset>
                    </form>
                </React.Fragment>}
                {status === StepStatus.Succeeded &&
                    <ResponsePage src={'/images/image-checkout-succeeded.png'} alt={'Checkout Succeeded Image'} heading={'Order Placed Successfully!'} description={'We’ve received your order and will notify you once it’s shipped.'} href={'/order/'} linkText={'Go to My Orders'}/>}
                {status === StepStatus.Failed &&
                    <ResponsePage src={'/images/image-checkout-failed.png'} alt={'Checkout Failed Image'} heading={'Oops, something went wrong'} description={'Something went wrong during checkout. Please review your details and retry.'} href={'/'} linkText={'Back to Home'}/>}
            </main>
            <Footer/>
        </React.Fragment>
    );
};

export default Checkout;
