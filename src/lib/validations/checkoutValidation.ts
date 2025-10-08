import {z} from "zod";


export const checkoutValidationAddress = z.object({
    name: z.string().min(3, {message: 'Name must be at least 3 characters'}),
    phone: z.string().min(8, {message: 'Phone number must be at least 8 characters'}).regex(/^[0-9+\-\s()]+$/, {message: 'Invalid phone number format'}),
    city: z.string().min(3, {message: 'City must be at least 3 characters'}),
    postalCode: z.string().min(4, {message: 'Postal code must be at least 4 characters'}).max(10, {message: 'Postal code must be less than 10 characters'}),
    address: z.string().min(10, 'Address must be at least 5 characters'),
});

export const checkoutValidation = z.object({
    address: checkoutValidationAddress,
    shippingMethod: z.string().min(3, {message: 'Shipping method must be select'})
});
