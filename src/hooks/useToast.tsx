import Image from "next/image";
import React from "react";


export const toastSuccess = () => {
    return {
        classNames: {
            toast: 'toaster-success'
        },
        cancel: {
            label: <Image src={'/images/icon-close-white.png'} width={16} height={16} alt={'Close Icon'}/>,
            onClick: () => {
            },
        }
    };
};

export const toastFailed = () => {
    return {
        classNames: {
            toast: 'toaster-failed'
        },
        cancel: {
            label: <Image src={'/images/icon-close-white.png'} width={16} height={16} alt={'Close Icon'}/>,
            onClick: () => {
            },
        }
    };
};
