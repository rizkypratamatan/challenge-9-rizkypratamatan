import {ProductOrder} from "@/types/enums/ProductOrder";
import {ProductSort} from "@/types/enums/ProductSort";


export interface ProductsRequest {
    categoryId?: number;

    minPrice?: number;

    maxPrice?: number;

    rating?: number;

    sort: ProductSort;

    order: ProductOrder;

    page: number;

    limit: number;
}
