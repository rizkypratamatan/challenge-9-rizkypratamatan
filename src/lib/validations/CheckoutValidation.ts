import {z} from "zod";


export const checkoutValidation = z.object({
    address: z.string().min(10, {message: 'Address must be at least 6 characters'})
});
