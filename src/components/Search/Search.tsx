"use client";

import Image from "next/image";
import React from "react";


type Props = {
    className?: string;
};

const Search: React.FC<Props> = ({className}) => {
    return (
        <div className={`${className} flex gap-1.5 items-center h-10 px-4 py-2 bg-contrast-0 border border-neutral-300 rounded-xl md:h-44_`}>
            <Image className="w-5 h-5" src={'/images/icon-search.png'} width={20} height={20} alt={'Search Icon'}/>
            <input className="grow w-101_" type="text" placeholder="Search"/>
        </div>
    );
};

export default Search;
