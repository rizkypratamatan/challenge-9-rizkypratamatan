import {BaseResponse} from "@/types/interfaces/BaseResponse";


interface AddProductResponseData {
    id: number;

    title: string;

    slug: string;

    description: string;

    price: number;

    stock: number;

    images: string[];

    isActive: true,

    rating: number;

    reviewCount: number;

    soldCount: number;

    shopId: number;

    categoryId: number;

    createdAt: Date;

    updatedAt: Date;
}


export interface AddProductResponse extends BaseResponse {
    data: AddProductResponseData;
}
