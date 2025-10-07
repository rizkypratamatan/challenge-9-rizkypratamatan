import {apiClient} from "@/lib/api-client";
import {SellerShopResponse} from "@/types/interfaces/SellerShopResponse";


export const sellerShopService = async() => {
    const {data} = await apiClient.get<SellerShopResponse>('/seller/shop');

    return data;
};
