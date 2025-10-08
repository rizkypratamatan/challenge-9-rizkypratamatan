interface CheckoutRequestAddress {
    name: string;

    phone: string;

    city: string;

    postalCode: string;

    address: string;
}


export interface CheckoutRequest {
    address: CheckoutRequestAddress;

    shippingMethod: string;
}
