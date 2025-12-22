'use client'

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Heart, Share2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getStyleById, styles } from "@/data/styles";
import { useFavourites } from "@/hooks/useFavourites";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import StyleCard from "@/components/StyleCard";

const StyleDetail = () => {
    const { id } = useParams();
    const router = useRouter();
    const { isFavourite, toggleFavourite } = useFavourites();
    const { toast } = useToast();
    
    const style = getStyleById(id || "");
    const { id: styleId, title, image, description, tags, category, trending } = style || {};

    if (!style) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="font-display text-2xl font-bold mb-2">Style Not Found</h1>
                    <p className="text-muted-foreground mb-4">The style you're looking for doesn't exist.</p>
                    <Button asChild>
                        <Link href="/styles">Browse Styles</Link>
                    </Button>
                </div>
            </div>
        );
    }

    const relatedStyles = styles
        .filter((s) => s.category === category && s.id !== styleId)
        .slice(0, 4);

    const handleShare = () => {
        const message = `Check out this ${title} on StyleLogue!\n\n${description}\n\nCategory: ${category}`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");

        toast({
            title: "Share via WhatsApp",
            description: "Opening WhatsApp to share this style",
        });
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        toast({
            title: "Link Copied",
            description: "Style link copied to clipboard",
        });
    };

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg">
                <div className="flex items-center justify-between h-14 px-4 max-w-lg mx-auto">
                    <button
                        onClick={() => router.back()}
                        className="p-2 -ml-2 rounded-full hover:bg-muted transition-colors"
                        aria-label="Go back"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleCopyLink}
                            className="p-2 rounded-full hover:bg-muted transition-colors"
                            aria-label="Copy link"
                        >
                            <Share2 className="w-5 h-5" />
                        </button>

                        <button
                            onClick={() => toggleFavourite(styleId)}
                            className={cn(
                                "p-2 rounded-full transition-colors",
                                isFavourite(styleId)
                                    ? "bg-primary text-primary-foreground"
                                    : "hover:bg-muted"
                            )}
                            aria-label={
                                isFavourite(styleId)
                                    ? "Remove from favourites"
                                    : "Add to favourites"
                            }
                        >
                            <Heart className={cn("w-5 h-5", isFavourite(styleId) && "fill-current")} />
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-lg mx-auto">
                {/* Hero Image */}
                <div className="relative aspect-3/4 animate-fade-in">
                    <img src={image} alt={title} className="image-cover" />

                    {trending && (
                        <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                            Trending
                        </span>
                    )}
                </div>

                {/* Content */}
                <div className="px-4 py-6 animate-fade-up">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full uppercase tracking-wide mb-3">
                        {category}
                    </span>

                    <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {title}
                    </h1>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                        {description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Share Button */}
                    <Button onClick={handleShare} className="w-full gap-2" size="lg">
                        <MessageCircle className="w-5 h-5" />
                        Share with Tailor via WhatsApp
                    </Button>
                </div>

                {/* Related Styles */}
                {relatedStyles.length > 0 && (
                    <section className="px-4 py-6 border-t border-border">
                        <h2 className="font-display text-lg font-semibold text-foreground mb-4">
                            Related Styles
                        </h2>

                        <div className="grid grid-cols-2 gap-4">
                            {relatedStyles.map((relatedStyle, index) => (
                                <StyleCard
                                    key={id}
                                    style={relatedStyle}
                                    isFavourite={isFavourite(relatedStyle.id)}
                                    onToggleFavourite={toggleFavourite}
                                    index={index}
                                />
                            ))}
                        </div>
                    </section>
                )}
            </main>

    
        </div>
    );
};

export default StyleDetail;
