import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const cursos = [
  {
    titulo: "Fundamentos de Empresas en Paraguay",
    descripcion: "Aprende los conceptos básicos sobre tipos de empresas y requisitos legales",
    modulos: [
      "Introducción al marco legal",
      "Tipos de sociedades comerciales",
      "Requisitos y documentación",
      "Aspectos fiscales básicos"
    ],
    nivel: "Principiante",
    duracion: "2 horas"
  },
  {
    titulo: "Guía Práctica: Creación de EAS",
    descripcion: "Paso a paso para constituir una Empresa por Acciones Simplificadas",
    modulos: [
      "Ventajas de las EAS",
      "Proceso de constitución",
      "Documentación necesaria",
      "Registro en línea"
    ],
    nivel: "Intermedio",
    duracion: "3 horas"
  },
  {
    titulo: "Gestión Tributaria Empresarial",
    descripcion: "Todo sobre impuestos y obligaciones fiscales para empresas",
    modulos: [
      "Sistema tributario paraguayo",
      "IVA y otros impuestos",
      "Declaraciones juradas",
      "Beneficios fiscales"
    ],
    nivel: "Avanzado",
    duracion: "4 horas"
  }
];

export default function Cursos() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Cursos y Guías</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cursos.map((curso, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{curso.titulo}</CardTitle>
              <CardDescription>{curso.descripcion}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="text-sm text-gray-500">Nivel: {curso.nivel}</p>
                <p className="text-sm text-gray-500">Duración: {curso.duracion}</p>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Contenido del curso:</h3>
                <ul className="list-disc list-inside space-y-1">
                  {curso.modulos.map((modulo, idx) => (
                    <li key={idx} className="text-sm">{modulo}</li>
                  ))}
                </ul>
              </div>
              <Button className="w-full">
                Comenzar Curso
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 