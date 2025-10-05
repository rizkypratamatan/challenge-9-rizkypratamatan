import {BasePagination} from "@/types/interfaces/BasePagination";
import {ProductCategory} from "@/types/interfaces/ProductCategory";


interface CategoriesResponseData {
    categories: ProductCategory[];

    pagination: BasePagination;
}


export interface CategoriesResponse {
    data: CategoriesResponseData;
}
