<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'

const is_sidebar_open = ref(false)

function alternarSidebar() {
  is_sidebar_open.value = !is_sidebar_open.value
}

function cerrarSidebar() {
  is_sidebar_open.value = false
}
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
        <h3 class="h4 mb-0 fw-bold text-center gradient-text">
          CV Portfolio
        </h3>
        <div class="d-flex justify-content-center mt-3">
          <ThemeToggle />
        </div>
      </div>

      <nav class="sidebar-nav p-3">
        <ul class="nav flex-column gap-2">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link" @click="cerrarSidebar" active-class="active">
              <i class="bi bi-person-circle me-2"></i>
              <span>Perfil</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/experiencia" class="nav-link" @click="cerrarSidebar" active-class="active">
              <i class="bi bi-briefcase me-2"></i>
              <span>Experiencia</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/educacion" class="nav-link" @click="cerrarSidebar" active-class="active">
              <i class="bi bi-mortarboard me-2"></i>
              <span>Educación</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/habilidades" class="nav-link" @click="cerrarSidebar" active-class="active">
              <i class="bi bi-star me-2"></i>
              <span>Habilidades</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/proyectos" class="nav-link" @click="cerrarSidebar" active-class="active">
              <i class="bi bi-code-square me-2"></i>
              <span>Proyectos</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/certificaciones" class="nav-link" @click="cerrarSidebar" active-class="active">
              <i class="bi bi-award me-2"></i>
              <span>Certificaciones</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contacto" class="nav-link" @click="cerrarSidebar" active-class="active">
              <i class="bi bi-envelope me-2"></i>
              <span>Contacto</span>
            </RouterLink>
          </li>
        </ul>
      </nav>

      <!-- Sidebar footer decoration -->
      <div class="sidebar-footer">
        <div class="decoration-line"></div>
      </div>
    </aside>

    <!-- Overlay for mobile -->
    <div v-if="is_sidebar_open" class="sidebar-overlay d-lg-none" @click="cerrarSidebar"></div>

    <!-- Main content -->
    <main class="main-content">
      <div class="container-fluid py-4 px-4">
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
}

/* Mobile Navbar - Compact and Fixed */
.mobile-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  backdrop-filter: blur(10px);
  z-index: 1050;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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
  transition: transform 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
}

.menu-toggle-btn:hover {
  background-color: rgba(139, 92, 246, 0.1);
}

.menu-toggle-btn:active {
  transform: scale(0.95);
}

.text-purple {
  color: var(--primary-purple);
}

.sidebar {
  width: 280px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  overflow-y: auto;
  z-index: 1040;
  transition: all 0.3s ease-in-out;
  background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  border-bottom: 1px solid var(--border-color);
  position: relative;
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

.sidebar-nav {
  padding-top: 2rem !important;
}

.sidebar-nav .nav-link {
  padding: 0.875rem 1.25rem;
  border-radius: 0.75rem;
  color: var(--text-secondary);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  font-weight: 500;
  position: relative;
  overflow: hidden;
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
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(124, 58, 237, 0.15) 100%);
  color: var(--primary-purple);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.2);
}

.sidebar-nav .nav-link.active::before {
  transform: scaleY(1);
}

.sidebar-nav .nav-link i {
  font-size: 1.2rem;
  width: 24px;
}

.sidebar-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
}

.decoration-line {
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary-purple), transparent);
  opacity: 0.3;
}

.main-content {
  margin-left: 280px;
  width: calc(100% - 280px);
  padding-top: 0;
  min-height: 100vh;
  background-color: var(--bg-primary);
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 1035;
}

@media (max-width: 991.98px) {
  .sidebar-overlay {
    top: 56px;
    /* Below mobile navbar */
    height: calc(100% - 56px);
  }
}

/* Mobile styles */
@media (max-width: 991.98px) {
  .sidebar {
    transform: translateX(-100%);
    top: 56px;
    /* Starts below the mobile navbar */
    height: calc(100vh - 56px);
  }

  .sidebar.show {
    transform: translateX(0);
    box-shadow: 4px 0 20px rgba(0, 0, 0, 0.5);
  }

  .main-content {
    margin-left: 0;
    width: 100%;
    padding-top: 56px;
    /* Space for fixed mobile navbar */
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
}
</style>
