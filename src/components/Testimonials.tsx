
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    content: "Este curso transformó mi carrera. Pasé de no saber nada de programación a conseguir mi primer trabajo como desarrollador web en menos de 6 meses.",
    author: "Alejandro Pérez",
    position: "Desarrollador Frontend",
    avatar: "https://i.pravatar.cc/150?img=33"
  },
  {
    content: "La calidad del contenido y la estructura del curso son excepcionales. Los instructores explican conceptos complejos de manera fácil de entender.",
    author: "Gabriela Morales",
    position: "Diseñadora UI/UX",
    avatar: "https://i.pravatar.cc/150?img=41"
  },
  {
    content: "Increíble plataforma con cursos actualizados y relevantes. He tomado 3 cursos y cada uno superó mis expectativas. ¡Altamente recomendado!",
    author: "Luis Gutiérrez",
    position: "Emprendedor Digital",
    avatar: "https://i.pravatar.cc/150?img=53"
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-3">Lo que dicen nuestros estudiantes</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          Miles de estudiantes han transformado sus carreras con nuestros cursos. Aquí algunas de sus experiencias.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full border-none shadow-md bg-gradient-to-b from-primary/5 to-background">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-secondary inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                
                <blockquote className="text-lg mb-6 flex-grow">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center mt-auto">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
