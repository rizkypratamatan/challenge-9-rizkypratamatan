import {Checkbox} from "@/components/ui/checkbox";
import {ProductCategory} from "@/types/interfaces/ProductCategory";
import React, {Dispatch, SetStateAction} from "react";


type Props = {
    category: ProductCategory;
    categoryId: number;
    setCategoryId: Dispatch<SetStateAction<number>>;
};

const FilterCategory: React.FC<Props> = ({category, categoryId, setCategoryId}) => {
    return (
        <div className="flex gap-2 items-center">
            <Checkbox value={category.id} checked={category.id === categoryId} onCheckedChange={(checked) => {
                if(checked) {
                    setCategoryId(category.id);
                } else {
                    setCategoryId(0);
                }
            }}/><p>{category.name}</p>
        </div>
    );
};

export default FilterCategory;
