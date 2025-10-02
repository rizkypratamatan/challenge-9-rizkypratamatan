import {Checkbox} from "@/components/ui/checkbox";
import React from "react";


type Props = {
    text: string;
};

const FilterCategory: React.FC<Props> = ({text}) => {
    return (
        <div className="flex gap-2 items-center">
            <Checkbox/><p>{text}</p>
        </div>
    );
};

export default FilterCategory;
