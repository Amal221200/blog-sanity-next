"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

const Theme = ({ children }: { children: ReactNode }) => {

    return (
        <ThemeProvider attribute="class">
            {children}
        </ThemeProvider>
    );
}

export default Theme;