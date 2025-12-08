import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useExperienceStore = defineStore('experience', () => {
  const experiences = ref([
    {
      technologies: ['Vue 3', 'Laravel 11', 'CodeIgniter', 'PHP', 'Python', 'JavaScript', 'Docker', 'Linux', 'MySQL', 'Nginx', 'Apache']
    }
  ])


  return {
    experiences,
  }
})
