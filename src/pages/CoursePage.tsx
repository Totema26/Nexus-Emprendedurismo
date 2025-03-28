
import React from 'react';
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Play, CheckCircle, Star, Clock, BarChart3, Award, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { courses } from "@/data/coursesData";

const CoursePage = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container py-12">
          <h1 className="text-2xl font-bold mb-4">Curso no encontrado</h1>
          <p className="mb-4">Lo sentimos, el curso que buscas no existe.</p>
          <Button asChild>
            <Link to="/courses">Ver todos los cursos</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const {
    title,
    description,
    price,
    image,
    instructor,
    level,
    rating,
    students,
    duration,
    curriculum
  } = course;

  // Calcular el total de lecciones
  const totalLessons = curriculum.reduce(
    (total, section) => total + section.lessons.length,
    0
  );

  // Calcular duración total en formato de horas y minutos
  const totalDuration = duration;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-primary/5 pt-12 pb-8 border-b">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="inline-block mb-3">
                <Badge variant="outline" className="rounded-full px-3 py-1 bg-secondary/10 text-secondary border-secondary/20">
                  {level}
                </Badge>
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">{title}</h1>
              <p className="text-lg mb-6 text-muted-foreground">{description}</p>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <span className="font-medium">{rating}</span>
                  <span className="text-muted-foreground">({students.toLocaleString()} estudiantes)</span>
                </div>
                
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{totalDuration}</span>
                </div>
                
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Play className="h-4 w-4" />
                  <span>{totalLessons} lecciones</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mb-8">
                <img 
                  src={instructor.avatar} 
                  alt={instructor.name} 
                  className="w-12 h-12 rounded-full border-2 border-background object-cover"
                />
                <div>
                  <p className="font-medium">Creado por</p>
                  <p className="text-muted-foreground">{instructor.name}</p>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <Button size="icon" className="rounded-full h-16 w-16">
                      <Play className="h-8 w-8" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-bold">${price.toLocaleString('es-ES')}</span>
                  </div>
                  
                  <div className="space-y-4">
                    <Button className="w-full text-base" size="lg">
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Comprar ahora
                    </Button>
                    
                    <Button variant="outline" className="w-full text-base" size="lg">
                      Agregar al carrito
                    </Button>
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <p className="text-sm text-center text-muted-foreground">Garantía de devolución de 30 días</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div>
                          <p className="font-medium">Acceso completo de por vida</p>
                          <p className="text-sm text-muted-foreground">Accede al curso cuando quieras</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <BarChart3 className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div>
                          <p className="font-medium">Actualizaciones constantes</p>
                          <p className="text-sm text-muted-foreground">Contenido siempre actualizado</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div>
                          <p className="font-medium">Certificado de finalización</p>
                          <p className="text-sm text-muted-foreground">Al completar el curso</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <main className="flex-grow container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Tabs defaultValue="content">
              <TabsList className="mb-8">
                <TabsTrigger value="content">Contenido del curso</TabsTrigger>
                <TabsTrigger value="reviews">Reseñas</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
              </TabsList>
              
              <TabsContent value="content" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">¿Qué aprenderás?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {Array(6).fill(0).map((_, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <p>Objetivo de aprendizaje #{i+1} de este curso completo.</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">Programa del curso</h2>
                  <p className="text-muted-foreground mb-6">
                    {totalLessons} lecciones • {totalDuration} de duración total
                  </p>
                  
                  <Accordion type="multiple" defaultValue={["section-0"]} className="border rounded-lg">
                    {curriculum.map((section, sectionIndex) => (
                      <AccordionItem key={section.section} value={`section-${sectionIndex}`}>
                        <AccordionTrigger className="px-6 hover:no-underline hover:bg-primary/5">
                          <div className="flex flex-col items-start">
                            <p className="font-semibold">{section.section}</p>
                            <p className="text-sm text-muted-foreground font-normal">
                              {section.lessons.length} lecciones
                            </p>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-0">
                          <div className="divide-y">
                            {section.lessons.map((lesson, lessonIndex) => (
                              <div 
                                key={lessonIndex} 
                                className="flex items-center justify-between p-4 px-6 hover:bg-muted/40 transition-colors"
                              >
                                <div className="flex items-center gap-3">
                                  {lesson.preview ? (
                                    <Play className="h-5 w-5 text-primary" />
                                  ) : (
                                    <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center text-xs">
                                      {lessonIndex + 1}
                                    </div>
                                  )}
                                  <p className={lesson.preview ? "font-medium" : ""}>
                                    {lesson.title}
                                  </p>
                                </div>
                                <div className="flex items-center gap-3">
                                  {lesson.preview && (
                                    <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5">
                                      Vista previa
                                    </Badge>
                                  )}
                                  <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Reseñas de estudiantes</h2>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="text-center">
                      <p className="text-5xl font-bold">{rating}</p>
                      <div className="flex mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-5 w-5 ${i < Math.floor(rating) ? "fill-secondary text-secondary" : "text-muted-foreground/30"}`} />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Calificación del curso</p>
                    </div>
                    
                    <div className="flex-1">
                      {[5, 4, 3, 2, 1].map((star) => {
                        const percentage = star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 7 : star === 2 ? 2 : 1;
                        return (
                          <div key={star} className="flex items-center gap-3">
                            <div className="flex items-center w-16">
                              <Star className="h-4 w-4 fill-secondary text-secondary" />
                              <span className="ml-1 text-sm">{star}</span>
                            </div>
                            <div className="flex-1 h-2 bg-muted rounded overflow-hidden">
                              <div 
                                className="h-full bg-secondary"
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-muted-foreground w-10">
                              {percentage}%
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <Card key={i} className="p-6">
                        <div className="flex items-start gap-4">
                          <img 
                            src={`https://i.pravatar.cc/150?img=${i + 20}`} 
                            alt="Reviewer" 
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between mb-2">
                              <h4 className="font-semibold">Estudiante #{i}</h4>
                              <span className="text-sm text-muted-foreground">hace {i} semanas</span>
                            </div>
                            <div className="flex mb-3">
                              {[...Array(5)].map((_, j) => (
                                <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />
                              ))}
                            </div>
                            <p>
                              Este curso superó mis expectativas. El contenido está muy bien estructurado
                              y el instructor explica los conceptos de manera clara y fácil de seguir.
                              Realmente recomiendo este curso a cualquiera que quiera aprender sobre este tema.
                            </p>
                          </div>
                        </div>
                      </Card>
                    ))}
                    
                    <Button variant="outline" className="w-full">Cargar más reseñas</Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="instructor">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Sobre el instructor</h2>
                  
                  <div className="flex flex-col md:flex-row gap-6 mb-8">
                    <img 
                      src={instructor.avatar} 
                      alt={instructor.name} 
                      className="w-32 h-32 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{instructor.name}</h3>
                      <p className="text-muted-foreground mb-4">Especialista en {course.category}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-2xl font-bold">4.8</p>
                          <p className="text-sm text-muted-foreground">Calificación del instructor</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold">24,583</p>
                          <p className="text-sm text-muted-foreground">Estudiantes</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold">8</p>
                          <p className="text-sm text-muted-foreground">Cursos</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Biografía del instructor</h3>
                    <p className="mb-3">
                      Soy un profesional con más de 10 años de experiencia en la industria. Me especializo en 
                      {course.category} y he trabajado con empresas líderes del sector como Google, Amazon y Facebook.
                    </p>
                    <p className="mb-3">
                      Mi enfoque de enseñanza se basa en proporcionar ejemplos prácticos y aplicables al mundo real, 
                      para que puedas aplicar lo aprendido inmediatamente en tu trabajo o proyectos personales.
                    </p>
                    <p>
                      Me apasiona compartir mi conocimiento y ayudar a otros a alcanzar sus metas profesionales
                      a través de la educación en línea.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CoursePage;
