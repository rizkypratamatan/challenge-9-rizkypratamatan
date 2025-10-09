import {z} from "zod";


export const updateShopValidation = z.object({
    name: z.string().trim().min(3, {message: 'Name must be at least 3 characters'}),
    slug: z.string().trim(),
    logo: z.any(),
    address: z.string().trim().min(10, {message: 'Address must be at least 10 characters'}),
    isActive: z.boolean()
});
