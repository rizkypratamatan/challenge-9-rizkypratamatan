import {apiClient} from "@/lib/api-client";
import {DeleteCartRequest} from "@/types/interfaces/DeleteCartRequest";
import {DeleteCartResponse} from "@/types/interfaces/DeleteCartResponse";


export const deleteCartService = async(params: DeleteCartRequest) => {
    const {data} = await apiClient.delete<DeleteCartResponse>(`/cart/items/${params.itemId}`);

    return data;
};
