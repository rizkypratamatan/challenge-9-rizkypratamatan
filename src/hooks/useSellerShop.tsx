import {sellerShopService} from "@/services/sellerShopService";
import {useQuery} from "@tanstack/react-query";


export const useSellerShop = () => {
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['sellerShop'],
        queryFn: sellerShopService
    });

    return {data, isLoading, isError, error};
};
