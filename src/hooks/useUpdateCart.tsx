import {updateCartService} from "@/services/updateCartService";
import {UpdateCartRequest} from "@/types/interfaces/UpdateCartRequest";
import {QueryClient, useMutation, useQueryClient} from "@tanstack/react-query";


export const useUpdateCart = () => {
    const queryClient: QueryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (data: UpdateCartRequest) => updateCartService(data),
        onError: (error: Error) => {
            console.log(error);
        },
        onSettled: () => {
            queryClient.invalidateQueries({queryKey: ['cart']});
        },
    })

    const onClick = (data: UpdateCartRequest) => {
        mutation.mutate(data);
    }

    return {onClick};
};
