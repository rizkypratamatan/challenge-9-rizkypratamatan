import {toastFailed, toastSuccess} from "@/hooks/useToast";
import {addProductValidation} from "@/lib/validations/addProductValidation";
import {addProductService} from "@/services/addProductService";
import {AddProductRequest} from "@/types/interfaces/AddProductRequest";
import {zodResolver} from "@hookform/resolvers/zod";
import {useMutation} from "@tanstack/react-query";
import {useForm} from "react-hook-form";
import {toast} from "sonner";


export const useAddProduct = () => {
    const {
        register,
        control,
        setValue,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm({
        resolver: zodResolver(addProductValidation),
        defaultValues: {
            id: '',
            title: '',
            description: '',
            price: '',
            stock: '',
            categoryId: '',
            isActive: true
        }
    });

    const {mutate, isPending, isError, error, isSuccess} = useMutation({
        mutationFn: (data: AddProductRequest) => addProductService(data),
        onError: (error: Error) => {
            console.log(error);
            toast('Failed to save product. Please try again.', toastFailed());
        },
        onSettled: (data) => {
            if(data && data.success) {
                toast('Product has been saved successfully.', toastSuccess());
            }
        }
    });

    const onSubmit = async(data: AddProductRequest) => {
        mutate(data);
    };

    return {
        register,
        control,
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
