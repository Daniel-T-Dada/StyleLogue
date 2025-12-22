'use client';


import { getTrendingStyles } from "@/data/styles";
import Link from "next/link";
import StyleCard from "./StyleCard";
import { useFavourites } from "@/hooks/useFavourites";

const TrendingStyle = () => {
    const trendingStyles = getTrendingStyles();
    const { isFavourite, toggleFavourite } = useFavourites();

    return (
        <div>

            <section className="py-6 px-4">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-display text-lg font-semibold text-foreground">
                        Trending Styles
                    </h2>

                    <Link
                        href="/styles"
                        className="text-sm text-primary font-medium hover:underline"
                    >
                        View all
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-4 ">
                    {trendingStyles.map((style, index) => (
                        <StyleCard
                            key={style.id}
                            style={style}
                            isFavourite={isFavourite(style.id)}
                            onToggleFavourite={toggleFavourite}
                            index={index}
                            
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}
export default TrendingStyle