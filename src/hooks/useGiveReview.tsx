import {giveReviewValidation} from "@/lib/validations/giveReviewValidation";
import {giveReviewService} from "@/services/giveReviewService";
import {GiveReviewRequest} from "@/types/interfaces/GiveReviewRequest";
import {zodResolver} from "@hookform/resolvers/zod";
import {useMutation} from "@tanstack/react-query";
import {useForm} from "react-hook-form";


export const useGiveReview = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm({
        resolver: zodResolver(giveReviewValidation),
        defaultValues: {
            star: 0,
            comment: ''
        }
    });

    const {mutate, isPending, isError, error, isSuccess} = useMutation({
        mutationFn: (data: GiveReviewRequest) => {
            const productIds: string[] = data.productId.split(',');
            return Promise.all(
                productIds.map((productId) => {
                    return giveReviewService({...data, productId});
                })
            );
        },
        onError: (error: Error) => {
            console.log(error);
        },
        onSettled: (data) => {
            console.log(data);
        }
    });

    const onSubmit = async(data: GiveReviewRequest) => {
        mutate(data);
    };

    return {
        register,
        handleSubmit,
        errors,
        reset,
        onSubmit,
        isPending,
        isError,
        error,
        isSuccess,
    };
};
