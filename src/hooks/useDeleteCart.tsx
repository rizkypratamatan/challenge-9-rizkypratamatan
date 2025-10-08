import {deleteCartService} from "@/services/deleteCartService";
import {DeleteCartRequest} from "@/types/interfaces/DeleteCartRequest";
import {QueryClient, useMutation, useQueryClient} from "@tanstack/react-query";


export const useDeleteCart = () => {
    const queryClient: QueryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (data: DeleteCartRequest) => deleteCartService(data),
        onError: (error: Error) => {
            console.log(error);
        },
        onSettled: () => {
            queryClient.invalidateQueries({queryKey: ['cart']});
        },
    })

    const onClick = (data: DeleteCartRequest) => {
        mutation.mutate(data);
    }

    return {onClick};
};
