import {completeOrderService} from "@/services/completeOrderService";
import {CompleteOrderRequest} from "@/types/interfaces/CompleteOrderRequest";
import {useMutation, useQueryClient} from "@tanstack/react-query";


export const useCompleteOrder = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (data: CompleteOrderRequest) => completeOrderService(data),
        onError: (error: Error) => {
            console.log(error);
        },
        onSettled: () => {
            queryClient.invalidateQueries({queryKey: ['myOrders']})
        },
    })

    const onClick = (data: CompleteOrderRequest) => {
        mutation.mutate(data);
    }

    return {onClick};
};
