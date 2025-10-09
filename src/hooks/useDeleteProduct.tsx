import {toastFailed, toastSuccess} from "@/hooks/useToast";
import {deleteProductService} from "@/services/deleteProductService";
import {DeleteProductRequest} from "@/types/interfaces/DeleteProductRequest";
import {QueryClient, useMutation, useQueryClient} from "@tanstack/react-query";
import {toast} from "sonner";


export const useDeleteProduct = () => {
    const queryClient: QueryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (data: DeleteProductRequest) => deleteProductService(data),
        onError: (error: Error) => {
            console.log(error);
            toast('Failed to delete product. Please try again.', toastFailed());
        },
        onSettled: () => {
            toast('Product has been deleted successfully.', toastSuccess());

            queryClient.invalidateQueries({queryKey: ['sellerProducts']});
        },
    })

    const onClick = (data: DeleteProductRequest) => {
        mutation.mutate(data);
    }

    return {onClick};
};
