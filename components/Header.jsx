"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { ThemeToggle } from "./Providers/ThemeToggle";

const Header = ({ title }) => {
    const pathname = usePathname();

    // The regex below correctly detects routes like /styles/<id>
    const isStyleDetail = typeof pathname === "string" && /^\/styles\/[^/]+$/.test(pathname);
    if (isStyleDetail) return null;

    const showSearch = true;
    return (
        <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border">
            <div className="flex items-center justify-between h-14 px-4 max-w-lg mx-auto">
                <Link href={"/"} className="flex items-center gap-2">
                    <span className="text-2xl font-heading semibold text-foreground tracking-tight">Style<span className="text-primary">Logue</span></span>
                </Link>
                {title && (
                    <h1 className="font-heading text-lg font-semibold text-foreground absolute left-1/2 -translate-x-1/2">{title} Great</h1>
                )}
                <div className="flex items-center gap-1">
                    <ThemeToggle />
                    {showSearch && (
                        <Link
                            href="/search"
                            className="p-2 rounded-full hover:bg-muted transition-colors"
                        >
                            <Search className="w-5 h-5 text-foreground" />
                        </Link>
                    )}
                </div>

            </div>

        </header>
    )
}

export default Header