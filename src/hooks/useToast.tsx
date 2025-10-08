import Image from "next/image";
import React from "react";


export const useToastSuccess = () => {
    return {
        classNames: {
            toast: 'toaster-success'
        },
        cancel: {
            label: <Image src={'/images/icon-close.png'} width={16} height={16} alt={'Close Icon'}/>,
            onClick: () => {
            },
        }
    };
};
