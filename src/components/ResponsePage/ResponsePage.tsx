import Image from "next/image";
import Link from "next/link";
import React from "react";


type Props = {
    src: string;
    alt: string;
    heading: string;
    description: string;
    href: string;
    linkText: string;
};

const ResponsePage: React.FC<Props> = ({src, alt, heading, description, href, linkText}) => {
    return (
        <div className="flex flex-col gap-8 mx-auto my-[15vh]">
            <Image className="mx-auto" src={src} width={200} height={200} alt={alt}/>
            <div className="flex flex-col gap-1 text-center">
                <p className="text-lg font-bold">{heading}</p>
                <p>{description}</p>
            </div>
            <Link className="w-305_ h-48_ mx-auto p-2 bg-neutral-950 rounded-lg leading-8 font-semibold text-contrast-0 text-center" href={href}>{linkText}</Link>
        </div>
    );
};

export default ResponsePage;
