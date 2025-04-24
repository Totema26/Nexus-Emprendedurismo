import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const recursos = [
  {
    id: 1,
    titulo: "Comparativa EAS vs SRL",
    descripcion: "Análisis detallado de las diferencias entre Empresa por Acciones Simplificadas y Sociedad de Responsabilidad Limitada",
    duracion: "15 minutos",
    categoria: "Comparativa",
    fecha: "15 de Marzo, 2024",
    contenido: [
      {
        titulo: "Ventajas y Desventajas",
        texto: `La EAS y la SRL son dos de las formas jurídicas más populares para constituir una empresa en Paraguay. Cada una tiene sus propias características que pueden ser más o menos ventajosas según tus necesidades.

La EAS destaca por:
- Proceso de constitución 100% en línea
- Requisitos de capital flexibles
- Posibilidad de tener un solo accionista
- Mayor flexibilidad operativa

La SRL, por su parte, ofrece:
- Mayor tradición y reconocimiento en el mercado
- Proceso de constitución más estructurado
- Limitación de responsabilidad al capital aportado
- Ideal para empresas familiares o pequeños grupos`
      },
      {
        titulo: "Casos de Uso",
        texto: `¿Cuándo elegir cada tipo de empresa?

La EAS es ideal para:
- Emprendimientos individuales
- Startups tecnológicas
- Empresas que necesitan constituirse rápidamente
- Negocios con estructura simple

La SRL es más adecuada para:
- Empresas familiares
- Negocios tradicionales
- Cuando se busca una estructura más formal
- Proyectos con varios socios`
      },
      {
        titulo: "Recomendaciones",
        texto: `Factores a considerar para tu decisión:

1. Tiempo disponible para la constitución
2. Número de socios o accionistas
3. Capital inicial disponible
4. Proyección de crecimiento
5. Sector de actividad
6. Necesidades de financiamiento futuro

La elección entre EAS y SRL dependerá de tus objetivos específicos y circunstancias particulares.`
      }
    ]
  },
  {
    id: 2,
    titulo: "Documentos Necesarios para Crear tu Empresa",
    descripcion: "Lista completa y detallada de los requisitos documentales para constituir tu empresa",
    duracion: "10 minutos",
    categoria: "Trámites",
    fecha: "14 de Marzo, 2024",
    contenido: [
      {
        titulo: "Documentos Personales",
        texto: `Para iniciar el proceso de constitución de tu empresa, necesitarás tener preparados los siguientes documentos personales:

1. Cédula de identidad vigente
2. Certificado de antecedentes penales (vigencia 6 meses)
3. Certificado de residencia
4. Declaración jurada de domicilio
5. Referencias comerciales (si aplica)

Es importante que todos los documentos estén vigentes y sean originales o copias autenticadas según corresponda.`
      },
      {
        titulo: "Documentos Empresariales",
        texto: `Una vez tengas los documentos personales, deberás preparar:

1. Reserva de nombre (verificar disponibilidad)
2. Borrador del contrato social o estatutos
3. Acta de constitución
4. Registro de accionistas/socios
5. Plan de negocios básico
6. Declaración de origen de fondos`
      },
      {
        titulo: "Trámites Adicionales",
        texto: `Después de la constitución, deberás realizar:

1. Inscripción en el RUC (SET)
2. Registro en IPS
3. Obtención de licencia municipal
4. Apertura de cuenta bancaria empresarial
5. Registro de marca (si aplica)

Cada trámite tiene sus propios requisitos y tiempos de procesamiento.`
      }
    ]
  },
  {
    id: 3,
    titulo: "Costos y Tasas para Crear una Empresa",
    descripcion: "Desglose detallado de los costos asociados a la constitución y mantenimiento de una empresa",
    duracion: "5 minutos",
    categoria: "Finanzas",
    fecha: "13 de Marzo, 2024",
    contenido: [
      {
        titulo: "Costos Iniciales",
        texto: `Los costos iniciales para constituir tu empresa incluyen:

1. Tasas de registro: 
   - Reserva de nombre: Gs. 100.000
   - Inscripción: Gs. 500.000
   - Publicación: Gs. 250.000

2. Honorarios profesionales:
   - Escribano: desde Gs. 2.000.000
   - Abogado (opcional): desde Gs. 1.500.000

3. Otros gastos:
   - Certificaciones: Gs. 50.000 c/u
   - Copias autenticadas: Gs. 20.000 c/u`
      },
      {
        titulo: "Costos Mensuales",
        texto: `Gastos recurrentes a considerar:

1. Impuestos:
   - IVA (según facturación)
   - IRACIS/SIMPLE (según régimen)
   - Patente comercial

2. Aportes:
   - IPS: 16.5% sobre salarios
   - Aporte obrero: 9%

3. Servicios:
   - Contabilidad: desde Gs. 500.000
   - Alquiler (si aplica)
   - Servicios básicos`
      },
      {
        titulo: "Costos Anuales",
        texto: `Gastos que deberás considerar anualmente:

1. Renovaciones:
   - Licencia municipal
   - Registros especiales
   - Certificaciones

2. Declaraciones:
   - Balance impositivo
   - Informes IPS
   - Declaración jurada

3. Mantenimiento:
   - Actualización de sistemas
   - Capacitación
   - Auditorías (si aplica)`
      }
    ]
  }
];

export default function Recursos() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Guía para Crear tu Empresa</h1>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Todo lo que necesitas saber sobre el proceso de creación y gestión de empresas en Paraguay.
      </p>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {recursos.map((recurso) => (
          <Card key={recurso.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{recurso.categoria}</Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Lectura: {recurso.duracion}</span>
                  </div>
                </div>
                <CardTitle className="text-2xl">{recurso.titulo}</CardTitle>
                <CardDescription className="text-base">{recurso.descripcion}</CardDescription>
                <p className="text-sm text-muted-foreground">{recurso.fecha}</p>
              </div>
            </CardHeader>
            <CardContent>
              <Button className="w-full" asChild>
                <Link to={`/recursos/${recurso.id}`} className="flex items-center justify-center gap-2">
                  Leer artículo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 