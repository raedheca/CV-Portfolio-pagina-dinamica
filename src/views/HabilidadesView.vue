<script setup>
import { computed } from 'vue'
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
  // Ordenar cada categoría por nivel descendente
  Object.keys(groups).forEach(k => {
    groups[k].sort((a, b) => b.level - a.level)
  })
  return groups
})

const iconos_categoria = {
  'Lenguajes': 'bi-code-slash',
  'Frontend': 'bi-window-stack',
  'Backend': 'bi-server',
  'Bases de datos': 'bi-database',
  'DevOps': 'bi-gear-wide-connected',
  'Herramientas': 'bi-tools',
  'Metodologías': 'bi-diagram-3',
  'Habilidades blandas': 'bi-people',
  'Especialización': 'bi-bullseye',
  'Idiomas': 'bi-translate'
}

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
    <div class="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-3 mb-md-4 gap-2">
      <h1 class="h3 h2-md mb-0 section-heading">Habilidades</h1>
    </div>

    <div v-for="(skills, category, idx) in grouped_skills" :key="category"
      class="category-block mb-4 mb-md-5 reveal" :class="`reveal-delay-${(idx % 6) + 1}`">
      <div class="category-header mb-3">
        <div class="category-icon">
          <i :class="['bi', iconos_categoria[category] || 'bi-star-fill']"></i>
        </div>
        <h2 class="h5 h4-md mb-0">{{ category }}</h2>
        <span class="category-count">{{ skills.length }}</span>
      </div>

      <div class="row g-3 g-md-4 stagger-children">
        <div v-for="skill in skills" :key="skill.id || skill.name" class="col-12 col-sm-6 col-md-6 col-lg-4">
          <div class="card shadow-sm skill-card h-100">
            <div class="card-body p-3 p-md-4">
              <div class="d-flex justify-content-between align-items-start mb-3">
                <h3 class="h6 mb-0 flex-grow-1 me-2">{{ skill.name }}</h3>
                <span class="level-pill" :class="`level-${obtener_nivel_color(skill.level)}`">
                  {{ obtenerTextoNivel(skill.level) }}
                </span>
              </div>

              <div class="mb-1">
                <div class="d-flex justify-content-between mb-1">
                  <small class="text-muted">Dominio</small>
                  <small class="text-muted fw-semibold">{{ skill.level }}%</small>
                </div>
                <div class="progress skill-progress" style="height: 8px;">
                  <div class="progress-bar"
                    :class="`bg-${obtener_nivel_color(skill.level)}`"
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
.category-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.category-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.18), rgba(167, 139, 250, 0.12));
  color: var(--primary-purple);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  flex-shrink: 0;
}

.category-count {
  margin-left: auto;
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  border: 1px solid var(--border-color);
}

.skill-card {
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0.75rem 1.5rem var(--card-hover-shadow) !important;
}

.skill-progress {
  background-color: var(--bg-tertiary);
  border-radius: 999px;
  overflow: hidden;
  position: relative;
}

.skill-progress .progress-bar {
  border-radius: 999px;
  position: relative;
  overflow: hidden;
  transition: width 1s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.skill-progress .progress-bar::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.35) 50%,
    transparent 100%);
  animation: shimmer 2.5s linear infinite;
  background-size: 200% 100%;
}

.level-pill {
  font-size: 0.68rem;
  font-weight: 600;
  padding: 0.18rem 0.55rem;
  border-radius: 999px;
  letter-spacing: 0.03em;
  white-space: nowrap;
}

.level-success {
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
}

.level-primary {
  background: rgba(139, 92, 246, 0.15);
  color: var(--primary-purple);
}

.level-info {
  background: rgba(6, 182, 212, 0.15);
  color: #06b6d4;
}

.level-warning {
  background: rgba(245, 158, 11, 0.15);
  color: #f59e0b;
}
</style>
