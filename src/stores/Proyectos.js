import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref([
    {
      id: 1,
      name: 'Laboratorio-clinico ',
      description: 'Proyecto realizado como trabajo práctico para demostrar conocimientos en HTML, CSS y JavaScript puro (vanilla). No se usan frameworks ni librerías externas de UI o JS.',
      technologies: ['HTML', 'CSS', 'JavaScrip'],
      url: 'https://github.com/raedheca/Laboratorio-clinico',
      demo_url: '',
      image: null,
      start_date: '2025-07',
      end_date: '2025-07'
    },
    {
      id: 2,
      name: 'Cola Trabajo Jobs Laravel',
      description: 'Este proyecto permite importar datos masivos desde archivos de texto con formato CSV, validarlos automáticamente y almacenarlos en una base de datos, todo esto ejecutado en segundo plano para no bloquear la interfaz del usuario.',
      technologies: ['Boostrap5', 'Blade', 'PHP', 'Laravel', 'MySQL'],
      url: 'https://github.com/raedheca/cola-trabajo-jobs-laravel-12',
      demo_url: '',
      image: null,
      start_date: '2022-05',
      end_date: '2022-09'
    }
  ])


  return {
    projects,
  }
})
