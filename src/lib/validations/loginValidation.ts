import {z} from "zod";


export const loginValidation = z.object({
    email: z.email({message: 'Email is not valid'}),
    password: z.string().min(6, {message: 'Password must be at least 6 characters'})
});
