import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-3">Nexus</h3>
            <p className="text-sm text-muted-foreground">
              Plataforma oficial para la constitución de empresas en Paraguay.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/crear-empresa" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Crear Empresa
                </Link>
              </li>
              <li>
                <Link to="/recursos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Guías y Recursos
                </Link>
              </li>
              <li>
                <Link to="/cursos-y-guias" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cursos y Capacitación
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terminos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link to="/privacidad" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Contacto</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:soporte@nexus.com.py" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  soporte@nexus.com.py
                </a>
              </li>
              <li>
                <a href="tel:+595212345678" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  +595 21 234 5678
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nexus. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
