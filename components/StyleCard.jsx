'use client'

import Link from "next/link";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const StyleCard = ({ style, isFavourite, onToggleFavourite, index = 0 }) => {

    const { id, title, image, description, tags, category, trending } = style;
    
    
    const handleFavouriteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onToggleFavourite(style.id);
    };

    return (
        <Link
            href={`/styles/${id}`}
            className={cn(
                "group block relative overflow-hidden rounded-lg bg-card shadow-lg touch-feedback",
                "animate-fade-up opacity-0",
                index === 0 && "delay-100",
                index === 1 && "delay-200",
                index === 2 && "delay-300",
                index === 3 && "delay-400"
            )}
            style={{ animationDelay: `${index * 50}ms`, animationFillMode: "forwards" }}
        >
            {/* Image Container */}
            <div className="relative aspect-3/4 overflow-hidden bg-muted ">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Favourite Button */}
                <button
                    onClick={handleFavouriteClick}
                    className={cn(
                        "absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all duration-200",
                        isFavourite
                            ? "bg-primary text-primary-foreground"
                            : "bg-background/80 text-foreground hover:bg-background"
                    )}
                    aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
                >
                    <Heart className={cn("w-4 h-4", isFavourite && "fill-current")} />
                </button>

                {/* Trending Badge */}
                {trending && (
                    <span className="absolute top-3 left-3 px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                        Trending
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="p-3">
                <span className="text-xs font-medium text-primary uppercase tracking-wide">
                    {category}
                </span>
                <p className="text-sm font-semibold text-foreground mt-1 line-clamp-2">
                    {title}
                </p>
            </div>
        </Link>
    );
}

export default StyleCard;
