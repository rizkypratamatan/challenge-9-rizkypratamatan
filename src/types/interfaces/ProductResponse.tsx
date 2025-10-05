import {BaseResponse} from "@/types/interfaces/BaseResponse";
import {Product} from "@/types/interfaces/Product";


export interface ProductResponse extends BaseResponse {
    data: Product;
}
