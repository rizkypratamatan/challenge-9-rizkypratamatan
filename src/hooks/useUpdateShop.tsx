import {toastFailed, toastSuccess} from "@/hooks/useToast";
import {updateShopValidation} from "@/lib/validations/updateShopValidation";
import {updateShopService} from "@/services/updateShopService";
import {UpdateShopRequest} from "@/types/interfaces/UpdateShopRequest";
import {zodResolver} from "@hookform/resolvers/zod";
import {QueryClient, useMutation, useQueryClient} from "@tanstack/react-query";
import {useForm} from "react-hook-form";
import {toast} from "sonner";


export const useUpdateShop = () => {
    const queryClient: QueryClient = useQueryClient();

    const {
        register,
        setValue,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm({
        resolver: zodResolver(updateShopValidation),
        defaultValues: {
            name: '',
            slug: '',
            address: '',
            isActive: true
        }
    });

    const {mutate, isPending, isError, error, isSuccess} = useMutation({
        mutationFn: (data: UpdateShopRequest) => updateShopService(data),
        onError: (error: Error) => {
            console.log(error);
            toast('Failed to update shop profile. Please try again.', toastFailed());
        },
        onSettled: (data) => {
            if(data && data.success) {
                toast('Shop profile has been updated successfully.', toastSuccess());

                queryClient.invalidateQueries({queryKey: ['sellerShop']});
            }
        }
    });

    const onSubmit = async(data: UpdateShopRequest) => {
        mutate(data);
    };

    return {
        register,
        setValue,
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
