
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu } from "lucide-react";
import { 
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";

const categories = [
  { name: "Programación", path: "/category/programming" },
  { name: "Diseño", path: "/category/design" },
  { name: "Marketing", path: "/category/marketing" },
  { name: "Negocios", path: "/category/business" },
];

const Navbar = () => {
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-2xl font-bold text-primary">
            CursoHive
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            {categories.map((category) => (
              <Link 
                key={category.path}
                to={category.path}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              placeholder="Buscar cursos..."
              className="pl-8 h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button>Ingresar</Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 py-4">
              <div className="relative w-full">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  placeholder="Buscar cursos..."
                  className="pl-8 h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
              </div>
              <nav className="flex flex-col space-y-3">
                {categories.map((category) => (
                  <Link 
                    key={category.path}
                    to={category.path}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="outline">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Carrito
                </Button>
                <Button>Ingresar</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
