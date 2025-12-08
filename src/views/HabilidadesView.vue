<script setup>
import { ref, computed } from 'vue'
import { useSkillsStore } from '@/stores/Habilidades'

const skills_store = useSkillsStore()

const grouped_skills = computed(() => {
  const groups = {}
  skills_store.skills.forEach(skill => {
    if (!groups[skill.category]) {
      groups[skill.category] = []
    }
    groups[skill.category].push(skill)
  })
  return groups
})


function obtener_nivel_color(level) {
  if (level >= 80) return 'success'
  if (level >= 60) return 'primary'
  if (level >= 40) return 'info'
  return 'warning'
}

function obtenerTextoNivel(level) {
  if (level >= 80) return 'Avanzado'
  if (level >= 60) return 'Intermedio'
  if (level >= 40) return 'Básico'
  return 'Principiante'
}
</script>

<template>
  <div class="skills-view">
    <div
      class="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-3 mb-md-4 gap-2">
      <h1 class="h3 h2-md mb-0">Habilidades</h1>
    </div>

    <div v-for="(skills, category) in grouped_skills" :key="category" class="mb-4 mb-md-5">
      <h2 class="h5 h4-md mb-3 text-primary">{{ category }}</h2>
      <div class="row g-3 g-md-4">
        <div v-for="skill in skills" :key="skill.id" class="col-12 col-sm-6 col-md-6 col-lg-4">
          <div class="card shadow-sm skill-card h-100">
            <div class="card-body p-3 p-md-4">
              <div class="d-flex justify-content-between align-items-start mb-3">
                <h3 class="h6 mb-0 flex-grow-1 me-2">{{ skill.name }}</h3>
              </div>

              <div class="mb-2">
                <div class="d-flex justify-content-between mb-1">
                  <small class="text-muted">{{ obtenerTextoNivel(skill.level) }}</small>
                  <small class="text-muted">{{ skill.level }}%</small>
                </div>
                <div class="progress" style="height: 8px;">
                  <div class="progress-bar" :class="`bg-${obtener_nivel_color(skill.level)}`"
                    :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skill-card {
  transition: transform 0.2s, box-shadow 0.2s;
}

.skill-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1) !important;
}

.modal.show {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
