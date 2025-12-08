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
</script>

<template>
  <div class="education-view">
    <div
      class="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-3 mb-md-4 gap-2">
      <h1 class="h3 h2-md mb-0">Educación</h1>
    </div>


    <div class="row g-3 g-md-4">
      <div v-for="edu in education_store.educations" :key="edu.id" class="col-12 col-sm-6 col-lg-6">
        <div class="card shadow-sm education-card h-100">
          <div class="card-body p-3 p-md-4">
            <div class="d-flex justify-content-between align-items-start mb-3">
              <div class="flex-grow-1 me-2">
                <h3 class="h6 h5-md mb-1">{{ edu.degree }}</h3>
                <p class="text-primary mb-1 fw-semibold small">{{ edu.institution }}</p>
                <p class="text-muted small mb-2">{{ edu.field }}</p>
                <p class="text-muted small mb-0">
                  {{ formatear_fecha(edu.start_date) }} - {{ formatear_fecha(edu.end_date) }}
                </p>
              </div>
            </div>

            <p v-if="edu.description" class="text-muted small mb-0">{{ edu.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.education-card {
  transition: transform 0.2s, box-shadow 0.2s;
}

.education-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1) !important;
}
</style>
