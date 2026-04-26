<script setup>
import { useExperienceStore } from '@/stores/Experiencia'

const experience_store = useExperienceStore()
</script>

<template>
  <div class="experience-view">
    <div class="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-3 mb-md-4 gap-2">
      <h1 class="h3 h2-md mb-0 section-heading">Experiencia Profesional</h1>
    </div>

    <div class="timeline">
      <div v-for="(exp, idx) in experience_store.experiences" :key="idx" class="timeline-item reveal"
        :class="`reveal-delay-${idx + 1}`">
        <div class="timeline-marker">
          <i class="bi bi-briefcase-fill"></i>
        </div>

        <div class="card shadow-sm experience-card">
          <div class="card-body p-3 p-md-4">
            <div class="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3 gap-2">
              <div class="flex-grow-1 me-2">
                <h3 class="h6 h5-md mb-1">Desarrollador Full Stack</h3>
                <p class="text-primary mb-1 fw-semibold small">
                  <i class="bi bi-building me-1"></i>Cecaitra
                </p>
              </div>
              <span class="period-badge">
                <i class="bi bi-calendar3"></i>
                Jul 2022 — Presente
              </span>
            </div>

            <p class="text-muted mb-3 small">
              Desarrollé una plataforma integral basada en Vue 3 y Laravel 11, implementando control
              de acceso por tipo de usuario y validación de procesos de presunción de infracciones.
              Realicé mantenimiento y soporte de sistemas legacy desarrollados en CodeIgniter y PHP,
              asegurando su estabilidad y continuidad operativa. Encabecé la migración y optimización
              de código legacy hacia tecnologías modernas como Laravel, Python y JavaScript, además
              de la contenedorización de proyectos y scripts en entornos Docker. Propuse e implementé
              mejoras en maquetación, rendimiento, normalización y unificación de bases de datos
              legacy, optimizando tiempos de respuesta y escalabilidad. Lideré la optimización de
              rendimiento web en sistemas críticos, garantizando mayor eficiencia en la fase final
              del ciclo de vida de procesos de infracción. Gestioné servidores con sistemas
              operativos Linux, incluyendo la administración y ejecución de comandos para
              despliegues y mantenimiento en producción.
            </p>

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
.timeline {
  position: relative;
  padding-left: 2.5rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 18px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg,
    var(--primary-purple) 0%,
    var(--primary-purple-light) 50%,
    transparent 100%);
  opacity: 0.4;
}

.timeline-item {
  position: relative;
  margin-bottom: 1.5rem;
}

.timeline-marker {
  position: absolute;
  left: -2.5rem;
  top: 1rem;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-purple), var(--primary-purple-dark));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.35), 0 0 0 4px var(--bg-primary);
  z-index: 1;
}

.experience-card {
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s ease;
}

.experience-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0.75rem 1.5rem var(--card-hover-shadow) !important;
}

.period-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.75rem;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.12), rgba(167, 139, 250, 0.12));
  border: 1px solid rgba(139, 92, 246, 0.25);
  border-radius: 999px;
  color: var(--primary-purple);
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
}
</style>
