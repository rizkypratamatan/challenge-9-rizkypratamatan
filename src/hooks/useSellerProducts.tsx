import {sellerProductsService} from "@/services/sellerProductsService";
import {SellerProductsRequest} from "@/types/interfaces/SellerProductsRequest";
import {useQuery} from "@tanstack/react-query";


export const useSellerProducts = (index: number, q?: string, isActive?: boolean) => {
    const params: SellerProductsRequest = {
        q: q,
        isActive: isActive,
        page: index,
        limit: 20
    };
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['sellerProducts', params],
        queryFn: ({queryKey}) => {
            const [, params] = queryKey;
            return sellerProductsService(params as SellerProductsRequest);
        }
    });

    return {data, isLoading, isError, error};
};
