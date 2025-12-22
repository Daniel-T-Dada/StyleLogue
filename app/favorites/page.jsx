

'use client';

import Link from "next/link";
import { Heart } from "lucide-react";

import StyleCard from "@/components/StyleCard";
import { Button } from "@/components/ui/button";
import { styles } from "@/data/styles";
import { useFavourites } from "@/hooks/useFavourites";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

const Favourites = () => {
    const { favourites, isFavourite, toggleFavourite } = useFavourites();

    const favouriteStyles = styles.filter((style) =>
        favourites.includes(style.id)
    );

    return (
        <div className="min-h-screen bg-background pb-20">
        

            <main className="max-w-lg mx-auto px-4 py-6">
                <div className="mb-6">
                    <h1 className="font-display text-2xl font-bold text-foreground mb-2">
                        Favourites
                    </h1>
                    <p className="text-muted-foreground">
                        {favouriteStyles.length} saved style{favouriteStyles.length !== 1 ? "s" : ""}
                    </p>
                </div>

                {favouriteStyles.length > 0 ? (
                    <div className="grid grid-cols-2 gap-4">
                        {favouriteStyles.map((style, index) => (
                            <StyleCard
                                key={style.id}
                                style={style}
                                isFavourite={isFavourite(style.id)}
                                onToggleFavourite={toggleFavourite}
                                index={index}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 animate-fade-in">
                        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                            <Heart className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                            No favourites yet
                        </h2>
                        <p className="text-muted-foreground mb-6 max-w-xs mx-auto">
                            Tap the heart icon on any style to save it here for easy access
                        </p>
                        <Button asChild>
                            <Link href="/styles">Browse Styles</Link>
                        </Button>
                    </div>
                )}
            </main>

        
        </div>
    );
};

export default Favourites;
