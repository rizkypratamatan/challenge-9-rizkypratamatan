import Logo from "@/components/Logo";
import PageTitle from "@/components/PageTitle";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Register: React.FC = () => {
    return (
        <main className="flex flex-col gap-6 w-451_ mx-auto mt-[15vh] p-6 border border-neutral-200 rounded-2xl shadow-25 site">
            <Logo/>
            <PageTitle title={'Register'} description={'Just a few steps away from your next favorite purchase'}/>
            <form>
                <fieldset className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <Input className="h-56_ px-3 py-2 border border-neutral-300 rounded-lg" type="text" placeholder="Name"/>
                        <Input className="h-56_ px-3 py-2 border border-neutral-300 rounded-lg" type="text" placeholder="Phone Number"/>
                        <Input className="h-56_ px-3 py-2 border border-neutral-300 rounded-lg" type="text" placeholder="Email"/>
                        <div className="relative">
                            <Input className="w-full h-56_ px-3 py-2 border border-neutral-300 rounded-lg" type="password" placeholder="Password"/>
                            <Image className="absolute top-18_ right-12_ cursor-pointer" src={'/images/icon-eye.png'} width={20} height={20} alt={'Eye Icon'}/>
                        </div>
                        <div className="relative">
                            <Input className="w-full h-56_ px-3 py-2 border border-neutral-300 rounded-lg" type="password" placeholder="Confirm Password"/>
                            <Image className="absolute top-18_ right-12_ cursor-pointer" src={'/images/icon-eye.png'} width={20} height={20} alt={'Eye Icon'}/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Button className="h-48_ p-2 bg-neutral-950 rounded-lg text-contrast-0">Login</Button>
                        <p className="text-center">
                            Already have an account?&nbsp;
                            <Link className="font-bold underline" href={'/login/'}>Log In</Link>
                        </p>
                    </div>
                </fieldset>
            </form>
        </main>
    );
};

export default Register;
