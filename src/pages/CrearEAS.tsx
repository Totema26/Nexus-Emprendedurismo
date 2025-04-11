import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, CheckCircle2, AlertCircle, ExternalLink } from "lucide-react";

const pasos = [
  {
    titulo: "Identidad Electrónica",
    descripcion: "El representante legal debe contar con una identidad electrónica válida en Paraguay",
    documentos: [
      "Cédula de identidad paraguaya (ciudadanos)",
      "Cédula de identidad paraguaya (extranjeros)",
      "Identidad electrónica activa"
    ],
    links: [
      {
        texto: "Portal de Identidad Electrónica",
        url: "https://www.paraguay.gov.py/crear-cuenta"
      },
      {
        texto: "Guía de Identidad Electrónica",
        url: "https://www.paraguay.gov.py/identidad-electronica/informacion"
      }
    ]
  },
  {
    titulo: "Acceso a la Plataforma EAS",
    descripcion: "Ingresar al portal oficial de EAS para iniciar el proceso de constitución",
    documentos: [
      "Credenciales de identidad electrónica",
      "Navegador web actualizado",
      "Conexión a internet estable"
    ],
    links: [
      {
        texto: "Portal EAS",
        url: "https://eas.mic.gov.py"
      },
      {
        texto: "Información sobre EAS",
        url: "https://www.mic.gov.py/eas-sa-y-srl-en-que-se-diferencian-estas-tres-constituciones-de-empresas"
      }
    ]
  },
  {
    titulo: "Formulario de Registro",
    descripcion: "Completar la información requerida sobre la empresa y los socios",
    documentos: [
      "Datos personales del representante",
      "Información de la empresa",
      "Estadísticas de la empresa",
      "Datos de los accionistas"
    ],
    links: []
  },
  {
    titulo: "Firma Digital",
    descripcion: "Validar y formalizar la documentación presentada",
    documentos: [
      "Certificado digital vigente",
      "Clave de firma electrónica",
      "Documentos completos"
    ],
    links: []
  },
  {
    titulo: "Trámites Posteriores (SUACE)",
    descripcion: "Completar los trámites adicionales a través del Sistema Unificado de Apertura y Cierre de Empresas",
    documentos: [
      "Obtención del RUC",
      "Inscripción en IPS",
      "Registro en Ministerio de Trabajo",
      "Licencia municipal"
    ],
    links: [
      {
        texto: "Sistema SUACE",
        url: "https://www.suace.gov.py"
      }
    ]
  }
];

export default function CrearEAS() {
  const [pasosCompletados, setPasosCompletados] = useState<{[key: number]: boolean}>({});
  const [pasoActual, setPasoActual] = useState(0);

  const marcarPasoCompletado = (index: number) => {
    setPasosCompletados(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const avanzarPaso = () => {
    if (pasoActual < pasos.length - 1) {
      setPasoActual(pasoActual + 1);
    }
  };

  const retrocederPaso = () => {
    if (pasoActual > 0) {
      setPasoActual(pasoActual - 1);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Crear Empresa por Acciones Simplificadas (EAS)</h1>
      
      <Alert className="mb-8">
        <Info className="h-4 w-4" />
        <AlertTitle>Proceso 100% en línea</AlertTitle>
        <AlertDescription>
          La EAS es la forma más ágil de constituir una empresa en Paraguay. Todo el proceso se realiza de manera digital a través del portal oficial del MIC.
        </AlertDescription>
      </Alert>
      
      <div className="max-w-3xl mx-auto space-y-6">
        {pasos.map((paso, index) => (
          <Card 
            key={index} 
            className={`transition-all ${index === pasoActual ? 'border-primary' : ''} ${
              pasosCompletados[index] ? 'bg-green-50 dark:bg-green-900/20' : ''
            }`}
          >
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    pasosCompletados[index] ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400' : 
                    index === pasoActual ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                  }`}>
                    {pasosCompletados[index] ? <CheckCircle2 className="h-4 w-4" /> : index + 1}
                  </div>
                  {index < pasos.length - 1 && (
                    <div className={`h-16 w-0.5 ${
                      pasosCompletados[index] ? 'bg-green-200 dark:bg-green-800' : 'bg-gray-200 dark:bg-gray-700'
                    }`} />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    Paso {index + 1}: {paso.titulo}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{paso.descripcion}</p>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Documentos necesarios:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {paso.documentos.map((doc, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-300">{doc}</li>
                      ))}
                    </ul>
                  </div>

                  {paso.links.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {paso.links.map((link, idx) => (
                        <Button 
                          key={idx}
                          variant="outline" 
                          className="w-full justify-start dark:border-gray-700 dark:hover:bg-gray-800"
                          onClick={() => window.open(link.url, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {link.texto}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <div className="flex justify-between mt-6">
          <Button 
            variant="outline"
            onClick={retrocederPaso}
            disabled={pasoActual === 0}
            className="dark:border-gray-700 dark:hover:bg-gray-800"
          >
            Anterior
          </Button>
          <Button 
            onClick={avanzarPaso}
            disabled={pasoActual === pasos.length - 1}
          >
            Siguiente
          </Button>
        </div>

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