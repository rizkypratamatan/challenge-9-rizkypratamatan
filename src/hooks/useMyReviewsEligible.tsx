import {sellerProductsService} from "@/services/sellerProductsService";
import {MyReviewsEligibleRequest} from "@/types/interfaces/MyReviewsEligibleRequest";
import {useQuery} from "@tanstack/react-query";


export const useMyReviewsEligible = (index: number) => {
    const params: MyReviewsEligibleRequest = {
        page: index,
        limit: 20
    };
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['reviewsMyEligible', params],
        queryFn: ({queryKey}) => {
            const [, params] = queryKey;
            return sellerProductsService(params as MyReviewsEligibleRequest);
        }
    });

    return {data, isLoading, isError, error};
};
