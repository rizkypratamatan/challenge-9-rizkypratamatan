export interface MyReviewsRequest {
    page: number;

    limit: number;

    star?: number;

    q?: string;
}
