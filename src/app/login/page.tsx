"use client";

import Logo from "@/components/Logo";
import PageTitle from "@/components/PageTitle";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useLogin} from "@/hooks/useLogin";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Login: React.FC = () => {
    const {register, handleSubmit, errors, onSubmit} = useLogin();

    return (
        <main className="flex flex-col gap-6 mx-6 mt-[20vh] p-6 border border-neutral-200 rounded-2xl shadow-25 site sm:max-w-451_ sm:mx-auto">
            <Logo/>
            <PageTitle title={'Login'} description={'Access your account and start shopping in seconds'}/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <Input {...register('email')} className="h-56_ px-3 py-2 border border-neutral-300 rounded-lg" type="text" placeholder="Email"/>
                        {errors.email && <p className="text-sm text-red">{errors.email.message}</p>}
                        <div className="relative">
                            <Input {...register('password')} className="w-full h-56_ px-3 py-2 border border-neutral-300 rounded-lg" type="password" placeholder="Password"/>
                            <Image className="absolute top-18_ right-12_ cursor-pointer" src={'/images/icon-eye.png'} width={20} height={20} alt={'Eye Icon'}/>
                        </div>
                        {errors.password && <p className="text-sm text-red">{errors.password.message}</p>}
                    </div>
                    <div className="flex flex-col gap-4">
                        <Button className="h-12 p-2 bg-neutral-950 rounded-lg text-contrast-0">Login</Button>
                        <p className="text-center">
                            Don&#39;t have an account?&nbsp;
                            <Link className="font-bold underline" href={'/register/'}>Register</Link>
                        </p>
                    </div>
                </fieldset>
            </form>
        </main>
    );
};

export default Login;
