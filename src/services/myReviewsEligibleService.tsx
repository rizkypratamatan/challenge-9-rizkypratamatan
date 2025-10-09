import {apiClient} from "@/lib/api-client";
import {ProductsResponse} from "@/types/interfaces/ProductsResponse";
import {MyReviewsEligibleRequest} from "@/types/interfaces/MyReviewsEligibleRequest";


export const myReviewsEligibleService = async(params: MyReviewsEligibleRequest) => {
    let url: string = `page=${params.page}&limit=${params.limit}`;

    const {data} = await apiClient.get<ProductsResponse>(`/reviews/my/eligible?${url}`);

    return data;
};
