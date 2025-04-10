import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const tiposEmpresa = [
  {
    tipo: "EAS",
    descripcion: "Empresa por Acciones Simplificadas",
    caracteristicas: [
      "Constitución simplificada",
      "Capital mínimo flexible",
      "Un solo accionista posible"
    ]
  },
  {
    tipo: "SRL",
    descripcion: "Sociedad de Responsabilidad Limitada",
    caracteristicas: [
      "Responsabilidad limitada al capital aportado",
      "2 a 25 socios",
      "Capital dividido en cuotas"
    ]
  },
  {
    tipo: "SA",
    descripcion: "Sociedad Anónima",
    caracteristicas: [
      "Responsabilidad limitada a las acciones",
      "Sin límite de accionistas",
      "Mayor flexibilidad para transferir acciones"
    ]
  }
];

export default function CrearEmpresa() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Crear Empresa en Paraguay</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tiposEmpresa.map((empresa) => (
          <Card key={empresa.tipo} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{empresa.tipo}</CardTitle>
              <CardDescription>{empresa.descripcion}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 mb-4">
                {empresa.caracteristicas.map((caracteristica, index) => (
                  <li key={index}>{caracteristica}</li>
                ))}
              </ul>
              <Button 
                className="w-full"
                onClick={() => navigate(`/crear-empresa/${empresa.tipo.toLowerCase()}`)}
              >
                Crear {empresa.tipo}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 