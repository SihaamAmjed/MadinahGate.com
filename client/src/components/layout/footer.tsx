import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/10 border-t mt-auto">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-primary">Madinah Gate</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Bringing you the essence of luxury from the heart of Madinah. 
              Premium dates, exclusive perfumes, and finest dry fruits.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/shop" className="hover:text-primary transition-colors">Shop All</Link></li>
              <li><Link href="/shop?category=dates" className="hover:text-primary transition-colors">Premium Dates</Link></li>
              <li><Link href="/shop?category=perfume" className="hover:text-primary transition-colors">Perfumes</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Madinah, Saudi Arabia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+966 50 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@madinahgate.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-background border hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-background border hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-background border hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Madinah Gate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
