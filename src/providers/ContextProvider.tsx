"use client";

import {ContextData} from "@/types/interfaces/ContextData";
import React, {Context, createContext, useContext, useState} from "react";


const AppContext: Context<ContextData | undefined> = createContext<ContextData | undefined>(undefined);

export const ContextProvider = ({children}: { children: React.ReactNode }) => {
    const [quantities, setQuantities] = useState<number[]>([1]);

    const context: ContextData = {
        quantities: quantities,
        setQuantities: setQuantities
    };

    return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export const useApp: () => ContextData | undefined = (): ContextData | undefined => {
    const context: ContextData | undefined = useContext(AppContext);

    if(!context) {
        throw new Error("useApp must be used within a AppProvider");
    }

    return context;
};
