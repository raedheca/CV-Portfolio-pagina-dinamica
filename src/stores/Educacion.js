import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEducationStore = defineStore('education', () => {
  const educations = ref([
    {
      institution: 'UdeMM Universidad de la Marina Mercante',
      degree: 'Ingeniería de Sistema',
      field: 'Ingeniería de Sistema',
      start_date: '2021-01',
      end_date: 'En curso',
      description: '4to año de carrera (actualmente cursando) con 40 materias aprobadas. Formación integral en desarrollo de sistemas, arquitectura de software y gestión de tecnologías de la información.'
    },
    {
      institution: 'Platzi',
      degree: 'Formación Continua en Platzi',
      field: 'Tecnología',
      start_date: '2025-01',
      end_date: 'En curso',
      description: 'Especialización autodidacta en:\n- IA & ML: Fundamentos de IA, Prompt Engineering, Claude Code\n- Data Engineering: Bases de Datos, Gestión de Datos Éticos\n- Fundamentos: Ingeniería de Software, Matemática para ML'
    },
    {
      institution: 'Codo a Codo 4.0 - Gobierno de Buenos Aires',
      degree: 'Full Stack Java Developer',
      field: 'Desarrollo Full Stack',
      start_date: '2022-07',
      end_date: '2022-07',
      description: '208 horas · Desarrollo de aplicaciones web full stack con Java, Spring Framework, bases de datos relacionales (MySQL) y frontend con HTML5, CSS3 y JavaScript. Arquitectura MVC, APIs REST y despliegue de aplicaciones.'
    },
    {
      institution: 'Codo a Codo 4.0 - Gobierno de Buenos Aires',
      degree: 'Desarrollo Web Full Stack',
      field: 'Desarrollo Full Stack',
      start_date: '2021-12',
      end_date: '2021-12',
      description: '198 horas · Programación full stack con Node.js, Express, bases de datos SQL, y desarrollo frontend moderno. Implementación de aplicaciones web completas, integración de APIs y control de versiones con Git.'
    }
  ])

  return {
    educations,
  }
})
