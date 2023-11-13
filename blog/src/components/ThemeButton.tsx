"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

const ThemeButton = () => {
    const { setTheme, resolvedTheme } = useTheme();
    const [isMounted, setIsMounted] = useState<boolean>(false);
    
    const toggleTheme = useCallback(() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    }, [setTheme, resolvedTheme])

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null
    return (
        <button type="button" onClick={toggleTheme}>
            {resolvedTheme === "dark" ? <Sun /> : <Moon />}
        </button>
    );
}

export default ThemeButton;