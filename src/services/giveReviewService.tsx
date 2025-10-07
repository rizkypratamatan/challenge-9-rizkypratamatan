import {apiClient} from "@/lib/api-client";
import {GiveReviewRequest} from "@/types/interfaces/GiveReviewRequest";


export const giveReviewService = async(params: GiveReviewRequest) => {
    const {data} = await apiClient.post('/reviews', params);
    console.log(data)
    return data;
};
