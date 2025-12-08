<script setup>
import { useProjectsStore } from '@/stores/Proyectos'

const projects_store = useProjectsStore()
</script>

<template>
  <div class="projects-view">
    <div
      class="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-3 mb-md-4 gap-2">
      <h1 class="h3 h2-md mb-0">Proyectos</h1>
    </div>

    <div class="row g-3 g-md-4">
      <div v-for="project in projects_store.projects" :key="project.id" class="col-12 col-sm-6 col-lg-4">
        <div class="card shadow-sm project-card h-100">
          <div v-if="project.image" class="project-image" :style="{ backgroundImage: `url(${project.image})` }"></div>
          <div v-else class="project-image-placeholder">
            <i class="bi bi-image"></i>
          </div>

          <div class="card-body p-3 p-md-4 d-flex flex-column">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <h3 class="h6 h5-md mb-0 flex-grow-1 me-2">{{ project.name }}</h3>
            </div>

            <p class="text-muted small mb-3 flex-grow-1">{{ project.description }}</p>

            <div v-if="project.technologies.length > 0" class="mb-3">
              <div class="d-flex flex-wrap gap-1">
                <span v-for="tech in project.technologies" :key="tech" class="badge bg-light text-dark border"
                  style="font-size: 0.7rem;">
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="d-flex flex-column flex-sm-row gap-2">
              <a v-if="project.url" :href="project.url" target="_blank"
                class="btn btn-sm btn-outline-primary flex-grow-1">
                <i class="bi bi-github me-1"></i>Código
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  transition: transform 0.2s, box-shadow 0.2s;
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.15) !important;
}

.project-image {
  height: 200px;
  background-size: cover;
  background-position: center;
}

.project-image-placeholder {
  height: 200px;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #dee2e6;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
