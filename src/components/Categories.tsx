import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, GraduationCap, Settings } from "lucide-react";

const pillars = [
  {
    name: "Formalización",
    icon: FileText,
    description: "Constituye tu empresa de manera legal y rápida con nuestro proceso simplificado",
    path: "/crear-empresa",
    buttonText: "Comenzar ahora →",
    iconClass: "text-blue-500",
  },
  {
    name: "Formación",
    icon: GraduationCap,
    description: "Cursos especializados para emprendedores y empresarios",
    path: "/cursos-y-guias",
    buttonText: "Ver cursos →",
    iconClass: "text-blue-500",
  },
  {
    name: "Administración",
    icon: Settings,
    description: "ERP completo para gestionar tu negocio de manera eficiente",
    path: "/administracion",
    buttonText: "Conocer más →",
    iconClass: "text-blue-500",
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-[#0A0A0A]">
      <div className="container max-w-4xl">
        <div className="flex flex-col space-y-6">
          {pillars.map((pillar) => (
            <Link key={pillar.name} to={pillar.path}>
              <Card className="bg-[#111111] border-[#2A2A2A] transition-all duration-200 hover:bg-[#161616]">
                <CardContent className="p-8">
                  <div className="flex flex-col items-start gap-4">
                    <div className="bg-[#1A1A1A] rounded-full p-4">
                      <pillar.icon className={`h-8 w-8 ${pillar.iconClass}`} />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{pillar.name}</h3>
                    <p className="text-gray-400 text-lg">{pillar.description}</p>
                    <button className="text-white font-medium text-lg mt-2 hover:translate-x-2 transition-transform duration-200">
                      {pillar.buttonText}
                    </button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;