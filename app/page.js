import Image from "next/image";
import Hero from "@/components/Hero"
import Link from "next/link"
import { categories } from "@/data/styles"
import CategoryCard from "@/components/CategoryCard"
import TrendingStyle from "@/components/TrendingStyle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="pb-20">
      <Hero />

      {/* Categories Carousel */}
      <section className="py-6">
        <div className="flex items-center justify-between px-4 mb-4">
          <h2 className="text-lg font-semibold text-foreground">
            Categories
          </h2>
          <Link
            href="/categories"
            className="text-sm text-primary font-medium hover:underline"
          >
            See all
          </Link>
        </div>
        <div className="flex gap-6 overflow-x-auto px-4 pb-2 hide-scrollbar">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} variant="carousel" />
          ))}
        </div>
      </section>

      <TrendingStyle />

      {/* CTA Section */}
      <section className="py-8 px-4">
        <div className="bg-secondary text-secondary-foreground rounded-2xl p-6 text-center">
          <h3 className="font-display text-xl font-semibold mb-2">
            Find Your Perfect Look
          </h3>
          <p className="text-sm opacity-90 mb-4">
            Explore our complete collection of Nigerian fashion styles
          </p>
          <Button asChild variant="secondary" className="bg-background text-foreground hover:bg-background/90">
            <Link href="/styles">Browse All Styles</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
