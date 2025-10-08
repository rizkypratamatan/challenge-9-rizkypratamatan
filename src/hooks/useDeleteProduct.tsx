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
        },
        onSettled: () => {
            toast('Product has been deleted successfully.', {
                classNames: {
                    toast: "bg-green h-10 px-3 py-2 rounded-lg",
                    title: "text-lg font-semibold",
                },
            });

            queryClient.invalidateQueries({queryKey: ['sellerProducts']});
        },
    })

    const onClick = (data: DeleteProductRequest) => {
        mutation.mutate(data);
    }

    return {onClick};
};
