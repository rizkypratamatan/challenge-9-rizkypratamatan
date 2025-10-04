import TanstackProvider from "@/providers/TanstackProvider";
import type {Metadata} from "next";
import React from "react";
import "./globals.css";


export const metadata: Metadata = {
    title: "Rizky Pratama Tan",
    description: "Challange 9 Rizky Pratama Tan",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>
        <TanstackProvider>{children}</TanstackProvider>
        </body>
        </html>
    );
}
