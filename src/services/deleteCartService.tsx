import {apiClient} from "@/lib/api-client";
import {DeleteCartRequest} from "@/types/interfaces/DeleteCartRequest";
import {UpdateCartResponse} from "@/types/interfaces/UpdateCartResponse";


export const deleteCartService = async(params: DeleteCartRequest) => {
    const {data} = await apiClient.delete<UpdateCartResponse>(`/cart/items/${params.itemId}`);
    console.log(data);
    return data;
};
