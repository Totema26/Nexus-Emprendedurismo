import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Briefcase, Store, Factory, GraduationCap, FileText, Settings } from "lucide-react";

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
          src="public/background.jpeg"
          alt=""
          className="w-full h-full object-cover opacity-[0.15] dark:opacity-[0.08]"
        />
      </div>

      <div className="bg-gradient-to-b from-background/5 via-background/50 to-background min-h-screen">
        <div className="container py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
              ¡Crea tu empresa en menos de 48 horas!
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Constituye tu empresa en Paraguay 100% en línea
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Plataforma oficial para crear tu EAS, SRL o SA de manera rápida y segura.
            </p>

            {/* Sección de Pilares */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
              <div className="bg-card/80 backdrop-blur-sm hover:bg-card/90 transition-colors p-6 rounded-xl border shadow-sm">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Formalización</h3>
                <p className="text-muted-foreground">Constituye tu empresa de manera legal y rápida con nuestro proceso simplificado</p>
                <Button variant="ghost" className="mt-4" asChild>
                  <Link to="/crear-empresa">Comenzar ahora →</Link>
                </Button>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm hover:bg-card/90 transition-colors p-6 rounded-xl border shadow-sm">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Formación</h3>
                <p className="text-muted-foreground">Cursos especializados para emprendedores y empresarios</p>
                <Button variant="ghost" className="mt-4" asChild>
                  <Link to="/cursos">Ver cursos →</Link>
                </Button>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm hover:bg-card/90 transition-colors p-6 rounded-xl border shadow-sm">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Administración</h3>
                <p className="text-muted-foreground">ERP completo para gestionar tu negocio de manera eficiente</p>
                <Button variant="ghost" className="mt-4" asChild>
                  <Link to="/erp">Conocer más →</Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/crear-empresa">
                  Comenzar Trámite
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/tipos-empresa">
                  Comparar Tipos de Empresas
                </Link>
              </Button>
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
