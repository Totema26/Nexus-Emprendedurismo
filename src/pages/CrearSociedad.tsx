import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, CheckCircle2, AlertCircle, ExternalLink } from "lucide-react";
import { useParams } from 'react-router-dom';

const pasosSRL = [
  {
    titulo: "Reserva del Nombre",
    descripcion: "Verificar y reservar la denominación social en la Dirección General de Registros Públicos",
    documentos: [
      "Formulario de búsqueda de nombre",
      "Cédula de identidad del solicitante",
      "Comprobante de pago de tasas"
    ],
    links: [
      {
        texto: "Dirección General de Registros Públicos",
        url: "https://www.dgrp.gov.py"
      }
    ]
  },
  {
    titulo: "Redacción de la Escritura",
    descripcion: "Elaborar el contrato social con la información requerida",
    documentos: [
      "Identificación de los socios",
      "Objeto social detallado",
      "Capital social y participación",
      "Domicilio de la sociedad",
      "Órganos de administración"
    ],
    links: []
  },
  {
    titulo: "Protocolización Notarial",
    descripcion: "Formalizar la escritura de constitución ante un escribano público",
    documentos: [
      "Escritura de constitución",
      "Documentos de identidad de socios",
      "Comprobante de pago de honorarios"
    ],
    links: []
  },
  {
    titulo: "Inscripción en Registros",
    descripcion: "Registrar la sociedad en la Dirección General de Registros Públicos",
    documentos: [
      "Escritura protocolizada",
      "Comprobante de pago de tasas",
      "Formularios de inscripción"
    ],
    links: [
      {
        texto: "Dirección General de Registros Públicos",
        url: "https://www.dgrp.gov.py"
      }
    ]
  },
  {
    titulo: "Obtención del RUC",
    descripcion: "Inscribir la sociedad en el Registro Único de Contribuyentes",
    documentos: [
      "Certificado de inscripción",
      "Documentos de identidad del representante",
      "Comprobante de domicilio"
    ],
    links: [
      {
        texto: "Subsecretaría de Estado de Tributación",
        url: "https://www.set.gov.py"
      }
    ]
  },
  {
    titulo: "Inscripción en IPS",
    descripcion: "Registrar la empresa en el Instituto de Previsión Social",
    documentos: [
      "Certificado de inscripción",
      "RUC",
      "Documentos de identidad del representante"
    ],
    links: [
      {
        texto: "Instituto de Previsión Social",
        url: "https://www.ips.gov.py"
      }
    ]
  },
  {
    titulo: "Registro en MTESS",
    descripcion: "Registrar la empresa en el Ministerio de Trabajo",
    documentos: [
      "Certificado de inscripción",
      "RUC",
      "Documentos de identidad del representante"
    ],
    links: [
      {
        texto: "Ministerio de Trabajo",
        url: "https://www.mtess.gov.py"
      }
    ]
  },
  {
    titulo: "Licencia Municipal",
    descripcion: "Solicitar la licencia de funcionamiento en la municipalidad",
    documentos: [
      "Certificado de inscripción",
      "RUC",
      "Planos del local",
      "Certificado de habilitación"
    ],
    links: [
      {
        texto: "Municipalidad de Asunción",
        url: "https://www.mca.gov.py"
      }
    ]
  }
];

const pasosSA = [
  {
    titulo: "Reserva del Nombre",
    descripcion: "Verificar y reservar la denominación social en la Dirección General de Registros Públicos",
    documentos: [
      "Formulario de búsqueda de nombre",
      "Cédula de identidad del solicitante",
      "Comprobante de pago de tasas"
    ],
    links: [
      {
        texto: "Dirección General de Registros Públicos",
        url: "https://www.dgrp.gov.py"
      }
    ]
  },
  {
    titulo: "Redacción de la Escritura",
    descripcion: "Elaborar el acta constitutiva con la información requerida",
    documentos: [
      "Identificación de los accionistas",
      "Objeto social detallado",
      "Capital social y acciones",
      "Domicilio de la sociedad",
      "Órganos de administración"
    ],
    links: []
  },
  {
    titulo: "Protocolización Notarial",
    descripcion: "Formalizar la escritura de constitución ante un escribano público",
    documentos: [
      "Escritura de constitución",
      "Documentos de identidad de accionistas",
      "Comprobante de pago de honorarios"
    ],
    links: []
  },
  {
    titulo: "Inscripción en Registros",
    descripcion: "Registrar la sociedad en la Dirección General de Registros Públicos",
    documentos: [
      "Escritura protocolizada",
      "Comprobante de pago de tasas",
      "Formularios de inscripción"
    ],
    links: [
      {
        texto: "Dirección General de Registros Públicos",
        url: "https://www.dgrp.gov.py"
      }
    ]
  },
  {
    titulo: "Obtención del RUC",
    descripcion: "Inscribir la sociedad en el Registro Único de Contribuyentes",
    documentos: [
      "Certificado de inscripción",
      "Documentos de identidad del representante",
      "Comprobante de domicilio"
    ],
    links: [
      {
        texto: "Subsecretaría de Estado de Tributación",
        url: "https://www.set.gov.py"
      }
    ]
  },
  {
    titulo: "Inscripción en IPS",
    descripcion: "Registrar la empresa en el Instituto de Previsión Social",
    documentos: [
      "Certificado de inscripción",
      "RUC",
      "Documentos de identidad del representante"
    ],
    links: [
      {
        texto: "Instituto de Previsión Social",
        url: "https://www.ips.gov.py"
      }
    ]
  },
  {
    titulo: "Registro en MTESS",
    descripcion: "Registrar la empresa en el Ministerio de Trabajo",
    documentos: [
      "Certificado de inscripción",
      "RUC",
      "Documentos de identidad del representante"
    ],
    links: [
      {
        texto: "Ministerio de Trabajo",
        url: "https://www.mtess.gov.py"
      }
    ]
  },
  {
    titulo: "Licencia Municipal",
    descripcion: "Solicitar la licencia de funcionamiento en la municipalidad",
    documentos: [
      "Certificado de inscripción",
      "RUC",
      "Planos del local",
      "Certificado de habilitación"
    ],
    links: [
      {
        texto: "Municipalidad de Asunción",
        url: "https://www.mca.gov.py"
      }
    ]
  }
];

export default function CrearSociedad() {
  const { tipo } = useParams();
  const [pasosCompletados, setPasosCompletados] = useState<{[key: number]: boolean}>({});
  const [pasoActual, setPasoActual] = useState(0);

  const pasos = tipo === 'srl' ? pasosSRL : pasosSA;
  const titulo = tipo === 'srl' ? 'Sociedad de Responsabilidad Limitada (SRL)' : 'Sociedad Anónima (SA)';

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
      <h1 className="text-3xl font-bold mb-8 text-center">Crear {titulo}</h1>
      
      <Alert className="mb-8">
        <Info className="h-4 w-4" />
        <AlertTitle>Proceso Presencial</AlertTitle>
        <AlertDescription>
          La constitución de {tipo === 'srl' ? 'una SRL' : 'una SA'} requiere varios pasos presenciales y la intervención de un escribano público. 
          El proceso completo puede tomar varios días y requiere visitar diferentes instituciones.
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