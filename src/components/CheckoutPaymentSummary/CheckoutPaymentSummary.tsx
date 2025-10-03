import React from "react";


type Props = {
    title: string;
    price: string;
    total: boolean;
};

const CheckoutPaymentSummary: React.FC<Props> = ({title, price, total}) => {
    return (
        <div className="flex justify-between">
            <p className={total ? 'font-bold' : ''}>{title}</p>
            <p className="font-bold">{price}</p>
        </div>
    );
};

export default CheckoutPaymentSummary;
