import {deleteCartService} from "@/services/deleteCartService";
import {DeleteCartRequest} from "@/types/interfaces/DeleteCartRequest";
import {useMutation, useQueryClient} from "@tanstack/react-query";


export const useDeleteCart = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (data: DeleteCartRequest) => deleteCartService(data),
        onError: (error: Error) => {
            console.log(error);
        },
        onSettled: () => {
            queryClient.invalidateQueries({queryKey: ['cart']})
        },
    })

    const onClick = (data: DeleteCartRequest) => {
        mutation.mutate(data)
    }

    return {onClick};
};
