import {BasePagination} from "@/types/interfaces/BasePagination";
import {BaseResponse} from "@/types/interfaces/BaseResponse";


interface MyReviewResponseDataReview {

}


interface MyReviewResponseData {
    reviews: MyReviewResponseDataReview[];

    pagination: BasePagination;
}


export interface MyReviewsResponse extends BaseResponse {
    data: MyReviewResponseData;
}
