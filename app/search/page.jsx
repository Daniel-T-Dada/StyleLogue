'use client';

import { useState, useMemo } from "react";
import { Search as SearchIcon, X } from "lucide-react";
import { searchStyles, categories } from "@/data/styles";
import { useFavourites } from "@/hooks/useFavourites";
import { cn } from "@/lib/utils";
import StyleCard from "@/components/StyleCard";

const popularSearches = ["Senator", "Ankara", "Wedding", "Casual", "Agbada", "Lace"];

const Search = () => {
    const [query, setQuery] = useState("");
    const { isFavourite, toggleFavourite } = useFavourites();

    const results = useMemo(() => {
        if (query.trim().length < 2) return [];
        return searchStyles(query);
    }, [query]);

    const handleClear = () => {
        setQuery("");
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion);
    };

    return (
        <div className="min-h-screen bg-background pb-20">
        

            <main className="max-w-lg mx-auto">
                {/* Search Input */}
                <div className="sticky top-14 z-30 bg-background px-4 py-3 border-b border-border">
                    <div className="relative">
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search styles, categories..."
                            className={cn(
                                "w-full h-12 pl-10 pr-10 rounded-xl bg-muted border-0",
                                "text-foreground placeholder:text-muted-foreground",
                                "focus:outline-none focus:ring-2 focus:ring-primary/20",
                                "transition-all duration-200"
                            )}
                            autoFocus
                        />
                        {query && (
                            <button
                                onClick={handleClear}
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-background transition-colors"
                                aria-label="Clear search"
                            >
                                <X className="w-4 h-4 text-muted-foreground" />
                            </button>
                        )}
                    </div>
                </div>

                <div className="px-4 py-6">
                    {query.trim().length < 2 ? (
                        /* Initial State - Suggestions */
                        <div className="animate-fade-in">
                            <h2 className="font-display text-lg font-semibold text-foreground mb-4">
                                Popular Searches
                            </h2>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {popularSearches.map((suggestion) => (
                                    <button
                                        key={suggestion}
                                        onClick={() => handleSuggestionClick(suggestion)}
                                        className="px-4 py-2 rounded-full bg-muted text-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                                    >
                                        {suggestion}
                                    </button>
                                ))}
                            </div>

                            <h2 className="font-display text-lg font-semibold text-foreground mb-4">
                                Browse by Category
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => handleSuggestionClick(category.name)}
                                        className="px-4 py-2 rounded-full bg-muted text-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                                    >
                                        {category.icon} {category.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : results.length > 0 ? (
                        /* Results */
                        <div>
                            <p className="text-sm text-muted-foreground mb-4">
                                {results.length} result{results.length !== 1 ? "s" : ""} for "{query}"
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {results.map((style, index) => (
                                    <StyleCard
                                        key={style.id}
                                        style={style}
                                        isFavourite={isFavourite(style.id)}
                                        onToggleFavourite={toggleFavourite}
                                        index={index}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : (
                        /* No Results */
                        <div className="text-center py-12 animate-fade-in">
                            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                                <SearchIcon className="w-8 h-8 text-muted-foreground" />
                            </div>
                            <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                                No results found
                            </h2>
                            <p className="text-muted-foreground max-w-xs mx-auto">
                                Try searching for different keywords or browse categories
                            </p>
                        </div>
                    )}
                </div>
            </main>


        </div>
    );
};

export default Search;
