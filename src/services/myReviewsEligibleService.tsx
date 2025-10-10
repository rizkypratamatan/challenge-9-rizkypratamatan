import {apiClient} from "@/lib/api-client";
import {MyReviewsEligibleRequest} from "@/types/interfaces/MyReviewsEligibleRequest";
import {ProductsResponse} from "@/types/interfaces/ProductsResponse";


export const myReviewsEligibleService = async(params: MyReviewsEligibleRequest) => {
    let url: string = `page=${params.page}&limit=${params.limit}`;

    const {data} = await apiClient.get<ProductsResponse>(`/reviews/my/eligible?${url}`);

    return data;
};
