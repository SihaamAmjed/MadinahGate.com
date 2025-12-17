import { Link, useLocation } from "wouter";
import { useCart } from "@/context/cart-context";
import { useAuth } from "@/context/auth-context";
import { ShoppingBag, User, Menu, Search, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { CartDrawer } from "@/components/product/cart-drawer";

export function Navbar() {
  const { count, setIsCartOpen } = useCart();
  const { user, logout } = useAuth();
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Mobile Menu */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-6 py-6">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <span className="font-serif text-2xl font-bold text-primary cursor-pointer">Madinah Gate</span>
              </Link>
              <div className="flex flex-col gap-4">
                {links.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
                    <span className={`text-lg font-medium transition-colors hover:text-primary cursor-pointer ${location === link.href ? "text-primary" : "text-muted-foreground"}`}>
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/">
          <span className="hidden md:flex font-serif text-2xl font-bold text-primary tracking-tight cursor-pointer">
            Madinah Gate
          </span>
        </Link>
        <Link href="/">
          <span className="flex md:hidden font-serif text-xl font-bold text-primary tracking-tight cursor-pointer">
            MG
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer uppercase tracking-wider ${location === link.href ? "text-primary" : "text-muted-foreground"}`}>
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* User Menu */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {user.role === 'admin' && (
                  <DropdownMenuItem asChild>
                    <Link href="/admin">Admin Dashboard</Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem onClick={logout} className="text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/auth">
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">Login</span>
              </Button>
            </Link>
          )}

          {/* Cart */}
          <Button
            variant="ghost"
            size="icon"
            className="relative rounded-full"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground animate-in zoom-in">
                {count}
              </span>
            )}
            <span className="sr-only">Open cart</span>
          </Button>
        </div>
      </div>
      <CartDrawer />
    </nav>
  );
}
