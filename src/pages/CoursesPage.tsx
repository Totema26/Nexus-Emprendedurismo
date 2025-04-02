import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, SlidersHorizontal, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/coursesData";

const categoryNames: { [key: string]: string } = {
  programming: "Programación",
  design: "Diseño",
  marketing: "Marketing",
  business: "Negocios"
};

const CoursesPage = () => {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(category || null);
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  
  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);
  
  // Filter courses based on search, category, price, and level
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? course.category === selectedCategory : true;
    const matchesPrice = course.price >= priceRange[0] && course.price <= priceRange[1];
    const matchesLevel = selectedLevels.length > 0 ? selectedLevels.includes(course.level) : true;
    
    return matchesSearch && matchesCategory && matchesPrice && matchesLevel;
  });
  
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory(null);
    setPriceRange([0, 300]);
    setSelectedLevels([]);
  };
  
  const handleLevelChange = (level: string) => {
    setSelectedLevels((prev) => {
      if (prev.includes(level)) {
        return prev.filter((l) => l !== level);
      } else {
        return [...prev, level];
      }
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-primary/5 py-8 border-b">
        <div className="container">
          <h1 className="text-3xl font-bold mb-2">
            {category ? `Cursos de ${categoryNames[category]}` : "Explora nuestros cursos"}
          </h1>
          <p className="text-muted-foreground">
            {category 
              ? `Descubre nuestra selección de cursos de ${categoryNames[category]}`
              : "Descubre una amplia variedad de cursos de alta calidad impartidos por expertos"}
          </p>
        </div>
      </div>
      
      <main className="flex-grow container py-8">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
          <div className="flex gap-4 flex-col sm:flex-row">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar cursos..."
                className="pl-9 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            
            <Select value={selectedCategory || ""} onValueChange={(value) => setSelectedCategory(value || null)}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Todas las categorías</SelectItem>
                <SelectItem value="programming">Programación</SelectItem>
                <SelectItem value="design">Diseño</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="business">Negocios</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filtros
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filtros</SheetTitle>
                  </SheetHeader>
                  
                  <div className="py-6 space-y-8">
                    <div>
                      <h3 className="font-semibold mb-4">Rango de precio</h3>
                      <div className="px-2">
                        <Slider
                          value={priceRange}
                          min={0}
                          max={300}
                          step={10}
                          onValueChange={setPriceRange}
                          className="mb-2"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>${priceRange[0]}</span>
                          <span>${priceRange[1]}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-4">Nivel</h3>
                      <div className="space-y-3">
                        {["Principiante", "Intermedio", "Avanzado"].map((level) => (
                          <div key={level} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`level-${level}-mobile`} 
                              checked={selectedLevels.includes(level)}
                              onCheckedChange={() => handleLevelChange(level)}
                            />
                            <label 
                              htmlFor={`level-${level}-mobile`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {level}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full" onClick={clearFilters}>
                      <X className="h-4 w-4 mr-2" />
                      Limpiar filtros
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          
          {(searchTerm || selectedCategory || priceRange[0] > 0 || priceRange[1] < 300 || selectedLevels.length > 0) && (
            <Button variant="ghost" onClick={clearFilters} className="h-10">
              <X className="h-4 w-4 mr-2" />
              Limpiar filtros
            </Button>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Desktop Filters Sidebar */}
          <div className="hidden md:block">
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold mb-4">Rango de precio</h3>
                <div className="px-2">
                  <Slider
                    value={priceRange}
                    min={0}
                    max={300}
                    step={10}
                    onValueChange={setPriceRange}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Nivel</h3>
                <div className="space-y-3">
                  {["Principiante", "Intermedio", "Avanzado"].map((level) => (
                    <div key={level} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`level-${level}`} 
                        checked={selectedLevels.includes(level)}
                        onCheckedChange={() => handleLevelChange(level)}
                      />
                      <label 
                        htmlFor={`level-${level}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {level}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                {filteredCourses.length} {filteredCourses.length === 1 ? "curso" : "cursos"} encontrados
              </h2>
              <Select defaultValue="popular">
                <SelectTrigger className="w-44">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Más populares</SelectItem>
                  <SelectItem value="newest">Más recientes</SelectItem>
                  <SelectItem value="price-asc">Precio: bajo a alto</SelectItem>
                  <SelectItem value="price-desc">Precio: alto a bajo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border rounded-lg bg-muted/30">
                <h3 className="text-lg font-semibold mb-2">No se encontraron cursos</h3>
                <p className="text-muted-foreground mb-6">
                  Intenta con diferentes filtros o términos de búsqueda
                </p>
                <Button onClick={clearFilters}>Limpiar filtros</Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CoursesPage;
