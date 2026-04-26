<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'
import perfilImage from '@/assets/perfil.jpeg'

const is_sidebar_open = ref(false)

function alternarSidebar() {
  is_sidebar_open.value = !is_sidebar_open.value
}

function cerrarSidebar() {
  is_sidebar_open.value = false
}

const enlaces = [
  { to: '/', icon: 'bi-person-circle', label: 'Perfil' },
  { to: '/experiencia', icon: 'bi-briefcase', label: 'Experiencia' },
  { to: '/educacion', icon: 'bi-mortarboard', label: 'Educación' },
  { to: '/habilidades', icon: 'bi-star', label: 'Habilidades' },
  { to: '/proyectos', icon: 'bi-code-square', label: 'Proyectos' },
  { to: '/certificaciones', icon: 'bi-award', label: 'Certificaciones' },
  { to: '/contacto', icon: 'bi-envelope', label: 'Contacto' }
]
</script>

<template>
  <div class="app-layout">
    <!-- Compact Navbar for mobile - Always visible at top -->
    <nav class="mobile-navbar d-lg-none">
      <div class="mobile-navbar-content">
        <RouterLink to="/" class="navbar-brand gradient-text">
          <i class="bi bi-gem me-2"></i>
          <span class="brand-text">CV Portfolio</span>
        </RouterLink>
        <div class="navbar-actions">
          <ThemeToggle />
          <button class="menu-toggle-btn" type="button" @click="alternarSidebar" aria-label="Toggle navigation">
            <i class="bi" :class="is_sidebar_open ? 'bi-x-lg' : 'bi-list'"></i>
          </button>
        </div>
      </div>
    </nav>

    <!-- Sidebar -->
    <aside class="sidebar" :class="{ 'show': is_sidebar_open }">
      <div class="sidebar-header p-4">
        <div class="brand-row d-flex align-items-center justify-content-between mb-3">
          <h3 class="h5 mb-0 fw-bold gradient-text">
            <i class="bi bi-gem me-2"></i>Portfolio
          </h3>
          <ThemeToggle />
        </div>

        <!-- Mini perfil -->
        <div class="mini-profile">
          <div class="mini-avatar-wrap">
            <img :src="perfilImage" alt="Avatar" class="mini-avatar">
            <span class="status-dot" title="Disponible"></span>
          </div>
          <div class="mini-info">
            <div class="mini-name">Rafael Hernandez</div>
            <div class="mini-role">Full Stack Developer</div>
          </div>
        </div>
      </div>

      <nav class="sidebar-nav p-3" aria-label="Navegación principal">
        <ul class="nav flex-column gap-2">
          <li v-for="enlace in enlaces" :key="enlace.to" class="nav-item">
            <RouterLink :to="enlace.to" class="nav-link" @click="cerrarSidebar" active-class="active">
              <span class="nav-icon">
                <i class="bi" :class="enlace.icon"></i>
              </span>
              <span class="nav-label">{{ enlace.label }}</span>
              <i class="bi bi-chevron-right nav-chevron"></i>
            </RouterLink>
          </li>
        </ul>
      </nav>

      <!-- Sidebar footer decoration -->
      <div class="sidebar-footer">
        <div class="decoration-line"></div>
        <small class="footer-text">© {{ new Date().getFullYear() }} Rafael Hernandez</small>
      </div>
    </aside>

    <!-- Overlay for mobile -->
    <div v-if="is_sidebar_open" class="sidebar-overlay d-lg-none" @click="cerrarSidebar"></div>

    <!-- Main content -->
    <main class="main-content">
      <div class="container-fluid py-4 px-3 px-md-4 px-lg-5">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
  background-color: var(--bg-primary);
  position: relative;
  z-index: 1;
}

/* Mobile Navbar - Compact and Fixed */
.mobile-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: rgba(255, 255, 255, 0.85);
  border-bottom: 1px solid var(--border-color);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  z-index: 1050;
  box-shadow: 0 2px 12px rgba(139, 92, 246, 0.08);
}

[data-theme="dark"] .mobile-navbar {
  background: rgba(35, 29, 53, 0.85);
}

.mobile-navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
}

.navbar-brand {
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  gap: 0.5rem;
}

