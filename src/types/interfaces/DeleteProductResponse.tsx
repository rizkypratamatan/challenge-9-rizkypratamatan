import {BaseResponse} from "@/types/interfaces/BaseResponse";


interface DeleteProductResponseData {
    id: number;

    title: string;

    slug: string;

    description: string;

    price: number;

    stock: number;

    images: string[];

    isActive: boolean;

    rating: number;

    reviewCount: number;

    soldCount: number;

    shopId: number;

    categoryId: number;

    createdAt: Date;

    updatedAt: Date;
}


export interface DeleteProductResponse extends BaseResponse {
    data: DeleteProductResponseData;
}
