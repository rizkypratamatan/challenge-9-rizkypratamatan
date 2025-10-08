import {myReviewsService} from "@/services/myReviewsService";
import {MyReviewsRequest} from "@/types/interfaces/MyReviewsRequest";
import {useQuery} from "@tanstack/react-query";


export const useMyReviews = (index: number) => {
    const params: MyReviewsRequest = {
        page: index,
        limit: 20
    };
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['myReviews', params],
        queryFn: ({queryKey}) => {
            const [, params] = queryKey;
            return myReviewsService(params as MyReviewsRequest);
        }
    });

    return {data, isLoading, isError, error};
};
