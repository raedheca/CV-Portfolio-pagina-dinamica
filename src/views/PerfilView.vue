<script setup>
import perfilImage from '@/assets/perfil.jpeg'

</script>

<template>
  <div class="profile-view">
    <div
      class="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-3 mb-md-4 gap-2">
      <h1 class="h3 h2-md mb-0">Mi Perfil</h1>
    </div>

    <div class="row g-3 g-md-4">
      <!-- Avatar and basic info -->
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card shadow-sm">
          <div class="card-body text-center p-3 p-md-4">
            <div class="mb-3">
              <div class="avatar-container mx-auto mb-3">
                <img :src="perfilImage" alt="Foto de perfil" class="avatar">
              </div>
            </div>

            <h2 class="h5 h4-md mb-1">Rafael Hernandez Cañizalez</h2>
            <p class="text-muted mb-3 small">Programador Full Stack</p>

            <div class="contact-info text-start">
              <div class="mb-2 d-flex align-items-center">
                <i class="bi bi-envelope text-primary me-2 flex-shrink-0"></i>
                <small class="text-break">raedheca@gmail.com</small>
              </div>
              <div class="mb-2 d-flex align-items-center">
                <i class="bi bi-geo-alt text-primary me-2 flex-shrink-0"></i>
                <small>CABA, Argentina</small>
              </div>
            </div>

            <hr class="my-3">

            <div class="d-flex justify-content-center gap-2 flex-wrap">
              <a href="https://linkedin.com/in/raedheca" target="_blank"
                class="btn btn-sm btn-outline-primary">
                <i class="bi bi-linkedin"></i>
              </a>
              <a  href="https://github.com/raedheca" target="_blank"
                class="btn btn-sm btn-outline-primary">
                <i class="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-8">
        <div class="card shadow-sm h-100">
          <div class="card-body p-3 p-md-4">
            <h3 class="h6 h5-md mb-3">Resumen Profesional</h3>
            <p>Programador Full Stack con 3 años de experiencia en el desarrollo de aplicaciones web. Inicié mi carrera trabajando con JavaScript, luego profundicé en PHP y actualmente también manejo Python para el desarrollo de soluciones versátiles y escalables. </p>
            <p> Me especializo en la construcción de aplicaciones tanto en frontend como en backend, integrando bases de datos y optimizando la experiencia del usuario.</p>
            <ul class="text-muted">
              <li>Modernización y refactorización de código legacy, reduciendo deuda técnica y mejorando mantenibilidad.</li>
              <li>Automatización de procesos mediante colas de trabajo en Laravel, incrementando eficiencia y escalabilidad.</li>
              <li>Rediseño y actualización de interfaces para mejorar usabilidad y experiencia del usuario.</li>
              <li>Normalización de bases de datos desde cero y optimización de queries con mejoras perceptibles en tiempo de respuesta.</li>
              <li>Integración de APIs, pruebas automatizadas y despliegues versionados para asegurar estabilidad en producción.</li>
              <li>Enfoque en buenas prácticas, calidad de código y soluciones orientadas a negocio.</li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.avatar-container {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 768px) {
  .avatar-container {
    width: 150px;
    height: 150px;
  }
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-placeholder {
  font-size: 4rem;
  color: #dee2e6;
}

@media (min-width: 768px) {
  .avatar-placeholder {
    font-size: 5rem;
  }
}

.contact-info i {
  width: 20px;
}

.modal.show {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
