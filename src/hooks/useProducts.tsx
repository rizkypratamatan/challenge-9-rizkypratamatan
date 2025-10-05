import {productsService} from "@/services/productsService";
import {ProductOrder} from "@/types/enums/ProductOrder";
import {ProductSort} from "@/types/enums/ProductSort";
import {ProductsRequest} from "@/types/interfaces/ProductsRequest";
import {useQuery} from "@tanstack/react-query";


export const useProducts = (sort: ProductSort, index: number, categoryId?: number, minPrice?: number, maxPrice?: number, rating?: number) => {
    const params: ProductsRequest = {
        categoryId: categoryId,
        minPrice: minPrice,
        maxPrice: maxPrice,
        rating: rating,
        sort: sort,
        order: ProductOrder.Ascending,
        page: index,
        limit: 16
    };
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['products', params],
        queryFn: ({queryKey}) => {
            const [, params] = queryKey;
            return productsService(params as ProductsRequest);
        }
    });

    return {data, isLoading, isError, error};
};
