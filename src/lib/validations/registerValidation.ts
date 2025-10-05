import {z} from "zod";


export const registerValidation = z.object({
    name: z.string().trim().min(3, {message: 'Name must be at least 3 characters'}),
    email: z.email(),
    avatar: z.any().refine((files) => Array.from(files).length > 0, {message: 'Avatar must be select'}),
    password: z.string().min(6, {message: 'Password must be at least 6 characters'}),
    passwordConfirm: z.string({message: 'Password must be at least 6 characters'}).min(6, {message: 'Password must be at least 6 characters'})
}).refine((data) => data.password === data.passwordConfirm, {
    message: 'Password must be match',
    path: ['passwordConfirm']
});
