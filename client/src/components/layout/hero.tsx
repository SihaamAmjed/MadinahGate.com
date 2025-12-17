import { Button } from "@/components/ui/button";
import { heroAsset } from "@/lib/data";
import { Link } from "wouter";

export function Hero() {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroAsset}
          alt="Luxury Dates and Perfumes"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto flex h-full flex-col justify-center px-4 md:px-6">
        <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            The Essence of <br />
            <span className="text-secondary">Madinah</span>
          </h1>
          <p className="mb-8 text-lg text-gray-200 md:text-xl">
            Discover our curated collection of premium Ajwa dates, 
            exclusive ouds, and gourmet dry fruits. Experience luxury delivered to your doorstep.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-12 px-8" asChild>
              <Link href="/shop">Shop Collection</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black text-lg h-12 px-8" asChild>
              <Link href="/shop?category=dates">Explore Dates</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
