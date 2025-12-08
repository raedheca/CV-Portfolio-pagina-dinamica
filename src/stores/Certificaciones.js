import { defineStore } from "pinia";
import { ref } from "vue";

export const useCertificationsStore = defineStore("certifications", () => {
  const certifications = ref([
    {
      title: "Curso para Aprender en Línea Efectivamente",
      issuer: "Platzi",
      previewImage: "/certificados/previews/diploma-aprender-1.jpg",
      description:
        "Ejercitar capacidad de retención, organizar espacios e información, y desarrollar hábitos de estudio efectivos.",
    },
    {
      title: "Curso de Introducción al Desarrollo Backend",
      issuer: "Platzi",
      previewImage: "/certificados/previews/diploma-backend (1)-1.jpg",
      description: "Comprender arquitectura cliente-servidor, implementar APIs REST, diseñar bases de datos, manejar autenticación y autorización, y aplicar buenas prácticas de seguridad en el backend.",
    },
    {
      title: "Curso de Fundamentos de Bases de Datos",
      issuer: "Platzi",
      previewImage: "/certificados/previews/diploma-bases-datos-1.jpg",
      description:
        "Diseñar tablas, establecer relaciones, optimizar consultas, implementar reglas de integridad y almacenar/recuperar información.",
    },
    {
      title: "ChatGPT 2025",
      issuer: "Platzi",
      previewImage: "/certificados/previews/diploma-chatgpt-2024-1.jpg",
      description: "Dominar técnicas de prompting con ChatGPT, automatizar tareas con IA, optimizar flujos de trabajo, generar contenido efectivo, y aplicar IA en casos de uso profesionales.",
    },
    {
      title: "Curso de Claude Code",
      issuer: "Platzi",
      previewImage: "/certificados/previews/diploma-claude-code-1.jpg",
      description:
        "Analizar proyectos con IA, planificar implementaciones, desarrollar flujos backend/frontend, integrar herramientas MCP y validar código con auditorías automáticas.",
    },
    {
      title: "Computación Básica",
      issuer: "Platzi",
      previewImage: "/certificados/previews/diploma-computacion-basica-1.jpg",
      description: "Comprender funcionamiento de computadoras, sistemas operativos y hardware, manejar archivos y carpetas, navegar en internet de forma segura, y utilizar herramientas digitales básicas.",
    },
    {
      title: "Curso de Comunicación Asertiva",
      issuer: "Platzi",
      previewImage:
        "/certificados/previews/diploma-comunicacion-asertiva-1.jpg",
      description:
        "Aplicar técnicas DESC, PIR y sándwich para conversaciones difíciles, controlar emociones con STOP, practicar escucha activa y decir 'no' efectivamente.",
    },
    {
      title: "Curso de Ética y Manejo de Datos para Data Science e IA",
      issuer: "Platzi",
      previewImage: "/certificados/previews/diploma-etica-ia-1.jpg",
      description:
        "Reconocer retos éticos en tecnología, dar buen uso a datos en diferentes campos, e identificar riesgos y dilemas éticos en el uso de datos.",
    },
    {
      title: "Curso Fundamentos de Matemáticas",
      issuer: "Platzi",
      previewImage:
        "/certificados/previews/diploma-fundamentos-matematicas-1.jpg",
      description: "Dominar operaciones básicas, aplicar álgebra y geometría, resolver ecuaciones, trabajar con funciones, y desarrollar pensamiento lógico-matemático para programación.",
    },
    {
      title: "Curso Fundamentos de PHP",
      issuer: "Platzi",
      previewImage: "/certificados/previews/diploma-fundamentos-php (1)-1.jpg",
      description: "Desarrollar aplicaciones web con PHP, manejar formularios y sesiones, conectar con bases de datos MySQL, implementar seguridad básica, y aplicar buenas prácticas de programación.",
    },
    {
      title: "Curso Gestión del Tiempo",
      issuer: "Platzi",
      previewImage: "/certificados/previews/diploma-gestion-tiempo-2019-1.jpg",
      description: "Conocer conceptos de gestión del tiempo, implementar técnicas efectivas, profundizar en estrategias de productividad, priorizar tareas, y medir efectividad personal.",
    },
    {
      title: "Curso de Gestión Efectiva del Tiempo",
      issuer: "Platzi",
      previewImage: "/certificados/previews/diploma-gestion-tiempo-1.jpg",
      description:
        "Priorizar lo esencial con Pareto, delegar y decir 'no' efectivamente, y transformar metas en resultados con métodos SMART y retrospectivas.",
    },
    {
      title: "Curso de Habilidades Blandas para el Desarrollo Profesional",
      issuer: "Platzi",
      previewImage: "/certificados/previews/diploma-habilidades-blandas-1.jpg",
      description:
        "Identificar habilidades relevantes para crecer como profesional y diseñar un plan para desarrollarlas o fortalecerlas.",
    },
    {
      title: "Curso de Fundamentos de AI para Data y Machine Learning",
      issuer: "Platzi",
      previewImage: "/certificados/previews/diploma-ia-data-ml-2023-1.jpg",
      description:
        "Comprender qué es IA y su impacto, entender machine learning y deep learning, y reconocer la relación entre IA, Data Science y ML.",
    },
    {
      title: "Curso de Fundamentos de Ingeniería de Software",
      issuer: "Platzi",
      previewImage: "/certificados/previews/diploma-ingenieria-1.jpg",
      description:
        "Comprender arquitectura de sistemas operativos y hardware, interpretar flujo de datos en redes, analizar sistemas de archivos y conceptos de IA y LLMs.",
    },
    {
      title:
        "Curso de Fundamentos de Liderazgo: Reconoce las Características de un Líder",
      issuer: "Platzi",
      previewImage: "/certificados/previews/diploma-liderazgo-rasgos-1.jpg",
      description:
        "Conocer actitudes y comportamientos de un líder, identificar motivaciones que mueven a las personas, y reconocer rasgos que definen a un líder.",
    },
    {
      title: "Curso de Lenguaje y Notación Matemática",
      issuer: "Platzi",
      previewImage: "/certificados/previews/diploma-notacion-matematica-1.jpg",
      description:
        "Entender notación científica y prefijos, leer y escribir con lenguaje matemático, utilizar simbología matemática y conocer distintos operadores.",
    },
    {
      title: "Curso de Prompt Engineering",
      issuer: "Platzi",
      previewImage: "/certificados/previews/diploma-prompt-engineering-1.jpg",
      description:
        "Dominar prompt engineering, optimizar el uso de contexto en tareas extensas y aplicar técnicas de razonamiento paso a paso.",
    },
    {
      title: "Curso de Tomar Decisiones en el Trabajo",
      issuer: "Platzi",
      previewImage:
        "/certificados/previews/diploma-tomar-decisiones-trabajo-1.jpg",
      description:
        "Aprender a tomar decisiones bajo presión, discriminar información para reducir incertidumbre y descubrir que las decisiones tienen causa y efecto.",
    },
    {
      title: "Curso Trucos de IA",
      issuer: "Platzi",
      previewImage: "/certificados/previews/diploma-trucos-ia-1.jpg",
      description: "Aplicar técnicas avanzadas de IA, optimizar prompts y resultados, automatizar procesos con herramientas de IA, integrar IA en flujos de trabajo, y maximizar productividad con asistentes inteligentes.",
    },
    {
      title: "Curso Vue.js Old",
      issuer: "Platzi",
      previewImage: "/certificados/previews/diploma-vuejs-old-1.jpg",
      description: "Desarrollar aplicaciones web reactivas con Vue.js, implementar componentes reutilizables, manejar estado con Vuex, trabajar con Vue Router, y aplicar buenas prácticas de desarrollo frontend.",
    },
    {
      title: "Certificado Codo a Codo 2021",
      issuer: "Codo a Codo Desarrollo Web Full Stack NodeJS",
      previewImage: "/certificados/previews/codoCodo2021-1.jpg",
      description: "Desarrollar aplicaciones Full Stack con Node.js, crear APIs RESTful con Express, implementar frontend con HTML/CSS/JavaScript, conectar con bases de datos, y desplegar aplicaciones web completas.",
    },
    {
      title: "Certificado Codo a Codo 2022",
      issuer: "Codo a Codo Desarrollo Web Full Stack JAVA",
      previewImage: "/certificados/previews/codoCodo2022-1.jpg",
      description: "Desarrollar aplicaciones Full Stack con Java, implementar backend con Spring Boot, crear frontend dinámico, trabajar con bases de datos relacionales, y aplicar arquitecturas MVC en proyectos web.",
    },
  ]);

  return {
    certifications,
  };
});
