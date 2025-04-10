import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Scale, FileSpreadsheet, BookOpen } from "lucide-react";

const categories = [
  {
    name: "Legal",
    icon: Scale,
    description: "Aspectos legales y regulatorios para empresas",
    path: "/cursos-y-guias/legal",
    color: "bg-blue-50 text-blue-600",
    resourceCount: 15
  },
  {
    name: "Trámites",
    icon: FileSpreadsheet,
    description: "Guías paso a paso para procesos administrativos",
    path: "/cursos-y-guias/tramites",
    color: "bg-green-50 text-green-600",
    resourceCount: 12
  },
  {
    name: "Tipos de Empresa",
    icon: Building2,
    description: "Información sobre EAS, SRL, SA y más",
    path: "/cursos-y-guias/tipos-empresa",
    color: "bg-purple-50 text-purple-600",
    resourceCount: 8
  },
  {
    name: "Capacitación",
    icon: BookOpen,
    description: "Cursos y tutoriales para emprendedores",
    path: "/cursos-y-guias/capacitacion",
    color: "bg-orange-50 text-orange-600",
    resourceCount: 20
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-3">Recursos por Categoría</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          Encuentra toda la información necesaria para crear y gestionar tu empresa, organizada por temas.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.name} to={category.path}>
              <Card className="h-full transition-all duration-200 hover:shadow-md hover:translate-y-[-2px]">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                  <p className="text-sm font-medium">{category.resourceCount} recursos</p>
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
