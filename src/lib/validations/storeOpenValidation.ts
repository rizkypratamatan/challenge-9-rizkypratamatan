import {z} from "zod";


export const storeOpenValidation = z.object({
    name: z.string().trim().min(3, {message: 'Name must be at least 3 characters'}),
    domain: z.string().trim().min(3, {message: 'Domain must be at least 3 characters'}),
    logo: z.any().refine((files) => Array.from(files).length > 0, {message: 'Avatar must be select'}),
    city: z.string().trim().min(3, {message: 'City must be at least 3 characters'}),
    address: z.string().trim().min(10, {message: 'Postal code must be at least 5 characters'}).max(250, {message: 'Postal code must be less than 250 characters'}),
});
