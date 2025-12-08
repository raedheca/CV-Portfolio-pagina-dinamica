import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  // Obtener tema guardado o usar 'dark' por defecto
  const saved_theme = localStorage.getItem('theme') || 'dark'
  const theme = ref(saved_theme)

  // Aplicar el tema al documento de forma instantánea y unificada
  function aplicarTema(instant = false) {
    const root = document.documentElement

    if (instant) {
      // Desactivar TODAS las transiciones temporalmente
      root.classList.add('theme-transition-disabled')

      // Forzar un reflow para asegurar que la clase se aplique
      root.offsetHeight

      // Aplicar el nuevo tema
      root.setAttribute('data-theme', theme.value)
      root.classList.remove('light', 'dark')
      root.classList.add(theme.value)
      localStorage.setItem('theme', theme.value)

      // Forzar otro reflow para que los cambios se apliquen inmediatamente
      root.offsetHeight

      // Re-activar las transiciones después de que el tema se haya aplicado
      setTimeout(() => {
        root.classList.remove('theme-transition-disabled')
      }, 50)
    } else {
      // Aplicación inicial sin animación
      root.setAttribute('data-theme', theme.value)
      root.classList.remove('light', 'dark')
      root.classList.add(theme.value)
      localStorage.setItem('theme', theme.value)
    }
  }

  // Alternar entre claro y oscuro
  function alternarTema() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    aplicarTema(true)
  }

  // Aplicar tema inmediatamente sin transición
  aplicarTema(false)

  return {
    theme,
    aplicarTema,
    alternarTema
  }
})
