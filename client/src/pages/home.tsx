import { Hero } from "@/components/layout/hero";
import { ProductCard } from "@/components/product/product-card";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Star, Truck, ShieldCheck, Gift } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Home() {
  const featuredProducts = products.filter(p => p.featured);

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">Sourced directly from the finest farms in Madinah.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">Global Shipping</h3>
              <p className="text-muted-foreground">We deliver luxury to your doorstep, anywhere in the world.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <Gift className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">Luxury Packaging</h3>
              <p className="text-muted-foreground">Beautifully packaged, perfect for gifting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary">Featured Collection</h2>
              <p className="text-muted-foreground mt-2">Our most loved selections</p>
            </div>
            <Button variant="ghost" className="hidden md:flex" asChild>
              <Link href="/shop">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Button variant="outline" asChild>
              <Link href="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Banner */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Experience True Luxury</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                From the sacred palms of Madinah to the rarest ouds, our collection is curated for those who appreciate the finer things in life.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact for Bulk Orders</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-lg bg-white/10 p-6 flex flex-col items-center justify-center text-center hover:bg-white/20 transition-colors">
                <span className="font-serif text-2xl font-bold mb-2">Dates</span>
                <span className="text-sm opacity-80">Premium Ajwa & Safawi</span>
              </div>
              <div className="aspect-square rounded-lg bg-white/10 p-6 flex flex-col items-center justify-center text-center hover:bg-white/20 transition-colors">
                <span className="font-serif text-2xl font-bold mb-2">Perfumes</span>
                <span className="text-sm opacity-80">Oud & Musk</span>
              </div>
              <div className="aspect-square rounded-lg bg-white/10 p-6 flex flex-col items-center justify-center text-center hover:bg-white/20 transition-colors">
                <span className="font-serif text-2xl font-bold mb-2">Dry Fruits</span>
                <span className="text-sm opacity-80">Nuts & Berries</span>
              </div>
              <div className="aspect-square rounded-lg bg-white/10 p-6 flex flex-col items-center justify-center text-center hover:bg-white/20 transition-colors">
                <span className="font-serif text-2xl font-bold mb-2">Gifts</span>
                <span className="text-sm opacity-80">Custom Boxes</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
