import {orderItemsService} from "@/services/orderItemsService";
import {OrderItemStatus} from "@/types/enums/OrderItemStatus";
import {OrderItemsRequest} from "@/types/interfaces/OrderItemsRequest";
import {useQuery} from "@tanstack/react-query";


export const useOrderItems = (index: number, status?: OrderItemStatus) => {
    const params: OrderItemsRequest = {
        status: status,
        page: index,
        limit: 20
    };
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['orderItems', params],
        queryFn: ({queryKey}) => {
            const [, params] = queryKey;
            return orderItemsService(params as OrderItemsRequest);
        }
    });

    return {data, isLoading, isError, error};
};
