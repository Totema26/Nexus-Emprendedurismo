
import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, BadgeDollarSign, Lightbulb } from "lucide-react";

const categories = [
  {
    name: "Programación",
    icon: Code,
    description: "Desarrollo web, móvil, IA, y más",
    path: "/category/programming",
    color: "bg-blue-50 text-blue-600",
    courseCount: 120
  },
  {
    name: "Diseño",
    icon: Palette,
    description: "UI/UX, gráfico, web, y más",
    path: "/category/design",
    color: "bg-purple-50 text-purple-600",
    courseCount: 85
  },
  {
    name: "Marketing",
    icon: Lightbulb,
    description: "Digital, redes sociales, SEO, y más",
    path: "/category/marketing",
    color: "bg-orange-50 text-orange-600",
    courseCount: 95
  },
  {
    name: "Negocios",
    icon: BadgeDollarSign,
    description: "Emprendimiento, ventas, gestión, y más",
    path: "/category/business",
    color: "bg-green-50 text-green-600",
    courseCount: 78
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-3">Explora por categoría</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          Descubre una amplia variedad de cursos organizados por categorías para encontrar exactamente lo que necesitas.
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
                  <p className="text-sm font-medium">{category.courseCount} cursos</p>
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
