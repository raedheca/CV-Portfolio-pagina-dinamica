<script setup>
import { useEducationStore } from '@/stores/Educacion'

const education_store = useEducationStore()

function formatear_fecha(date_string) {
  if (!date_string) return ''
  if (date_string === 'En curso') return 'En curso'
  const [year, month] = date_string.split('-')
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
  return `${months[parseInt(month) - 1]} ${year}`
}

function esEnCurso(end_date) {
  return end_date === 'En curso' || !end_date
}
</script>

<template>
  <div class="education-view">
    <div class="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-3 mb-md-4 gap-2">
      <h1 class="h3 h2-md mb-0 section-heading">Educación</h1>
    </div>

    <div class="row g-3 g-md-4 stagger-children">
      <div v-for="edu in education_store.educations" :key="edu.id" class="col-12 col-sm-6 col-lg-6">
        <div class="card shadow-sm education-card h-100">
          <div class="card-body p-3 p-md-4">
            <div class="edu-header mb-3">
              <div class="edu-icon">
                <i class="bi bi-mortarboard-fill"></i>
              </div>
              <span v-if="esEnCurso(edu.end_date)" class="status-tag status-active">
                <span class="status-dot-small"></span>En curso
              </span>
              <span v-else class="status-tag status-done">
                <i class="bi bi-check-circle-fill"></i>Finalizado
              </span>
            </div>

            <h3 class="h6 h5-md mb-1">{{ edu.degree }}</h3>
            <p class="text-primary mb-1 fw-semibold small">
              <i class="bi bi-bank me-1"></i>{{ edu.institution }}</p>
            <p v-if="edu.field" class="text-muted small mb-2">{{ edu.field }}</p>
            <p class="text-muted small mb-3 edu-date">
              <i class="bi bi-calendar-range me-1"></i>
              {{ formatear_fecha(edu.start_date) }} — {{ formatear_fecha(edu.end_date) }}
            </p>

            <p v-if="edu.description" class="text-muted small mb-0">{{ edu.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.education-card {
  position: relative;
  overflow: hidden;
}

.education-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, var(--primary-purple), var(--primary-purple-light));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.education-card:hover::after {
  opacity: 1;
}

.edu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.edu-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.18), rgba(167, 139, 250, 0.12));
  color: var(--primary-purple);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
}

.status-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.status-active {
  background: rgba(16, 185, 129, 0.12);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.status-done {
  background: rgba(139, 92, 246, 0.12);
  color: var(--primary-purple);
  border: 1px solid rgba(139, 92, 246, 0.3);
}

.status-dot-small {
  width: 6px;
  height: 6px;
  background: #10b981;
  border-radius: 50%;
  animation: glowPulse 2s ease-out infinite;
}

.edu-date {
  display: inline-flex;
  align-items: center;
}
</style>
