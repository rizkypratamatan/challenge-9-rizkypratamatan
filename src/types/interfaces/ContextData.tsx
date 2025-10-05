import {Dispatch, SetStateAction} from "react";


export interface ContextData {
    quantities: number[];

    setQuantities: Dispatch<SetStateAction<number[]>>;
}
