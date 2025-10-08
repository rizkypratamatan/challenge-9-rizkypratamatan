export interface SellerProductsRequest {
    q?: string;

    isActive?: boolean;

    page: number;

    limit: number;
}
