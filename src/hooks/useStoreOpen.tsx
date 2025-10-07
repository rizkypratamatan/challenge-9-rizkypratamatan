import {storeOpenValidation} from "@/lib/validations/storeOpenValidation";
import {storeOpenService} from "@/services/storeOpenService";
import {StepStatus} from "@/types/enums/StepStatus";
import {StoreOpenRequest} from "@/types/interfaces/StoreOpenRequest";
import {zodResolver} from "@hookform/resolvers/zod";
import {useMutation} from "@tanstack/react-query";
import {Dispatch, SetStateAction} from "react";
import {useForm} from "react-hook-form";


export const useStoreOpen = (setStatus: Dispatch<SetStateAction<StepStatus>>) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm({
        resolver: zodResolver(storeOpenValidation),
        defaultValues: {
            name: '',
            domain: '',
            city: '',
            address: ''
        }
    });

    const {mutate, isPending, isError, error, isSuccess} = useMutation({
        mutationFn: (data: StoreOpenRequest) => storeOpenService(data),
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

    const onSubmit = async(data: StoreOpenRequest) => {
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
