
export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  instructor: {
    name: string;
    avatar: string;
  };
  category: string;
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
  rating: number;
  students: number;
  duration: string;
  featured?: boolean;
  curriculum: {
    section: string;
    lessons: {
      title: string;
      duration: string;
      preview?: boolean;
    }[];
  }[];
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Desarrollo Web Completo: HTML, CSS, JavaScript, y más",
    description: "Aprende desarrollo web moderno desde cero. Domina HTML, CSS, JavaScript, React, Node.js y conviértete en un desarrollador web completo.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    instructor: {
      name: "Carlos Mendoza",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    category: "programming",
    level: "Principiante",
    rating: 4.8,
    students: 12502,
    duration: "32h 15m",
    featured: true,
    curriculum: [
      {
        section: "Introducción al Desarrollo Web",
        lessons: [
          { title: "Bienvenida al curso", duration: "5:20", preview: true },
          { title: "Configuración del entorno de desarrollo", duration: "12:45", preview: true },
          { title: "Cómo funciona Internet", duration: "15:30" }
        ]
      },
      {
        section: "HTML5",
        lessons: [
          { title: "Estructura básica HTML", duration: "18:10", preview: true },
          { title: "Elementos semánticos", duration: "22:35" },
          { title: "Formularios", duration: "25:40" }
        ]
      }
    ]
  },
  {
    id: "2",
    title: "Diseño UI/UX: Crea Interfaces de Usuario Impactantes",
    description: "Aprende a diseñar interfaces de usuario estéticamente atractivas y experiencias de usuario efectivas. Domina Figma, principios de diseño y metodologías UX.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    instructor: {
      name: "Laura Vega",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    category: "design",
    level: "Intermedio",
    rating: 4.6,
    students: 8345,
    duration: "28h 42m",
    featured: true,
    curriculum: [
      {
        section: "Fundamentos del Diseño UI/UX",
        lessons: [
          { title: "Introducción al UI/UX", duration: "10:15", preview: true },
          { title: "Principios de diseño", duration: "18:30", preview: true },
          { title: "Psicología del color", duration: "14:20" }
        ]
      },
      {
        section: "Figma Masterclass",
        lessons: [
          { title: "Introducción a Figma", duration: "15:45", preview: true },
          { title: "Componentes y sistemas de diseño", duration: "25:10" },
          { title: "Prototipos interactivos", duration: "22:35" }
        ]
      }
    ]
  },
  {
    id: "3",
    title: "Marketing Digital para Emprendedores",
    description: "Aprende a promocionar eficazmente tu negocio en línea. Domina estrategias de redes sociales, SEO, email marketing y publicidad pagada.",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    instructor: {
      name: "Daniela Torres",
      avatar: "https://i.pravatar.cc/150?img=29"
    },
    category: "marketing",
    level: "Principiante",
    rating: 4.7,
    students: 10128,
    duration: "24h 50m",
    curriculum: [
      {
        section: "Fundamentos del Marketing Digital",
        lessons: [
          { title: "¿Qué es el marketing digital?", duration: "8:35", preview: true },
          { title: "Construcción de tu marca", duration: "17:20", preview: true },
          { title: "Definición de tu audiencia", duration: "12:50" }
        ]
      },
      {
        section: "Marketing en Redes Sociales",
        lessons: [
          { title: "Estrategias para cada plataforma", duration: "22:15", preview: true },
          { title: "Creación de contenido viral", duration: "18:40" },
          { title: "Análisis de métricas", duration: "15:30" }
        ]
      }
    ]
  },
  {
    id: "4",
    title: "Desarrollo de Aplicaciones Móviles con React Native",
    description: "Aprende a crear aplicaciones móviles multiplataforma con React Native. Desde fundamentos hasta publicación en tiendas.",
    price: 229.99,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    instructor: {
      name: "Miguel Sánchez",
      avatar: "https://i.pravatar.cc/150?img=8"
    },
    category: "programming",
    level: "Intermedio",
    rating: 4.9,
    students: 6723,
    duration: "30h 20m",
    curriculum: [
      {
        section: "Introducción a React Native",
        lessons: [
          { title: "¿Qué es React Native?", duration: "10:20", preview: true },
          { title: "Configuración del entorno", duration: "15:45", preview: true },
          { title: "Tu primera app", duration: "18:30" }
        ]
      },
      {
        section: "Componentes y Estilos",
        lessons: [
          { title: "Componentes nativos", duration: "20:15", preview: true },
          { title: "Sistema de estilos", duration: "22:40" },
          { title: "Layouts con Flexbox", duration: "25:10" }
        ]
      }
    ]
  },
  {
    id: "5",
    title: "Gestión de Negocios: Estrategias para el Éxito Empresarial",
    description: "Aprende los fundamentos para gestionar y hacer crecer tu negocio. Estrategias prácticas para emprendedores y dueños de pequeñas empresas.",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    instructor: {
      name: "Roberto Álvarez",
      avatar: "https://i.pravatar.cc/150?img=19"
    },
    category: "business",
    level: "Principiante",
    rating: 4.5,
    students: 7845,
    duration: "26h 10m",
    curriculum: [
      {
        section: "Fundamentos de la Gestión de Negocios",
        lessons: [
          { title: "Principios básicos de gestión", duration: "12:35", preview: true },
          { title: "Análisis FODA", duration: "15:20", preview: true },
          { title: "Visión, misión y objetivos", duration: "10:45" }
        ]
      },
      {
        section: "Finanzas para Emprendedores",
        lessons: [
          { title: "Presupuestos y proyecciones", duration: "20:10", preview: true },
          { title: "Control de gastos", duration: "18:30" },
          { title: "Estrategias de fijación de precios", duration: "22:15" }
        ]
      }
    ]
  },
  {
    id: "6",
    title: "Inteligencia Artificial y Machine Learning: Fundamentos",
    description: "Introducción a la inteligencia artificial y el aprendizaje automático. Aprende los conceptos básicos y construye tus primeros modelos.",
    price: 259.99,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    instructor: {
      name: "Ana Martínez",
      avatar: "https://i.pravatar.cc/150?img=23"
    },
    category: "programming",
    level: "Avanzado",
    rating: 4.9,
    students: 5230,
    duration: "34h 45m",
    featured: true,
    curriculum: [
      {
        section: "Introducción a la IA",
        lessons: [
          { title: "¿Qué es la inteligencia artificial?", duration: "15:30", preview: true },
          { title: "Historia y evolución", duration: "20:15", preview: true },
          { title: "Aplicaciones en la industria", duration: "18:40" }
        ]
      },
      {
        section: "Fundamentos de Machine Learning",
        lessons: [
          { title: "Tipos de aprendizaje automático", duration: "25:10", preview: true },
          { title: "Algoritmos de clasificación", duration: "28:35" },
          { title: "Evaluación de modelos", duration: "22:20" }
        ]
      }
    ]
  }
];
