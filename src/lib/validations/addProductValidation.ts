import {z} from "zod";


export const addProductValidation = z.object({
    id: z.string(),
    title: z.string().trim().min(3, {message: 'Title must be at least 3 characters'}),
    description: z.string().trim().min(10, {message: 'Description must be at least 3 characters'}),
    price: z.string().trim().min(1, {message: 'Price must be fill'}),
    stock: z.string().trim().min(1, {message: 'Stock must be fill'}),
    categoryId: z.string().trim().min(1, {message: 'Category must be select'}),
    images: z.any(),
    isActive: z.boolean(),
});
