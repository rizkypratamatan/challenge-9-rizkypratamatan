import {checkoutValidation} from "@/lib/validations/CheckoutValidation";
import {checkoutService} from "@/services/checkoutService";
import {StepStatus} from "@/types/enums/StepStatus";
import {CheckoutRequest} from "@/types/interfaces/CheckoutRequest";
import {zodResolver} from "@hookform/resolvers/zod";
import {useMutation} from "@tanstack/react-query";
import {Dispatch, SetStateAction} from "react";
import {useForm} from "react-hook-form";


export const useCheckout = (setStatus: Dispatch<SetStateAction<StepStatus>>) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm({
        resolver: zodResolver(checkoutValidation),
        defaultValues: {
            address: ''
        }
    });

    const {mutate, isPending, isError, error, isSuccess} = useMutation({
        mutationFn: (data: CheckoutRequest) => checkoutService(data),
        onError: (error: Error) => {
            console.log(error);
            setStatus(StepStatus.Failed);
        },
        onSettled: (data) => {
            if(data && data.success) {
                setStatus(StepStatus.Succeeded);
            }
        }
    });

    const onSubmit = (data: CheckoutRequest) => {
        mutate(data);
    }

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
