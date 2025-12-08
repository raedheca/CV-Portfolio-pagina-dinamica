import { defineStore } from "pinia";
import { ref } from "vue";

export const useSkillsStore = defineStore("skills", () => {
  const skills = ref([
    // Lenguajes de programación
    {
      name: "PHP",
      category: "Lenguajes",
      level: 85,
    },
    {
      name: "JavaScript",
      category: "Lenguajes",
      level: 75,
    },
    {
      name: "Python",
      category: "Lenguajes",
      level: 63,
    },
    // Frontend
    {
      name: "Vue 3",
      category: "Frontend",
      level: 68,
    },
    {
      name: "HTML5",
      category: "Frontend",
      level: 100,
    },
    {
      name: "CSS3",
      category: "Frontend",
      level: 70,
    },
    {
      name: "Bootstrap",
      category: "Frontend",
      level: 85,
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      level: 25,
    },
    // Backend
    {
      name: "Laravel",
      category: "Backend",
      level: 90,
    },
    {
      name: "CodeIgniter",
      category: "Backend",
      level: 80,
    },
    {
      name: "APIs REST",
      category: "Backend",
      level: 85,
    },
    // Bases de datos
    {
      name: "MySQL",
      category: "Bases de datos",
      level: 92,
    },
    {
      name: "MongoDB",
      category: "Bases de datos",
      level: 20,
    },
    // DevOps
    {
      name: "Docker",
      category: "DevOps",
      level: 70,
    },
    {
      name: "Linux",
      category: "DevOps",
      level: 87,
    },
    // {
    //   name: 'Nginx',
    //   category: 'DevOps',
    //   level: 75
    // },
    {
      name: "Apache",
      category: "DevOps",
      level: 75,
    },
    // Control de versiones
    {
      name: "Git",
      category: "Herramientas",
      level: 90,
    },
    {
      name: "GitHub",
      category: "Herramientas",
      level: 80,
    },
    {
      name: "GitLab",
      category: "Herramientas",
      level: 80,
    },
    // Metodologías
    {
      name: "Scrum",
      category: "Metodologías",
      level: 80,
    },
    {
      name: "Kanban",
      category: "Metodologías",
      level: 95,
    },
    // Habilidades blandas
    {
      name: "Liderazgo técnico",
      category: "Habilidades blandas",
      level: 85,
    },
    {
      name: "Resolución de problemas",
      category: "Habilidades blandas",
      level: 90,
    },
    {
      name: "Comunicación efectiva",
      category: "Habilidades blandas",
      level: 85,
    },
    {
      name: "Gestión del tiempo",
      category: "Habilidades blandas",
      level: 70,
    },
    {
      name: "Adaptabilidad",
      category: "Habilidades blandas",
      level: 75,
    },
    // Optimización
    {
      name: "Optimización de rendimiento web",
      category: "Especialización",
      level: 85,
    },
    {
      name: "Refactorización de código legacy",
      category: "Especialización",
      level: 90,
    },
    {
      name: "Optimización de queries SQL",
      category: "Especialización",
      level: 95,
    },
    // Idiomas
    {
      name: "Español",
      category: "Idiomas",
      level: 100,
    },
    {
      name: "Ingles",
      category: "Idiomas",
      level: 60,
    },
  ]);

  return {
    skills,
  };
});
