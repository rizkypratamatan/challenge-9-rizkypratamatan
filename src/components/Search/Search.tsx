import Image from "next/image";
import React from "react";


type Props = {
    grow: boolean;
};

const Search: React.FC<Props> = ({grow}) => {
    return (
        <div className={`${grow ? 'grow' : ''} flex gap-1.5 items-center h-44_ px-4 py-2 bg-contrast-0 border border-neutral-300 rounded-xl`}>
            <Image src={'/images/icon-search.png'} width={20} height={20} alt={'Search Icon'}/>
            <input className="grow" type="text" placeholder="Search"/>
        </div>
    );
};

export default Search;
