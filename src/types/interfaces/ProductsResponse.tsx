import {BasePagination} from "@/types/interfaces/BasePagination";
import {BaseResponse} from "@/types/interfaces/BaseResponse";
import {Product} from "@/types/interfaces/Product";


interface ProductsResponseData {
    products: Product[];

    pagination: BasePagination;
}


export interface ProductsResponse extends BaseResponse {
    data: ProductsResponseData;
}
