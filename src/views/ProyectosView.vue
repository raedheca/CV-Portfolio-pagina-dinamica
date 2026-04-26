<script setup>
import { useProjectsStore } from '@/stores/Proyectos'

const projects_store = useProjectsStore()
</script>

<template>
  <div class="projects-view">
    <div class="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-3 mb-md-4 gap-2">
      <h1 class="h3 h2-md mb-0 section-heading">Proyectos</h1>
    </div>

    <div class="row g-3 g-md-4 stagger-children">
      <div v-for="project in projects_store.projects" :key="project.id" class="col-12 col-sm-6 col-lg-4">
        <article class="card shadow-sm project-card h-100">
          <div class="project-image-wrap">
            <div v-if="project.image" class="project-image" :style="{ backgroundImage: `url(${project.image})` }"></div>
            <div v-else class="project-image-placeholder">
              <i class="bi bi-image"></i>
            </div>
            <div class="project-overlay">
              <a v-if="project.url" :href="project.url" target="_blank" rel="noopener" class="overlay-btn">
                <i class="bi bi-eye-fill"></i>
                Ver código
              </a>
            </div>
          </div>

          <div class="card-body p-3 p-md-4 d-flex flex-column">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <h3 class="h6 h5-md mb-0 flex-grow-1 me-2">{{ project.name }}</h3>
              <i class="bi bi-folder-fill text-primary"></i>
            </div>

            <p class="text-muted small mb-3 flex-grow-1">{{ project.description }}</p>

            <div v-if="project.technologies.length > 0" class="mb-3">
              <div class="d-flex flex-wrap gap-1">
                <span v-for="tech in project.technologies" :key="tech" class="badge bg-light text-dark border tech-badge">
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="d-flex flex-column flex-sm-row gap-2">
              <a v-if="project.url" :href="project.url" target="_blank" rel="noopener"
                class="btn btn-sm btn-outline-primary flex-grow-1">
                <i class="bi bi-github me-1"></i>Código fuente
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  overflow: hidden;
  transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.35s ease;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 1rem 2rem var(--card-hover-shadow) !important;
}

.project-image-wrap {
  position: relative;
  overflow: hidden;
  height: 200px;
}

.project-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.project-card:hover .project-image {
  transform: scale(1.08);
}

.project-image-placeholder {
  height: 100%;
  background: linear-gradient(135deg, var(--bg-tertiary), rgba(139, 92, 246, 0.08));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  color: var(--primary-purple);
  opacity: 0.5;
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.65) 100%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.overlay-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.9rem;
  background: white;
  color: var(--primary-purple-dark);
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transform: translateY(8px);
  transition: transform 0.3s ease, background 0.3s ease;
}

.project-card:hover .overlay-btn {
  transform: translateY(0);
}

.overlay-btn:hover {
  background: var(--primary-purple);
  color: white;
}

.tech-badge {
  font-size: 0.7rem;
  letter-spacing: 0.02em;
}
</style>
