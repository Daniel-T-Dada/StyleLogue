"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid3X3, Heart, Search } from "lucide-react";
import { cn } from "@/lib/utils";
const BottomNav = () => {
    const pathname = usePathname();
    const navItems = [
        { to: "/", icon: Home, label: "Home" },
        { to: "/categories", icon: Grid3X3, label: "Categories" },
        { to: "/favorites", icon: Heart, label: "Favorites" },
        { to: "/search", icon: Search, label: "Search" },
    ];
    return (
        <div>

            <nav
                className={cn(
                    "fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-border safe-area-inset-buttom"
                )}
            >

                <div>

                    <div className="flex place-items-center justify-center h-16 max-w-lg mx-auto px-4">

                        {navItems.map(({ to, icon: Icon, label }) => (
                            <Link
                                key={to}
                                href={to}
                                className={cn(
                                    "flex flex-col items-center justify-center gap-1 px-8 rounded-lg transition-colors duration-200",
                                    pathname === to
                                        ? "text-foreground"
                                        : "text-mute-foreground hover:text-foreground"
                                )}
                            >

                                <Icon
                                    className={cn(
                                        "w-5 h-5 transition-colors duration-200",
                                        pathname === to ? "text-primary" : ""
                                    )}
                                />

                                <span
                                    className={cn(
                                        "text-[10px] font-medium transition-colors duration-200",
                                        pathname === to ? "text-primary" : ""
                                    )}
                                >
                                    {label}
                                </span>

                            </Link>
                        ))}
                    </div>
                </div>
            </nav>

        </div>
    );
};
export default BottomNav;
