interface CartItemProduct {
    id: number;

    title: string;

    price: number;

    images: string[];

    isActive: boolean;

    stock: number;
}


export interface CartItem {
    id: number;

    productId: number;

    qty: number;

    priceSnapshot: number;

    subtotal: number;

    product: CartItemProduct;
}
