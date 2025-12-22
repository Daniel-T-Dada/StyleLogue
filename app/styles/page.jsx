'use client';

import { useState, useMemo } from "react";
import { styles, categories } from "@/data/styles";
import { useFavourites } from "@/hooks/useFavourites";
import { cn } from "@/lib/utils";
import { useSearchParams, useRouter } from "next/navigation";
import StyleCard from "@/components/StyleCard";


const StylesListPage = () => {
    
    const searchParams = useSearchParams();
    const router = useRouter();
    const selectedCategory = searchParams.get("category") || "all";
    const { isFavourite, toggleFavourite } = useFavourites();


    const filteredStyles = useMemo(() => {
        if (selectedCategory === "all") return styles;
        return styles.filter((style) => style.category === selectedCategory);
    }, [selectedCategory]);

    const handleCategoryChange = (categoryId) => {
        const params = new URLSearchParams(searchParams.toString());
        if (categoryId === "all") {
            params.delete("category");
        } else {
            params.set("category", categoryId);
        }
        router.replace(`/styles?${params.toString()}`);
    };

    return (
        <div className="min-h-screen bg-background pb-20">
            
            <main className="max-w-lg mx-auto">
                {/* Filter Bar */}
                <div className="sticky top-14 z-30 bg-background border-b border-border">
                    <div className="flex gap-2 overflow-x-auto px-4 py-3 hide-scrollbar">
                        <button
                            onClick={() => handleCategoryChange("all")}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                                selectedCategory === "all"
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                            )}
                        >
                            All Styles
                        </button>

                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => handleCategoryChange(category.id)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors shadow-2xl",
                                    selectedCategory === category.id
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                                )}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results Count */}
                <div className="px-4 py-3">
                    <p className="text-sm text-muted-foreground">
                        {filteredStyles.length} style{filteredStyles.length !== 1 ? "s" : ""} found
                    </p>
                </div>

                {/* Styles Grid */}
                <div className="px-4 pb-6">
                    <div className="grid grid-cols-2 gap-4">
                        {filteredStyles.map((style, index) => (
                            <StyleCard
                                key={style.id}
                                style={style}
                                isFavourite={isFavourite(style.id)}
                                onToggleFavourite={toggleFavourite}
                                index={index}
                            />
                        ))}
                    </div>

                    {filteredStyles.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground">
                                No styles found in this category
                            </p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default StylesListPage;
