import {apiClient} from "@/lib/api-client";
import {MyReviewsRequest} from "@/types/interfaces/MyReviewsRequest";
import {MyReviewsResponse} from "@/types/interfaces/MyReviewsResponse";


export const myReviewsService = async(params: MyReviewsRequest) => {
    let url: string = `page=${params.page}&limit=${params.limit}`;

    if(params.star) {
        url += `&star=${params.star}`;
    }

    if(params.q) {
        url += `&q=${params.q}`;
    }

    const {data} = await apiClient.get<MyReviewsResponse>(`/reviews/my?${url}`);

    return data;
};
