import Logo from "@/components/Logo";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Login: React.FC = () => {
    return (
        <main className="flex flex-col gap-6 w-451_ mx-auto mt-[20vh] p-6 border border-neutral-200 rounded-2xl shadow-25">
            <Logo/>
            <PageTitle title={'Login'} description={'Access your account and start shopping in seconds'}/>
            <form>
                <fieldset className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <input className="h-56_ px-3 py-2 border border-neutral-300 rounded-lg" type="text" placeholder="Email"/>
                        <div className="relative">
                            <input className="w-full h-56_ px-3 py-2 border border-neutral-300 rounded-lg" type="password" placeholder="Password"/>
                            <Image className="absolute top-18_ right-12_ cursor-pointer" src={'/images/icon-eye.png'} width={20} height={20} alt={'Eye Icon'}/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <button className="h-48_ p-2 bg-neutral-950 rounded-lg text-contrast-0">Login</button>
                        <p className="text-center">
                            Don't have an account?&nbsp;
                            <Link className="font-bold underline" href={'/register/'}>Register</Link>
                        </p>
                    </div>
                </fieldset>
            </form>
        </main>
    );
};

export default Login;
