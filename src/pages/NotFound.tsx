
import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="container max-w-3xl py-16 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-6">Página no encontrada</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Lo sentimos, no pudimos encontrar la página que estás buscando.
          </p>
          <div className="space-x-4">
            <Button size="lg" asChild>
              <Link to="/">Volver al inicio</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/courses">Explorar cursos</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
