
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Aprende nuevas habilidades para tu futuro
            </h1>
            <p className="text-xl text-muted-foreground">
              Miles de cursos de calidad impartidos por expertos para impulsar tu carrera y desarrollo personal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/courses">
                  Explorar Cursos
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/instructors">
                  Conoce a los Instructores
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/150?img=1" alt="User" className="w-8 h-8 rounded-full border-2 border-background" />
                <img src="https://i.pravatar.cc/150?img=2" alt="User" className="w-8 h-8 rounded-full border-2 border-background" />
                <img src="https://i.pravatar.cc/150?img=3" alt="User" className="w-8 h-8 rounded-full border-2 border-background" />
                <img src="https://i.pravatar.cc/150?img=4" alt="User" className="w-8 h-8 rounded-full border-2 border-background" />
              </div>
              <p>Únete a más de <span className="font-semibold">100,000</span> estudiantes</p>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-secondary/10 rounded-full"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 rounded-full"></div>
            
            <div className="relative bg-white shadow-xl rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Estudiante aprendiendo" 
                className="w-full object-cover"
              />
              
              <div className="absolute -bottom-6 -right-6 transform rotate-6 bg-white p-4 rounded-lg shadow-lg w-48">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Cursos destacados</p>
                    <p className="text-xs text-muted-foreground">+500 cursos</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-10 -left-8 transform -rotate-6 bg-white p-4 rounded-lg shadow-lg w-48">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Instructores expertos</p>
                    <p className="text-xs text-muted-foreground">Profesionales</p>
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
