import {Checkbox} from "@/components/ui/checkbox";
import Image from "next/image";
import React, {Dispatch, SetStateAction} from "react";


type Props = {
    rate: number;
    rating: number | undefined;
    setRating: Dispatch<SetStateAction<number | undefined>>;
};

const FilterRating: React.FC<Props> = ({rate, rating, setRating}) => {
    return (
        <div className="flex items-center gap-2 p-2">
            <Checkbox value={rate} checked={rate === rating} onCheckedChange={(checked) => {
                if(checked) {
                    setRating(rate);
                } else {
                    setRating(undefined);
                }
            }}/>
            <div className="flex gap-0.5">
                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                <p>{rate}</p>
            </div>
        </div>
    );
};

export default FilterRating;
