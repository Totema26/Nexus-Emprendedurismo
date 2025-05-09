import React, { useEffect, useRef, useState } from 'react';
import { 
  Building2, // Para formalización - representa una empresa
  GraduationCap, // Para formación - representa educación
  LayoutDashboard // Para administración - representa un dashboard
} from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    id: "formalizacion",
    title: "Formalización",
    subtitle: "Constituye tu empresa de manera legal y rápida",
    description: "Proceso simplificado para crear tu EAS, SRL o SA. Te guiamos en cada paso para formalizar tu empresa en Paraguay.",
    icon: Building2,
    path: "/crear-empresa",
    buttonText: "Comenzar ahora →",
    color: "bg-blue-500",
    iconColor: "text-blue-500"
  },
  {
    id: "formacion",
    title: "Formación",
    subtitle: "Conocimiento que transforma",
    description: "Cursos especializados para emprendedores y empresarios que buscan potenciar su negocio.",
    icon: GraduationCap,
    path: "/cursos-y-guias",
    buttonText: "Ver cursos →",
    color: "bg-green-500",
    iconColor: "text-green-500"
  },
  {
    id: "administracion",
    title: "Administración",
    subtitle: "Control total de tu negocio",
    description: "Sistema integral para gestionar tu empresa de manera eficiente y profesional.",
    icon: LayoutDashboard,
    path: "/administracion",
    buttonText: "Conocer más →",
    color: "bg-purple-500",
    iconColor: "text-purple-500"
  }
];

const DynamicSections = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [animationPhase, setAnimationPhase] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const startOffset = viewportHeight * 0.2;
      
      const scrollProgress = Math.max(0, Math.min(1, 
        (viewportHeight - rect.top - startOffset) / (rect.height * 0.6)
      ));
      
      const totalPhases = sections.length * 3;
      const currentPhaseTotal = Math.floor(scrollProgress * totalPhases);
      
      const newSection = Math.floor(currentPhaseTotal / 3);
      const newPhase = currentPhaseTotal % 3;

      if (newSection >= 0 && newSection < sections.length) {
        setActiveSection(newSection);
        setAnimationPhase(newPhase);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-[#0A0A0A]" ref={containerRef}>
      <div className="min-h-[400vh]">
        <div className="sticky top-1/2 -translate-y-1/2 h-screen flex items-start pt-20 justify-center overflow-hidden">
          <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className={`absolute inset-0 w-full transition-all duration-1000 ease-out
                  ${index === activeSection ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                <div className="flex flex-col">
                  <div className="text-left space-y-16">
                    <div 
                      className={`transition-all duration-700 delay-200 transform
                        ${animationPhase >= 1 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-8'}`}
                    >
                      <div className="mb-8">
                        <div className={`w-32 h-32 rounded-full ${section.color}
                          flex items-center justify-center transition-transform duration-700
                          shadow-lg shadow-${section.color}/20`}
                        >
                          <section.icon className="w-16 h-16 text-white" strokeWidth={1.5} />
                        </div>
                      </div>

                      <h2 className="text-8xl font-bold text-white tracking-tight mb-4">
                        {section.title}
                      </h2>
                      <h3 className="text-3xl text-white/80 font-light">
                        {section.subtitle}
                      </h3>
                    </div>

                    <div 
                      className={`transition-all duration-700 delay-400 transform
                        ${animationPhase >= 2 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-8'}`}
                    >
                      <p className="text-2xl text-gray-300 leading-relaxed mb-10 max-w-3xl">
                        {section.description}
                      </p>
                      <Link
                        to={section.path}
                        className={`inline-flex items-center px-10 py-4 text-xl font-medium text-white 
                          rounded-full transition-all duration-300 ${section.color}
                          transform hover:scale-105 hover:translate-x-2`}
                      >
                        {section.buttonText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-32 bg-gradient-to-b from-[#0A0A0A] to-background" />
    </div>
  );
};

export default DynamicSections; 