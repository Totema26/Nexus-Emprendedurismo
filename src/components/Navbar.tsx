import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Menu, User } from "lucide-react";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ThemeToggle } from "./ThemeToggle";
import { Input } from "@/components/ui/input";

const menuItems = [
  { name: "Crear Empresa", path: "/crear-empresa" },
  { name: "Cursos y Guías", path: "/cursos-y-guias" },
];

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-4 py-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
              <Button onClick={() => setIsSubscriptionOpen(true)}>
                Suscribirse
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex w-full items-center gap-4 md:gap-6">
          <Link to="/" className="hidden md:flex items-center space-x-2">
            <img 
              src="/NEXUS negro-2.png" 
              alt="Nexus Logo" 
              className="h-8 dark:hidden" 
            />
            <img 
              src="/NEXUS blanco.png" 
              alt="Nexus Logo" 
              className="h-8 hidden dark:block" 
            />
          </Link>

          <div className="hidden md:flex gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-1 items-center justify-end gap-4">
            <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Buscar</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <Input placeholder="¿Qué estás buscando?" />
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={isSubscriptionOpen} onOpenChange={setIsSubscriptionOpen}>
              <DialogTrigger asChild>
                <Button>Suscribirse</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Plan Premium para Emprendedores</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Beneficios Premium:</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        <span>Asesoramiento personalizado para la constitución de tu empresa</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        <span>Acceso a plantillas de documentos legales y contratos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        <span>Sistema de gestión empresarial incluye:
                          <ul className="ml-6 mt-2 space-y-1">
                            <li>• Facturación electrónica</li>
                            <li>• Gestión de impuestos</li>
                            <li>• Control contable</li>
                            <li>• Gestión de empleados</li>
                            <li>• Reportes financieros</li>
                          </ul>
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        <span>Soporte prioritario 24/7</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        <span>Actualizaciones de normativas y requisitos legales</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Por solo 20$ al mes, obtén todas las herramientas necesarias para gestionar tu empresa de manera eficiente y profesional.
                    </p>
                    <Button className="w-full">Obtener Plan Premium</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <ThemeToggle />
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
