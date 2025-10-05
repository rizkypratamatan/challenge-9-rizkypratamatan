import {cartService} from "@/services/cartService";
import {useQuery} from "@tanstack/react-query";


export const useCart = () => {
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['cart'],
        queryFn: ({queryKey}) => {
            const [, params] = queryKey;
            return cartService();
        }
    });

    return {data, isLoading, isError, error};
};
