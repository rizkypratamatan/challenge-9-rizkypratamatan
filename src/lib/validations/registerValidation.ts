import {z} from "zod";


export const registerValidation = z.object({
    name: z.string().trim().min(3, {message: 'Name must be at least 3 characters'}),
    phoneNumber: z.string().trim().min(11, {message: 'Phone Number must be at least 11 characters'}),
    email: z.email(),
    password: z.string().min(6, {message: 'Password must be at least 6 characters'}),
    passwordConfirm: z.string({message: 'Password must be at least 6 characters'}).min(6, {message: 'Password must be at least 6 characters'})
}).refine((data) => data.password === data.passwordConfirm, {
    message: 'Password must be match',
    path: ['passwordConfirm']
});
