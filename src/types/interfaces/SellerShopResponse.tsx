import {BaseResponse} from "@/types/interfaces/BaseResponse";


interface SellerShopResponseDataCount {
    products: number;

    orderItems: number;
}


interface SellerShopResponseData {
    id: number;

    name: string;

    slug: string;

    logo: string;

    address: string;

    isActive: boolean;

    createdAt: Date;

    _count: SellerShopResponseDataCount;
}


export interface SellerShopResponse extends BaseResponse {
    data: SellerShopResponseData;
}
