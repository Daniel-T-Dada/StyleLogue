import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
const Hero = () => {
    return (
        <div>
            <section className="relative px-4 py-8 animate-fade-in">
                <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-primary/10 via-secondary/10 to-accent/10 p-6 md:p-8">
                    <div className="relative z-10">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-4">
                            Nigerian Fashion
                        </span>
                        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-3">
                            Discover Your
                            <br />
                            <span className="text-primary">Perfect Style</span>
                        </h1>
                        <p className="text-muted-foreground text-sm md:text-base max-w-xs mb-6">
                            Browse curated Nigerian fashion designs and share with your tailor
                        </p>
                        <Button asChild className="group">
                            <Link href="/styles">
                                Browse Styles
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>

                    {/* Decorative elements
                    <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-accent/10 rounded-full blur-xl" /> */}
                </div>
            </section>
        </div>
    )
}
export default Hero