import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"

const CategoryCard = ({ category, variant = "carousel" }) => {
    const { id, name, image, icon, count } = category;
    if (variant === "carousel") {
        return (
            <div>
                <Link
                    href={`/styles?category=${id}`}
                    className="flex flex-col items-center gap-2 touch-feedback"
                >
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-muted ring-2 ring-transparent hover:ring-primary transition-all duration-200">
                        <Image
                            src={image}
                            alt={name}
                            className="image-cover"
                            loading="lazy"
                            fill
                        />
                        <div className="absolute inset-0 bg-foreground/20" />
                        <span className="absolute inset-0 flex items-center justify-center text-2xl">
                            {/* {icon} */}
                        </span>
                    </div>

                    <span className="text-xs font-medium text-foreground text-center">
                        {name}
                    </span>

                </Link>
            </div>
        )
    }

    return (
        <Link
            href={`/styles?category=${id}`}
            className={cn(
                "group relative overflow-hidden aspect-4/3 touch-feedback block shadow-lg rounded-lg",
                "animate-scale-in"
            )}
        >
            <Image
                src={image}
                alt={name}
                fill
                className="image-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
            />

            <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-3xl mb-2 block">{icon}</span>
                <h3 className="font-display text-lg font-semibold text-background">
                    {name}
                </h3>
                <p className="text-sm text-background/80">{count} styles</p>
            </div>
        </Link>
    );
};

export default CategoryCard