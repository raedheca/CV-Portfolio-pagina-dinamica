<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const visible = ref(false)
const UMBRAL = 320

function alScrollear() {
  visible.value = window.scrollY > UMBRAL
}

function volverArriba() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', alScrollear, { passive: true })
  alScrollear()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', alScrollear)
})
</script>

<template>
  <button
    type="button"
    class="scroll-top-btn"
    :class="{ visible }"
    aria-label="Volver al inicio de la página"
    title="Volver arriba"
    @click="volverArriba">
    <i class="bi bi-arrow-up"></i>
  </button>
</template>
