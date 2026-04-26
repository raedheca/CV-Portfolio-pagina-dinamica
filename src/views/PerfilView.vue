<script setup>
import { RouterLink } from 'vue-router'
import perfilImage from '@/assets/perfil.jpeg'
import EmailProtegido from '@/components/EmailProtegido.vue'

const stack_principal = ['Vue 3', 'Laravel', 'Python', 'PHP', 'JavaScript', 'MySQL', 'Docker']

const stats = [
  { value: '3+', label: 'Años de experiencia', icon: 'bi-clock-history' },
  { value: '10+', label: 'Proyectos entregados', icon: 'bi-rocket-takeoff' },
  { value: '15+', label: 'Tecnologías', icon: 'bi-stack' }
]

const fortalezas = [
  { icon: 'bi-arrow-repeat', title: 'Modernización de legacy', text: 'Refactor de bases legacy y reducción de deuda técnica conservando estabilidad operativa.' },
  { icon: 'bi-lightning-charge', title: 'Automatización con colas', text: 'Procesamiento asíncrono en Laravel para escalar tareas pesadas sin degradar UX.' },
  { icon: 'bi-database-gear', title: 'Optimización de DB', text: 'Normalización desde cero y tuning de queries con mejoras tangibles en tiempo de respuesta.' },
  { icon: 'bi-shield-check', title: 'Calidad y despliegues', text: 'Pruebas automatizadas, integración de APIs y releases versionados para producción.' }
]
</script>

<template>
  <div class="profile-view">
    <!-- HERO -->
    <section class="hero-card reveal">
      <div class="hero-bg" aria-hidden="true"></div>

      <div class="hero-content">
        <div class="avatar-wrapper">
          <div class="avatar-glow"></div>
          <img :src="perfilImage" alt="Rafael Hernandez" class="avatar">
          <span class="status-badge">
            <span class="status-pulse"></span>
            Disponible
          </span>
        </div>

        <div class="hero-info">
          <span class="hero-eyebrow">
            <i class="bi bi-stars me-1"></i>Programador Full Stack
          </span>
          <h1 class="hero-name">
            Rafael Hernandez <span class="gradient-text">Cañizalez</span>
          </h1>
          <p class="hero-tagline">
            Construyo aplicaciones web modernas con foco en rendimiento, mantenibilidad y experiencia de usuario.
          </p>

          <div class="hero-meta">
            <span class="meta-pill">
              <i class="bi bi-geo-alt-fill"></i>
              CABA, Argentina
            </span>
            <EmailProtegido
              user-b64="cmFlZGhlY2E="
              domain-b64="Z21haWw="
              tld-b64="Y29t"
              icon-class="bi bi-envelope-fill" />
          </div>

          <div class="hero-actions">
            <a href="https://linkedin.com/in/raedheca" target="_blank" rel="noopener" class="btn btn-primary">
              <i class="bi bi-linkedin me-2"></i>LinkedIn
            </a>
            <a href="https://github.com/raedheca" target="_blank" rel="noopener" class="btn btn-outline-primary">
              <i class="bi bi-github me-2"></i>GitHub
            </a>
            <RouterLink to="/contacto" class="btn btn-outline-primary">
              <i class="bi bi-chat-dots me-2"></i>Hablemos
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="stats-grid stagger-children">
      <div v-for="stat in stats" :key="stat.label" class="stat-card">
        <div class="stat-icon">
          <i :class="['bi', stat.icon]"></i>
        </div>
        <div class="stat-body">
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <!-- RESUMEN + STACK -->
    <div class="row g-3 g-md-4">
      <div class="col-12 col-lg-8 reveal reveal-delay-3">
        <div class="card shadow-sm h-100">
          <div class="card-body p-3 p-md-4">
            <h2 class="h5 section-heading mb-3">Resumen Profesional</h2>
            <p>
              Programador Full Stack con 3 años de experiencia en el desarrollo de aplicaciones web.
              Inicié mi carrera trabajando con JavaScript, luego profundicé en PHP y actualmente
              también manejo Python para el desarrollo de soluciones versátiles y escalables.
            </p>
            <p>
              Me especializo en la construcción de aplicaciones tanto en frontend como en backend,
              integrando bases de datos y optimizando la experiencia del usuario.
            </p>

            <div class="strengths-grid">
              <div v-for="f in fortalezas" :key="f.title" class="strength-item">
                <div class="strength-icon">
                  <i :class="['bi', f.icon]"></i>
                </div>
                <div>
                  <h3 class="h6 mb-1">{{ f.title }}</h3>
                  <p class="text-muted small mb-0">{{ f.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-4 reveal reveal-delay-4">
        <div class="card shadow-sm h-100">
          <div class="card-body p-3 p-md-4">
            <h2 class="h5 section-heading mb-3">Stack Principal</h2>
            <div class="tech-cloud">
              <span v-for="(tech, i) in stack_principal" :key="tech" class="tech-chip"
                :style="{ animationDelay: `${0.05 * i}s` }">
                <i class="bi bi-check2"></i>
                {{ tech }}
              </span>
            </div>

            <hr class="my-3">

            <h3 class="h6 mb-3">
              <i class="bi bi-link-45deg me-1"></i>Conectemos
            </h3>
            <div class="d-grid gap-2">
              <a href="https://linkedin.com/in/raedheca" target="_blank" rel="noopener"
                class="social-link">
                <i class="bi bi-linkedin"></i>
                <span>linkedin.com/in/raedheca</span>
                <i class="bi bi-arrow-up-right ms-auto"></i>
              </a>
              <a href="https://github.com/raedheca" target="_blank" rel="noopener"
                class="social-link">
                <i class="bi bi-github"></i>
                <span>github.com/raedheca</span>
                <i class="bi bi-arrow-up-right ms-auto"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-view {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* ===== HERO ===== */
.hero-card {
  position: relative;
  border-radius: 1.5rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  overflow: hidden;
  isolation: isolate;
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.08);
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.18), transparent 50%),
    radial-gradient(circle at 100% 100%, rgba(167, 139, 250, 0.18), transparent 50%);
}

