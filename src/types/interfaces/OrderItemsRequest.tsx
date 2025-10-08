import {OrderItemStatus} from "@/types/enums/OrderItemStatus";


export interface OrderItemsRequest {
    status?: OrderItemStatus;

    page: number;

    limit: number;
}
