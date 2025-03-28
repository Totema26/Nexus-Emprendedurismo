
import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Course } from "@/data/coursesData";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const {
    id,
    title,
    instructor,
    price,
    image,
    rating,
    students,
    level,
    duration
  } = course;

  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-200 hover:shadow-md">
      <Link to={`/courses/${id}`} className="h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {price === 0 ? (
            <Badge variant="secondary" className="absolute top-3 right-3 bg-secondary">
              Gratis
            </Badge>
          ) : null}
        </div>
        
        <CardContent className="flex-grow flex flex-col pt-4">
          <h3 className="font-semibold text-lg line-clamp-2 mb-2">{title}</h3>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{level}</span>
            <span className="h-1 w-1 bg-muted-foreground rounded-full"></span>
            <span>{duration}</span>
          </div>
          
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">({students.toLocaleString()} estudiantes)</span>
          </div>
          
          <div className="mt-auto">
            <div className="flex items-center gap-2 mt-4">
              <img 
                src={instructor.avatar} 
                alt={instructor.name} 
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="text-sm text-muted-foreground">{instructor.name}</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="pt-0 pb-4">
          <p className="font-semibold text-lg">
            {price === 0 ? (
              "Gratis"
            ) : (
              `$${price.toLocaleString('es-ES')}`
            )}
          </p>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default CourseCard;
