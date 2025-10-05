import {productService} from "@/services/productService";
import {ProductRequest} from "@/types/interfaces/ProductRequest";
import {useQuery} from "@tanstack/react-query";


export const useProduct = (id: number) => {
    const params: ProductRequest = {
        id: id
    };
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['product', params],
        queryFn: ({queryKey}) => {
            const [, params] = queryKey;
            return productService(params as ProductRequest);
        }
    });

    return {data, isLoading, isError, error};
};