.hero-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(139, 92, 246, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(139, 92, 246, 0.06) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(circle at 50% 50%, black 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(circle at 50% 50%, black 30%, transparent 75%);
  opacity: 0.4;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 1.5rem;
  text-align: center;
}

@media (min-width: 768px) {
  .hero-content {
    flex-direction: row;
    text-align: left;
    align-items: center;
    gap: 2.5rem;
    padding: 2.5rem 2.5rem;
  }
}

.avatar-wrapper {
  position: relative;
  flex-shrink: 0;
}

.avatar-glow {
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  background: conic-gradient(from 0deg,
    var(--primary-purple),
    var(--primary-purple-light),
    var(--accent-purple),
    var(--primary-purple));
  filter: blur(14px);
  opacity: 0.55;
  animation: float 6s ease-in-out infinite;
  z-index: 0;
}

.avatar {
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--bg-secondary);
  box-shadow: 0 8px 24px rgba(139, 92, 246, 0.25);
  z-index: 1;
}

@media (min-width: 768px) {
  .avatar {
    width: 168px;
    height: 168px;
  }
}

.status-badge {
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35);
  z-index: 2;
  white-space: nowrap;
}

.status-pulse {
  width: 6px;
  height: 6px;
  background: white;
  border-radius: 50%;
  animation: glowPulse 2s ease-out infinite;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
}

.hero-info {
  flex: 1;
  min-width: 0;
}

.hero-eyebrow {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--primary-purple);
  background: rgba(139, 92, 246, 0.1);
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  margin-bottom: 0.75rem;
}

.hero-name {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
}

.hero-tagline {
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 1.25rem;
  max-width: 60ch;
}

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  justify-content: center;
}

@media (min-width: 768px) {
  .hero-meta {
    justify-content: flex-start;
  }
}

.meta-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.85rem;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: 999px;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.meta-pill i {
  color: var(--primary-purple);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

@media (min-width: 768px) {
  .hero-actions {
    justify-content: flex-start;
  }
}

/* ===== STATS ===== */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  border-color: var(--primary-purple);
  box-shadow: 0 8px 20px var(--card-hover-shadow);
}

.stat-icon {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(167, 139, 250, 0.15));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--primary-purple);
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  background: linear-gradient(135deg, var(--primary-purple), var(--primary-purple-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin-top: 0.25rem;
}

/* ===== STRENGTHS ===== */
.strengths-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1.5rem;
}

@media (min-width: 576px) {
  .strengths-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.strength-item {
  display: flex;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.75rem;
  background: rgba(139, 92, 246, 0.04);
  border: 1px solid transparent;
  transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
}

.strength-item:hover {
  background: rgba(139, 92, 246, 0.08);
  border-color: rgba(139, 92, 246, 0.3);
  transform: translateY(-2px);
}

.strength-icon {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--primary-purple), var(--primary-purple-dark));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}

/* ===== TECH CLOUD ===== */
.tech-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.4rem 0.8rem;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-primary);
  opacity: 0;
  animation: scaleIn 0.4s ease-out forwards;
  transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
}

.tech-chip i {
  color: var(--primary-purple);
  font-size: 0.85rem;
}

.tech-chip:hover {
  background: linear-gradient(135deg, var(--primary-purple), var(--primary-purple-dark));
  color: white;
  border-color: transparent;
  transform: translateY(-2px) scale(1.04);
}

.tech-chip:hover i {
  color: white;
}

/* ===== SOCIAL LINKS ===== */
.social-link {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.65rem 0.85rem;
  border-radius: 0.75rem;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  text-decoration: none;
  font-size: 0.85rem;
  transition: all 0.25s ease;
}

.social-link i:first-child {
  color: var(--primary-purple);
  font-size: 1.1rem;
}

.social-link:hover {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(167, 139, 250, 0.1));
  border-color: var(--primary-purple);
  transform: translateX(4px);
  color: var(--text-primary);
}

.social-link span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
}
</style>
