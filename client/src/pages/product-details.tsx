import { useRoute, Link } from "wouter";
import { products } from "@/lib/data";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Minus, Plus, ArrowLeft } from "lucide-react";
import { useState } from "react";
import NotFound from "@/pages/not-found";

export default function ProductDetails() {
  const [, params] = useRoute("/product/:id");
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === params?.id);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="container px-4 md:px-6 py-12">
      <Link href="/shop" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg bg-muted shadow-md">
          {product.featured && (
            <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-lg py-1 px-3">
              Featured
            </Badge>
          )}
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating) ? "fill-current" : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({product.rating} Rating)</span>
          </div>

          <h1 className="font-serif text-4xl font-bold text-primary mb-4">{product.name}</h1>
          <p className="text-2xl font-medium mb-6">${product.price}</p>
          
          <div className="prose prose-stone mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Quantity</span>
              <div className="flex items-center gap-2 rounded-md border p-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center text-lg font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="flex-1 text-lg h-14"
                onClick={() => addToCart(product, quantity)}
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t space-y-4">
            <h3 className="font-serif text-lg font-bold">Product Details</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Category: <span className="capitalize">{product.category}</span></li>
              <li>Premium Quality Guarantee</li>
              <li>Sourced from Trusted Suppliers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
