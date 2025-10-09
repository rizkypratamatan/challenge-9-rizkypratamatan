import {BaseResponse} from "@/types/interfaces/BaseResponse";


interface UpdateShopResponseData {
    id: number;

    name: string;

    slug: string;

    logo: string;

    address: string;

    isActive: boolean;

    updatedAt: Date;
}


export interface UpdateShopResponse extends BaseResponse {
    data: UpdateShopResponseData;
}
