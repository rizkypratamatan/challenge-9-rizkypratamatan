import {z} from "zod";


export const giveReviewValidation = z.object({
    productId: z.string(),
    star: z.number(),
    comment: z.string().min(10, {message: 'Comment must be at least 6 characters'})
});
