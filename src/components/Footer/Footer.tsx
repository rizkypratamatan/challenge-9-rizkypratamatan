"use client";

import Logo from "@/components/Logo";
import SocialMedia from "@/components/SocialMedia";
import Link from "next/link";
import React from "react";


const Footer: React.FC = () => {
    return (
        <footer className="flex flex-col gap-4 justify-between px-4 py-80_ border-t border-neutral-300 md:flex-row lg:px-10 xl:px-150_">
            <div className="flex flex-col gap-10 max-w-380_">
                <div className="flex flex-col gap-5.5">
                    <Logo dynamic={false}/>
                    <p className="text-sm md:text-base">Explore a realm of style with our fashion e-commerce platform,
                        where shopping is effortless.
                        Experience a smooth journey with an extensive selection of trendy apparel, all delivered
                        directly to your home.</p>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="text-sm font-bold md:text-base">Follow on Social Media</p>
                    <div className="flex gap-3">
                        <SocialMedia src={'/images/icon-facebook.png'} width={10} height={10} alt={'Facebook Icon'}/>
                        <SocialMedia src={'/images/icon-instagram.png'} width={20} height={20} alt={'Instagram Icon'}/>
                        <SocialMedia src={'/images/icon-linkedin.png'} width={16} height={16} alt={'Linkedin Icon'}/>
                        <SocialMedia src={'/images/icon-tiktok.png'} width={17} height={17} alt={'Tiktok Icon'}/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <p className="text-sm font-bold md:text-base">E-Commerce</p>
                <Link className="text-sm md:text-base" href={'#'}>About Us</Link>
                <Link className="text-sm md:text-base" href={'#'}>Terms & Condition</Link>
                <Link className="text-sm md:text-base" href={'#'}>Privacy Policy</Link>
                <Link className="text-sm md:text-base" href={'#'}>Blog</Link>
            </div>
            <div className="flex flex-col gap-5">
                <p className="text-sm font-bold md:text-base">Help</p>
                <Link className="text-sm md:text-base" href={'#'}>How To Transact</Link>
                <Link className="text-sm md:text-base" href={'#'}>Payment Method</Link>
                <Link className="text-sm md:text-base" href={'#'}>How to Register</Link>
            </div>
        </footer>
    );
};

export default Footer;
