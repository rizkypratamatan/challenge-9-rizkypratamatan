import {addToCartService} from "@/services/addToCartService";
import {AddToCartRequest} from "@/types/interfaces/AddToCartRequest";
import {QueryClient, useMutation, useQueryClient} from "@tanstack/react-query";


export const useAddToCart = () => {
    const queryClient: QueryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (data: AddToCartRequest) => addToCartService(data),
        onError: (error: Error) => {
            console.log(error);
        },
        onSettled: () => {
            queryClient.invalidateQueries({queryKey: ['cart']})
        },
    })

    const onClick = (data: AddToCartRequest) => {
        mutation.mutate(data);
    }

    return {onClick};
};
