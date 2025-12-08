<script setup>
import { useExperienceStore } from '@/stores/Experiencia'

const experience_store = useExperienceStore()
</script>

<template>
  <div class="experience-view">
    <div
      class="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-3 mb-md-4 gap-2">
      <h1 class="h3 h2-md mb-0">Experiencia Profesional</h1>
    </div>

    <div class="row g-3 g-md-4">
      <div v-for="exp in experience_store.experiences" key="1" class="col-12">
        <div class="card shadow-sm experience-card">
          <div class="card-body p-3 p-md-4">
            <div class="d-flex justify-content-between align-items-start mb-3">
              <div class="flex-grow-1 me-2">
                <h3 class="h6 h5-md mb-1">Desarrollador FullStack</h3>
                <p class="text-primary mb-1 fw-semibold small">Cecaitra</p>
                <p class="text-muted small mb-0">
                  2022-07 - Presente
                </p>
              </div>
            </div>

            <p class="text-muted mb-3 small">Desarrollé una plataforma integral basada en Vue 3 y Laravel 11, implementando control de acceso por tipo de usuario y validación de procesos de presunción de infracciones. Realicé mantenimiento y soporte de sistemas legacy desarrollados en CodeIgniter y PHP, asegurando su estabilidad y continuidad operativa. Encabecé la migración y optimización de código legacy hacia tecnologías modernas como Laravel, Python y JavaScript, además de la contenedorización de proyectos y scripts en entornos Docker. Propuse e implementé mejoras en maquetación, rendimiento, normalización y unificación de bases de datos legacy, optimizando tiempos de respuesta y escalabilidad. Lideré la optimización de rendimiento web en sistemas críticos, garantizando mayor eficiencia en la fase final del ciclo de vida de procesos de infracción. Gestioné servidores con sistemas operativos Linux, incluyendo la administración y ejecución de comandos para despliegues y mantenimiento en producción.</p>

            <div v-if="exp.technologies.length > 0">
              <div class="d-flex flex-wrap gap-2">
                <span v-for="tech in exp.technologies" :key="tech" class="badge bg-light text-dark border">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience-card {
  transition: transform 0.2s, box-shadow 0.2s;
}

.experience-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1) !important;
}
</style>
