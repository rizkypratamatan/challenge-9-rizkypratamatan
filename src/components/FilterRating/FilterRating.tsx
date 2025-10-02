import {Checkbox} from "@/components/ui/checkbox";
import Image from "next/image";
import React from "react";


type Props = {
    rate: number;
};

const FilterRating: React.FC<Props> = ({rate}) => {
    return (
        <div className="flex items-center gap-2 p-2">
            <Checkbox/>
            <div className="flex gap-0.5">
                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                <p>{rate}</p>
            </div>
        </div>
    );
};

export default FilterRating;
