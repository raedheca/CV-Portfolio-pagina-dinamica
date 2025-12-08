<script setup>
import { ref } from 'vue'
import { useCertificationsStore } from '@/stores/Certificaciones'

const certifications_store = useCertificationsStore()
const show_image_modal = ref(false)
const current_image = ref('')
const current_title = ref('')

function abrirCertificacion(cert) {
  if (cert.pdfFile) {
    window.open(cert.pdfFile, '_blank')
  } else if (cert.type === 'file' && cert.file) {
    window.open(cert.file, '_blank')
  } else if (cert.type === 'url' && cert.url) {
    window.open(cert.url, '_blank')
  }
}

function abrirImagenModal(cert) {
  current_image.value = cert.previewImage
  current_title.value = cert.title
  show_image_modal.value = true
}

function cerrarImagenModal() {
  show_image_modal.value = false
}

function listas_habilidades(description) {
  if (!description) return []
  // Separar por comas, puntos y comas, o la palabra 'y'
  return description
    .split(/,|\sy\s/)
    .map(item => item.trim())
    .filter(item => item.length > 0)
}
</script>

<template>
  <div class="certifications-view">
    <div
      class="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-3 mb-md-4 gap-2">
      <h1 class="h3 h2-md mb-0">Certificaciones</h1>
    </div>

    <div class="row g-3 g-md-4">
      <div v-for="cert in certifications_store.certifications" :key="cert.id" class="col-12 col-sm-6 col-lg-4">
        <div class="card shadow-sm certification-card h-100">
          <!-- Preview de la imagen del certificado -->
          <div v-if="cert.previewImage" class="certification-preview" @click="abrirImagenModal(cert)">
            <img :src="cert.previewImage" :alt="cert.title" class="w-100">
            <div class="preview-overlay">
              <i class="bi bi-zoom-in"></i>
            </div>
          </div>

          <div class="card-body p-3 p-md-4">
            <h3 class="h6 mb-2">{{ cert.title }}</h3>
            <p class="text-primary small mb-1 fw-semibold">{{ cert.issuer }}</p>

            <ul v-if="cert.description" class="list-unstyled text-muted small mb-0">
              <li v-for="(habilidad, index) in listas_habilidades(cert.description)" :key="index" class="mb-2">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                {{ habilidad }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal para imagen ampliada -->
    <div v-if="show_image_modal" class="modal show d-block" tabindex="-1" @click="cerrarImagenModal">
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content bg-transparent border-0" @click.stop>
          <div class="modal-header border-0 pb-0">
            <h5 class="modal-title text-white">{{ current_title }}</h5>
            <button type="button" class="btn-close btn-close-white" @click="cerrarImagenModal"></button>
          </div>
          <div class="modal-body p-3">
            <img :src="current_image" :alt="current_title" class="w-100 rounded">
          </div>
          <div class="modal-footer border-0 pt-0">
            <button type="button" class="btn btn-light" @click="cerrarImagenModal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="show_image_modal" class="modal-backdrop show"></div>
  </div>
</template>

<style scoped>
.certification-card {
  transition: transform 0.2s, box-shadow 0.2s;
  overflow: hidden;
}

.certification-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1) !important;
}


.certification-preview {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
}

.certification-preview img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.certification-preview:hover img {
  transform: scale(1.05);
}

.preview-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.preview-overlay i {
  color: white;
  font-size: 3rem;
}

.certification-preview:hover .preview-overlay {
  opacity: 1;
}

.modal.show {
  background-color: rgba(0, 0, 0, 0.9);
}

.modal-content {
  box-shadow: none;
}

.modal-body img {
  max-height: 80vh;
  object-fit: contain;
}
</style>
