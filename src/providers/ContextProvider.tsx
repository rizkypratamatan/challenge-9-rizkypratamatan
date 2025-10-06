"use client";

import {CartItemChecked} from "@/types/interfaces/CartItemChecked";
import {ContextData} from "@/types/interfaces/ContextData";
import React, {Context, createContext, useContext, useState} from "react";


const AppContext: Context<ContextData | undefined> = createContext<ContextData | undefined>(undefined);

export const ContextProvider = ({children}: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItemChecked[]>([]);
    const [cartCount, setCartCount] = useState<number>(0);
    const [cartTotal, setCartTotal] = useState<number>(0);

    const context: ContextData = {
        cartItems: cartItems,
        setCartItems: setCartItems,
        cartCount: cartCount,
        setCartCount: setCartCount,
        cartTotal: cartTotal,
        setCartTotal: setCartTotal
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
