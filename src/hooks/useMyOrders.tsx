import {myOrdersService} from "@/services/myOrdersService";
import {CheckoutPaymentStatus} from "@/types/enums/CheckoutPaymentStatus";
import {MyOrdersRequest} from "@/types/interfaces/MyOrdersRequest";
import {useQuery} from "@tanstack/react-query";


export const useMyOrders = (index: number, paymentStatus?: CheckoutPaymentStatus) => {
    const params: MyOrdersRequest = {
        page: index,
        limit: 20,
        paymentStatus
    };
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['myOrders', params],
        queryFn: ({queryKey}) => {
            const [, params] = queryKey;
            return myOrdersService(params as MyOrdersRequest);
        }
    });

    return {data, isLoading, isError, error};
};
