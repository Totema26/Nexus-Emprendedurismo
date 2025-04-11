import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { Building2, Users, FileText } from "lucide-react";

const tiposEmpresa = [
  {
    tipo: "EAS",
    descripcion: "Empresa por Acciones Simplificadas",
    icon: Building2,
    caracteristicas: [
      "Constitución 100% en línea",
      "Capital mínimo flexible",
      "Un solo accionista posible",
      "Proceso simplificado de constitución",
      "Identidad electrónica requerida",
      "Firma digital necesaria"
    ],
    pasos: [
      "Obtener identidad electrónica",
      "Acceder a la plataforma oficial",
      "Completar formulario de registro",
      "Firmar digitalmente documentos",
      "Obtener inscripción y RUC"
    ]
  },
  {
    tipo: "SRL",
    descripcion: "Sociedad de Responsabilidad Limitada",
    icon: Users,
    caracteristicas: [
      "2 a 25 socios",
      "Responsabilidad limitada al capital",
      "Capital dividido en cuotas",
      "Proceso presencial",
      "Protocolización notarial",
      "Inscripción en registros públicos"
    ],
    pasos: [
      "Reserva del nombre",
      "Redacción de escritura de constitución",
      "Protocolización notarial",
      "Inscripción en registros públicos",
      "Obtención del RUC",
      "Licencia municipal",
      "Apertura de cuenta bancaria"
    ]
  },
  {
    tipo: "SA",
    descripcion: "Sociedad Anónima",
    icon: FileText,
    caracteristicas: [
      "Mínimo 2 accionistas",
      "Sin límite máximo de accionistas",
      "Capital dividido en acciones",
      "Proceso presencial",
      "Protocolización notarial",
      "Inscripción en registros públicos"
    ],
    pasos: [
      "Reserva del nombre",
      "Redacción de escritura de constitución",
      "Protocolización notarial",
      "Inscripción en registros públicos",
      "Obtención del RUC",
      "Licencia municipal",
      "Apertura de cuenta bancaria"
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
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <empresa.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>{empresa.tipo}</CardTitle>
                  <CardDescription>{empresa.descripcion}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Características principales:</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {empresa.caracteristicas.map((caracteristica, index) => (
                      <li key={index}>{caracteristica}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Pasos para la constitución:</h3>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                    {empresa.pasos.map((paso, index) => (
                      <li key={index}>{paso}</li>
                    ))}
                  </ol>
                </div>
              </div>
              <Button 
                className="w-full mt-6"
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