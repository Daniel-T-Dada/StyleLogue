

import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/styles";

const Categories = () => {
    return (
        <div className="min-h-screen bg-background pb-20">

            <main className="max-w-lg mx-auto px-4 py-6">
                <div className="mb-6">
                    <h1 className="font-display text-2xl font-bold text-foreground mb-2">
                        Categories
                    </h1>
                    <p className="text-muted-foreground">
                        Explore Nigerian fashion by style
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 ">
                    {categories.map((category, index) => (
                        <div
                            key={category.id}
                            className="animate-fade-up opacity-0 rounded  overflow-hidden"
                            style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
                        >
                            <CategoryCard category={category} variant="grid" />
                        </div>
                    ))}
                </div>
            </main>

        </div>
    );
};

export default Categories;
