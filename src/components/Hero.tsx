import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Briefcase, Store, Factory } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Imagen de fondo con parallax */}
      <div 
        className="fixed inset-0 w-full h-screen pointer-events-none"
        style={{
          transform: `translateY(${scrollY * -0.15}px)`,
          zIndex: -1
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        <img
          src="/background.jpeg"
          alt=""
          className="w-full h-full object-cover opacity-[0.15] dark:opacity-[0.08]"
        />
      </div>

      <div className="bg-gradient-to-b from-background/5 via-background/50 to-background">
        <div className="container py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
              ¡Crea tu empresa en menos de 48 horas!
            </div>
            
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Constituye tu empresa en Paraguay 100% en línea
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Plataforma oficial para crear tu EAS, SRL o SA de manera rápida y segura.
              </p>
            </div>

            {/* Logo movido abajo del texto */}
            <div className="pt-16">
              <div className="w-32 h-32 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Building2 className="w-16 h-16 text-primary" />
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border-2 border-background">
                  <Building2 className="h-4 w-4 text-primary" />
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border-2 border-background">
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border-2 border-background">
                  <Store className="h-4 w-4 text-primary" />
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border-2 border-background">
                  <Factory className="h-4 w-4 text-primary" />
                </div>
              </div>
              <p>Más de <span className="font-semibold">1,000</span> empresas constituidas exitosamente</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
