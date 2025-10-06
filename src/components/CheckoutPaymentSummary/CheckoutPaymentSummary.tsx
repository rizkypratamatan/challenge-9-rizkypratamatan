import React from "react";


type Props = {
    title: string;
    price: string;
    total: boolean;
};

const CheckoutPaymentSummary: React.FC<Props> = ({title, price, total}) => {
    return (
        <div className="flex justify-between">
            <p className={`${total ? 'font-bold' : ''} text-sm md:text-base`}>{title}</p>
            <p className="text-sm font-bold md:text-base">{price}</p>
        </div>
    );
};

export default CheckoutPaymentSummary;
