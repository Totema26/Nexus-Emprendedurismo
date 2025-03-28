
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CourseCard from "./CourseCard";
import { courses } from "@/data/coursesData";

const FeaturedCourses = () => {
  const featuredCourses = courses.filter(course => course.featured);
  
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-3">Cursos destacados</h2>
            <p className="text-muted-foreground max-w-2xl">
              Nuestros cursos más populares seleccionados por expertos para ayudarte a alcanzar tus metas profesionales.
            </p>
          </div>
          <Button variant="outline" asChild className="mt-4 md:mt-0">
            <Link to="/courses">Ver todos los cursos</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
