import {apiClient} from "@/lib/api-client";
import {CategoriesResponse} from "@/types/interfaces/CategoriesResponse";


export const categoriesService = async() => {
    const {data} = await apiClient.get<CategoriesResponse>('/categories');

    return data;
};
