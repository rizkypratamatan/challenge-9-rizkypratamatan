"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import MenuMobile from "@/components/MenuMobile";
import PageTitle from "@/components/PageTitle";
import ResponsePage from "@/components/ResponsePage";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {useStoreOpen} from "@/hooks/useStoreOpen";
import {StepStatus} from "@/types/StepStatus";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";
import React, {useState} from "react";


const StoreOpen: React.FC = () => {
    const router: AppRouterInstance = useRouter();

    const [status, setStatus] = useState<StepStatus>(StepStatus.Succeeded);

    const {register, handleSubmit, errors, onSubmit} = useStoreOpen();

    return (
        <>
            {status === StepStatus.OnProcess &&
                <main className="flex flex-col gap-6 mx-6 mt-[15vh] p-6 border border-neutral-200 rounded-2xl shadow-25 site sm:max-w-451_ sm:mx-auto">
                    <Logo dynamic={true}/>
                    <PageTitle title={'Open Your Store Today'} description={'Start selling in minutes and reach thousands of customers instantly'}/>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <fieldset className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <p className="font-bold uppercase">Store Profile</p>
                                <Input {...register('name')} className="h-56_ px-3 py-2 border border-neutral-300 rounded-lg" type="text" placeholder="Store Name"/>
                                {errors.name && <p className="text-sm text-red">{errors.name.message}</p>}
                                <Input {...register('domain')} className="h-56_ px-3 py-2 border border-neutral-300 rounded-lg" type="text" placeholder="Store Domain"/>
                                {errors.domain && <p className="text-sm text-red">{errors.domain.message}</p>}
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-bold uppercase">Store Profile</p>
                                <Input {...register('city')} className="h-56_ px-3 py-2 border border-neutral-300 rounded-lg" type="text" placeholder="City"/>
                                {errors.city && <p className="text-sm text-red">{errors.city.message}</p>}
                                <Input {...register('postalCode')} className="h-56_ px-3 py-2 border border-neutral-300 rounded-lg" type="text" placeholder="Postal Code"/>
                                {errors.postalCode && <p className="text-sm text-red">{errors.postalCode.message}</p>}
                                <Textarea {...register('address')} className="px-3 py-2 border border-neutral-300 resize-none" rows={5} placeholder="Detail Address"/>
                                {errors.address && <p className="text-sm text-red">{errors.address.message}</p>}
                            </div>
                            <div className="flex flex-col gap-4">
                                <Button className="h-12 p-2 bg-neutral-950 rounded-lg text-contrast-0">Submit</Button>
                                <div className="text-center">
                                    <p className="font-bold underline cursor-pointer" onClick={() => router.back()}>Back</p>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </main>}
            {status === StepStatus.Succeeded && <>
                <Header/>
                <MenuMobile/>
                <main className="flex-col gap-6 site">
                    <ResponsePage src={'/images/image-store-open-succeeded.png'} alt={'Open Store Succeeded Image'} heading={'Your Store is Ready!'} description={'Store created! Add products and start selling today.'} href={'/store/dashboard/'} linkText={'Go to Dashboard'}/>
                </main>
                <Footer/>
            </>}
            {status === StepStatus.Failed && <>
                <Header/>
                <MenuMobile/>
                <main className="flex-col gap-6 site">
                    <ResponsePage src={'/images/image-store-open-failed.png'} alt={'Open Store Failed Image'} heading={`Couldn't Create Store!`} description={'Something went wrong while creating your store. Please check your details and try again.'} href={'/store/open/'} linkText={'Back to Form'}/>
                </main>
                <Footer/>
            </>}
        </>
    );
};

export default StoreOpen;
