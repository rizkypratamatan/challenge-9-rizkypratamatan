import Image from "next/image";
import React from "react";


type Props = {
    src: string;
    alt: string;
    title: string;
    value: string;
};

const DashboardItem: React.FC<Props> = ({src, alt, title, value}) => {
    return (
        <div className="flex flex-col gap-3 p-3 bg-contrast-0 border border-neutral-200 rounded-md">
            <Image src={src} width={24} height={24} alt={alt}/>
            <div className="flex flex-col">
                <p className="text-sm">{title}</p>
                <p className="text-2xl font-bold">{value}</p>
            </div>
        </div>
    );
};

export default DashboardItem;
