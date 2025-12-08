<template>
  <button @click="alternarTema" class="theme-toggle-btn" :class="{ 'dark-mode': theme === 'dark' }"
    :title="theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'">
    <i v-if="theme === 'light'" class="bi bi-moon-stars-fill"></i>
    <i v-else class="bi bi-sun-fill"></i>
  </button>
</template>

<script setup>
import { useThemeStore } from '@/stores/Tema'
import { storeToRefs } from 'pinia'

const theme_store = useThemeStore()
const { theme } = storeToRefs(theme_store)
const { alternarTema } = theme_store
</script>

<style scoped>
.theme-toggle-btn {
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid var(--border-color);
  background: var(--bg-secondary);
  color: var(--primary-purple);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  overflow: hidden;
}

.theme-toggle-btn:hover {
  background: var(--primary-purple);
  color: white;
  border-color: var(--primary-purple);
  transform: scale(1.1);
  box-shadow: 0 4px 12px var(--card-hover-shadow);
}

.theme-toggle-btn:active {
  transform: scale(0.95);
}

.theme-toggle-btn i {
  transition: transform 0.3s ease;
}

.theme-toggle-btn:hover i {
  transform: rotate(20deg);
}

.theme-toggle-btn.dark-mode {
  background: linear-gradient(135deg, var(--primary-purple-dark) 0%, var(--primary-purple) 100%);
  color: white;
  border-color: var(--primary-purple);
}

.theme-toggle-btn.dark-mode:hover {
  background: linear-gradient(135deg, var(--primary-purple) 0%, var(--primary-purple-light) 100%);
  box-shadow: 0 4px 16px rgba(167, 139, 250, 0.4);
}

@media (max-width: 991.98px) {
  .theme-toggle-btn {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }
}
</style>
