import { Product } from "@/lib/data";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Eye } from "lucide-react";
import { Link } from "wouter";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card className="group overflow-hidden border-none shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        {product.featured && (
          <Badge className="absolute top-2 left-2 z-10 bg-primary text-primary-foreground">
            Featured
          </Badge>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <Button 
            size="icon" 
            variant="secondary" 
            className="rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            asChild
          >
            <Link href={`/product/${product.id}`}>
              <Eye className="h-5 w-5" />
            </Link>
          </Button>
          <Button 
            size="icon" 
            className="rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <CardContent className="pt-4">
        <div className="mb-2 flex items-center gap-1">
          <Star className="h-3 w-3 fill-primary text-primary" />
          <span className="text-xs font-medium text-muted-foreground">{product.rating}</span>
        </div>
        <Link href={`/product/${product.id}`}>
          <h3 className="font-serif text-lg font-medium hover:text-primary transition-colors cursor-pointer line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-0">
        <span className="font-serif text-lg font-bold text-primary">${product.price}</span>
        <Button variant="outline" size="sm" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
