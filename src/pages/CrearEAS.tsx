import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const pasos = [
  {
    titulo: "Verificación de Nombre",
    descripcion: "Verificar disponibilidad del nombre de la empresa en el Registro Público",
    documentos: [
      "Formulario de búsqueda de nombre",
      "Cédula de identidad del solicitante"
    ]
  },
  {
    titulo: "Preparación de Estatutos",
    descripcion: "Redacción del acta constitutiva y estatutos sociales",
    documentos: [
      "Documento de constitución",
      "Estatutos sociales",
      "Declaración de beneficiarios finales"
    ]
  },
  {
    titulo: "Registro Digital",
    descripcion: "Registro en el sistema SUACE para la constitución digital",
    documentos: [
      "Formulario de registro SUACE",
      "Comprobante de pago de tasas",
      "Documentos digitalizados"
    ]
  },
  {
    titulo: "Inscripción Fiscal",
    descripcion: "Obtención del RUC y documentos tributarios",
    documentos: [
      "Formulario de inscripción SET",
      "Comprobante de domicilio",
      "Documentos del representante legal"
    ]
  }
];

export default function CrearEAS() {
  const [pasosCompletados, setPasosCompletados] = useState<{[key: number]: boolean}>({});

  const marcarPasoCompletado = (index: number) => {
    setPasosCompletados(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Crear Empresa por Acciones Simplificadas (EAS)</h1>
      
      <div className="max-w-3xl mx-auto space-y-6">
        {pasos.map((paso, index) => (
          <Card key={index} className={`transition-all ${pasosCompletados[index] ? 'bg-green-50' : ''}`}>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Checkbox
                  checked={pasosCompletados[index]}
                  onCheckedChange={() => marcarPasoCompletado(index)}
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    Paso {index + 1}: {paso.titulo}
                  </h3>
                  <p className="text-gray-600 mb-4">{paso.descripcion}</p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Documentos necesarios:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {paso.documentos.map((doc, idx) => (
                        <li key={idx} className="text-sm text-gray-600">{doc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <Button 
          className="w-full mt-6"
          disabled={Object.keys(pasosCompletados).length < pasos.length}
        >
          Finalizar Proceso
        </Button>
      </div>
    </div>
  );
} 