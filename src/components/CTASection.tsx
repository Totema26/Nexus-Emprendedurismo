
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comienza tu viaje de aprendizaje hoy
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/80">
            Más de 100,000 estudiantes ya están mejorando sus habilidades y transformando sus carreras con nuestros cursos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/courses">
                Explorar cursos
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
              <Link to="/instructors">
                Conocer instructores
              </Link>
            </Button>
          </div>
          
          <div className="mt-10 text-primary-foreground/80 text-sm">
            <p className="mb-2">Cursos con certificado de finalización</p>
            <div className="flex justify-center space-x-8">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M5 12l5 5l10 -10"></path></svg>
                <span>Acceso de por vida</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M5 12l5 5l10 -10"></path></svg>
                <span>Garantía de 30 días</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M5 12l5 5l10 -10"></path></svg>
                <span>Soporte al estudiante</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
