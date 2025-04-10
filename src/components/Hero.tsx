import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-4">
              ¡Crea tu empresa en menos de 48 horas!
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Constituye tu empresa en Paraguay 100% en línea
            </h1>
            <p className="text-xl text-muted-foreground">
              Plataforma oficial para crear tu EAS, SRL o SA de manera rápida y segura. Respaldado por el gobierno paraguayo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/150?img=1" alt="Usuario" className="w-8 h-8 rounded-full border-2 border-background" />
                <img src="https://i.pravatar.cc/150?img=2" alt="Usuario" className="w-8 h-8 rounded-full border-2 border-background" />
                <img src="https://i.pravatar.cc/150?img=3" alt="Usuario" className="w-8 h-8 rounded-full border-2 border-background" />
                <img src="https://i.pravatar.cc/150?img=4" alt="Usuario" className="w-8 h-8 rounded-full border-2 border-background" />
              </div>
              <p>Más de <span className="font-semibold">1,000</span> empresas constituidas exitosamente</p>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-secondary/10 rounded-full"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 rounded-full"></div>
            
            <div className="relative bg-white shadow-xl rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Creación de empresas en Paraguay" 
                className="w-full h-[400px] object-cover"
              />
              
              <div className="absolute -bottom-6 -right-6 transform rotate-6 bg-white p-4 rounded-lg shadow-lg w-48">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Trámite Express</p>
                    <p className="text-xs text-muted-foreground">48 horas o menos</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-10 -left-8 transform -rotate-6 bg-white p-4 rounded-lg shadow-lg w-48">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Respaldo Oficial</p>
                    <p className="text-xs text-muted-foreground">Gobierno Paraguayo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
