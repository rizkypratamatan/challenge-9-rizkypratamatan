"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import PageTitle from "@/components/PageTitle";
import ResponsePage from "@/components/ResponsePage";
import {Textarea} from "@/components/ui/textarea";
import {StepStatus} from "@/types/StepStatus";
import Link from "next/link";
import React, {useState} from "react";


const StoreOpen: React.FC = () => {
    const [status, setStatus] = useState<StepStatus>(StepStatus.Failed);

    return (
        <>
            {status === StepStatus.OnProcess &&
                <main className="flex flex-col gap-6 w-451_ mx-auto mt-[15vh] p-6 border border-neutral-200 rounded-2xl shadow-25 site">
                    <Logo/>
                    <PageTitle title={'Open Your Store Today'} description={'Start selling in minutes and reach thousands of customers instantly'}/>
                    <form>
                        <fieldset className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <p className="font-bold uppercase">Store Profile</p>
                                <input className="h-56_ px-3 py-2 border border-neutral-300 rounded-lg" type="text" placeholder="Store Name"/>
                                <input className="h-56_ px-3 py-2 border border-neutral-300 rounded-lg" type="text" placeholder="Store Domain"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-bold uppercase">Store Profile</p>
                                <input className="h-56_ px-3 py-2 border border-neutral-300 rounded-lg" type="text" placeholder="City"/>
                                <input className="h-56_ px-3 py-2 border border-neutral-300 rounded-lg" type="text" placeholder="Postal Code"/>
                                <Textarea className="px-3 py-2 border border-neutral-300 resize-none" rows={5} placeholder="Detail Address"/>
                            </div>
                            <div className="flex flex-col gap-4">
                                <button className="h-48_ p-2 bg-neutral-950 rounded-lg text-contrast-0">Submit</button>
                                <p className="text-center">
                                    <Link className="font-bold underline" href={'#'}>Back</Link>
                                </p>
                            </div>
                        </fieldset>
                    </form>
                </main>}
            {status === StepStatus.Succeeded && <>
                <Header/>
                <main className="flex-col gap-6 site">
                    <ResponsePage src={'/images/image-store-open-succeeded.png'} alt={'Open Store Succeeded Image'} heading={'Your Store is Ready!'} description={'Store created! Add products and start selling today.'} href={'#'} linkText={'Go to Dashboard'}/>
                </main>
                <Footer/>
            </>}
            {status === StepStatus.Failed && <>
                <Header/>
                <main className="flex-col gap-6 site">
                    <ResponsePage src={'/images/image-store-open-failed.png'} alt={'Open Store Failed Image'} heading={`Couldn't Create Store!`} description={'Something went wrong while creating your store. Please check your details and try again.'} href={'#'} linkText={'Back to Form'}/>
                </main>
                <Footer/>
            </>}
        </>
    );
};

export default StoreOpen;