.brand-text {
  font-size: 0.95rem;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.menu-toggle-btn {
  background: none;
  border: none;
  color: var(--primary-purple);
  font-size: 1.5rem;
  padding: 0.25rem;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
}

.menu-toggle-btn:hover {
  background-color: rgba(139, 92, 246, 0.12);
}

.menu-toggle-btn:active {
  transform: scale(0.95);
}

.sidebar {
  width: 280px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  overflow-y: auto;
  z-index: 1040;
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  box-shadow: 1px 0 20px rgba(0, 0, 0, 0.04);
}

[data-theme="dark"] .sidebar {
  box-shadow: 1px 0 20px rgba(0, 0, 0, 0.3);
}

.sidebar-header {
  border-bottom: 1px solid var(--border-color);
  position: relative;
  padding-bottom: 1.25rem !important;
}

.sidebar-header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary-purple), transparent);
}

.mini-profile {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.75rem;
  background: rgba(139, 92, 246, 0.06);
  border: 1px solid rgba(139, 92, 246, 0.12);
  transition: background 0.25s ease, transform 0.25s ease;
}

.mini-profile:hover {
  background: rgba(139, 92, 246, 0.12);
  transform: translateY(-1px);
}

.mini-avatar-wrap {
  position: relative;
  flex-shrink: 0;
}

.mini-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--primary-purple);
  box-shadow: 0 2px 8px rgba(139, 92, 246, 0.25);
}

.status-dot {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  background: #10b981;
  border: 2px solid var(--bg-secondary);
  border-radius: 50%;
  animation: glowPulse 2s ease-out infinite;
}

.mini-info {
  min-width: 0;
}

.mini-name {
  font-weight: 600;
  font-size: 0.85rem;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mini-role {
  font-size: 0.72rem;
  color: var(--text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sidebar-nav {
  padding-top: 1.5rem !important;
  flex: 1 1 auto;
}

.sidebar-nav .nav-link {
  padding: 0.7rem 1rem;
  border-radius: 0.75rem;
  color: var(--text-secondary);
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  font-size: 0.92rem;
}

.sidebar-nav .nav-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 3px;
  background: var(--primary-purple);
  transform: scaleY(0);
  transition: transform 0.3s ease;
  border-radius: 0 4px 4px 0;
}

.sidebar-nav .nav-link:hover {
  background-color: rgba(139, 92, 246, 0.1);
  color: var(--primary-purple-light);
  transform: translateX(4px);
}

.sidebar-nav .nav-link:hover::before {
  transform: scaleY(1);
}

.sidebar-nav .nav-link.active {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.18) 0%, rgba(124, 58, 237, 0.12) 100%);
  color: var(--primary-purple);
  box-shadow: 0 4px 14px rgba(139, 92, 246, 0.18);
}

.sidebar-nav .nav-link.active::before {
  transform: scaleY(1);
}

.sidebar-nav .nav-link.active .nav-chevron {
  opacity: 1;
  transform: translateX(0);
}

.nav-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: rgba(139, 92, 246, 0.08);
  border-radius: 8px;
  font-size: 1rem;
  transition: background 0.25s ease;
  flex-shrink: 0;
}

.sidebar-nav .nav-link:hover .nav-icon,
.sidebar-nav .nav-link.active .nav-icon {
  background: rgba(139, 92, 246, 0.2);
}

.nav-label {
  flex: 1;
}

.nav-chevron {
  font-size: 0.75rem;
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.sidebar-footer {
  padding: 1rem 1.25rem 1.25rem;
  text-align: center;
}

.decoration-line {
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary-purple), transparent);
  opacity: 0.3;
  margin-bottom: 0.5rem;
}

.footer-text {
  color: var(--text-secondary);
  font-size: 0.7rem;
  letter-spacing: 0.03em;
}

.main-content {
  margin-left: 280px;
  width: calc(100% - 280px);
  padding-top: 0;
  min-height: 100vh;
  background-color: transparent;
  position: relative;
  z-index: 1;
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  z-index: 1035;
  animation: fadeIn 0.25s ease-out;
}

@media (max-width: 991.98px) {
  .sidebar-overlay {
    top: 60px;
    height: calc(100% - 60px);
  }
}

/* Mobile styles */
@media (max-width: 991.98px) {
  .sidebar {
    transform: translateX(-100%);
    top: 60px;
    height: calc(100vh - 60px);
  }

  .sidebar.show {
    transform: translateX(0);
    box-shadow: 4px 0 24px rgba(0, 0, 0, 0.4);
  }

  .main-content {
    margin-left: 0;
    width: 100%;
    padding-top: 60px;
  }
}

/* Scrollbar for sidebar */
.sidebar::-webkit-scrollbar {
  width: 6px;
}

.sidebar::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar::-webkit-scrollbar-thumb {
  background: var(--primary-purple);
  border-radius: 3px;
  opacity: 0.5;
}
</style>
