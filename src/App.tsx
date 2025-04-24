import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CoursesPage from "./pages/CoursesPage";
import CoursePage from "./pages/CoursePage";
import NotFound from "./pages/NotFound";
import CrearEmpresa from "./pages/CrearEmpresa";
import CrearEAS from "./pages/CrearEAS";
import CrearSociedad from "./pages/CrearSociedad";
import Cursos from "./pages/Cursos";
import Recursos from "./pages/Recursos";
import RecursoDetalle from "./pages/RecursoDetalle";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cursos" element={<CoursesPage />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/recursos/:id" element={<RecursoDetalle />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:id" element={<CoursePage />} />
          <Route path="/category/:category" element={<CoursesPage />} />
          
          {/* Rutas para creación de empresas */}
          <Route path="/crear-empresa" element={<CrearEmpresa />} />
          <Route path="/crear-empresa/eas" element={<CrearEAS />} />
          <Route path="/crear-empresa/srl" element={<CrearSociedad />} />
          <Route path="/crear-empresa/sa" element={<CrearSociedad />} />
          <Route path="/cursos-y-guias" element={<Cursos />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
