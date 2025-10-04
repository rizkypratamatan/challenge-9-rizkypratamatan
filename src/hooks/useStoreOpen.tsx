import {storeOpenValidation} from "@/lib/validations/storeOpenValidation";
import {storeOpenService} from "@/services/storeOpenService";
import {StoreOpenRequest} from "@/types/StoreOpenRequest";
import {zodResolver} from "@hookform/resolvers/zod";
import {useMutation} from "@tanstack/react-query";
import {useForm} from "react-hook-form";


export const useStoreOpen = () => {
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
            postalCode: '',
            address: ''
        }
    });

    const {mutate, isPending, isError, error, isSuccess} = useMutation({
        mutationFn: (data: StoreOpenRequest) => storeOpenService(data),
        onError: (error: Error) => {
            console.log(error);
        },
        onSettled: (data) => {
            if(data && data.success) {
                console.log(data);
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
