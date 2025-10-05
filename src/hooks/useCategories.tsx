import {categoriesService} from "@/services/categoriesService";
import {useQuery} from "@tanstack/react-query";


export const useCategories = () => {
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['categories'],
        queryFn: categoriesService
    });

    return {data, isLoading, isError, error};
};
