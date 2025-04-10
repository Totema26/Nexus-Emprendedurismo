import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen } from "lucide-react";

const recursos = [
  {
    id: 1,
    titulo: "Comparativa EAS vs SRL",
    descripcion: "Elige el tipo de empresa que mejor se adapte a tus necesidades",
    duracion: "15 minutos",
    tipo: "Guía",
    categoria: "Comparativa"
  },
  {
    id: 2,
    titulo: "Documentos Necesarios",
    descripcion: "Lista completa de requisitos para constituir tu empresa",
    duracion: "10 minutos",
    tipo: "Checklist",
    categoria: "Trámites"
  },
  {
    id: 3,
    titulo: "Costos y Tasas",
    descripcion: "Información detallada sobre los costos del proceso",
    duracion: "5 minutos",
    tipo: "Informativo",
    categoria: "Finanzas"
  }
];

const FeaturedCourses = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-3">Recursos Complementarios</h2>
            <p className="text-muted-foreground max-w-2xl">
              Material de apoyo para ayudarte durante el proceso de creación de tu empresa.
            </p>
          </div>
          <Button variant="outline" asChild className="mt-4 md:mt-0">
            <Link to="/recursos">Ver todos los recursos</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recursos.map((recurso) => (
            <Card key={recurso.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl mb-2">{recurso.titulo}</CardTitle>
                  <Badge variant="secondary">{recurso.tipo}</Badge>
                </div>
                <CardDescription>{recurso.descripcion}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Lectura: {recurso.duracion}</span>
                  </div>
                </div>
                <Button variant="secondary" className="w-full mt-4" asChild>
                  <Link to={`/recursos/${recurso.id}`}>
                    Consultar
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
