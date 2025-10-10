import {cancelOrderService} from "@/services/cancelOrderService";
import {CancelOrderRequest} from "@/types/interfaces/CancelOrderRequest";
import {QueryClient, useMutation, useQueryClient} from "@tanstack/react-query";


export const useCancelOrder = () => {
    const queryClient: QueryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (data: CancelOrderRequest) => cancelOrderService(data),
        onError: (error: Error) => {
            console.log(error);
        },
        onSettled: () => {
            queryClient.invalidateQueries({queryKey: ['orderItems']})
        },
    })

    const onClick = (data: CancelOrderRequest) => {
        mutation.mutate(data);
    }

    return {onClick};
};
