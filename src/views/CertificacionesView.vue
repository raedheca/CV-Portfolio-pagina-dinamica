<script setup>
import { ref } from 'vue'
import { useCertificationsStore } from '@/stores/Certificaciones'

const certifications_store = useCertificationsStore()
const show_image_modal = ref(false)
const current_image = ref('')
const current_title = ref('')

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
  return description
    .split(/,|\sy\s/)
    .map(item => item.trim())
    .filter(item => item.length > 0)
}
</script>

<template>
  <div class="certifications-view">
    <div class="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-3 mb-md-4 gap-2">
      <h1 class="h3 h2-md mb-0 section-heading">Certificaciones</h1>
    </div>

    <div class="row g-3 g-md-4 stagger-children">
      <div v-for="cert in certifications_store.certifications" :key="cert.id" class="col-12 col-sm-6 col-lg-4">
        <article class="card shadow-sm certification-card h-100">
          <div v-if="cert.previewImage" class="certification-preview" @click="abrirImagenModal(cert)">
            <img :src="cert.previewImage" :alt="cert.title" class="w-100">
            <div class="preview-overlay">
              <i class="bi bi-zoom-in"></i>
              <span>Ampliar</span>
            </div>
            <div class="cert-ribbon">
              <i class="bi bi-patch-check-fill"></i>
            </div>
          </div>

          <div class="card-body p-3 p-md-4">
            <h3 class="h6 mb-1">{{ cert.title }}</h3>
            <p class="text-primary small mb-3 fw-semibold">
              <i class="bi bi-award-fill me-1"></i>{{ cert.issuer }}
            </p>

            <ul v-if="cert.description" class="list-unstyled cert-skills mb-0">
              <li v-for="(habilidad, index) in listas_habilidades(cert.description)" :key="index">
                <i class="bi bi-check2-circle"></i>
                <span>{{ habilidad }}</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>

    <transition name="page">
      <div v-if="show_image_modal" class="modal show d-block" tabindex="-1" @click="cerrarImagenModal">
        <div class="modal-dialog modal-dialog-centered modal-xl">
          <div class="modal-content bg-transparent border-0" @click.stop>
            <div class="modal-header border-0 pb-0">
              <h5 class="modal-title text-white">{{ current_title }}</h5>
              <button type="button" class="btn-close btn-close-white" @click="cerrarImagenModal"></button>
            </div>
            <div class="modal-body p-3">
              <img :src="current_image" :alt="current_title" class="w-100 rounded modal-cert-img">
            </div>
            <div class="modal-footer border-0 pt-0">
              <button type="button" class="btn btn-light" @click="cerrarImagenModal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div v-if="show_image_modal" class="modal-backdrop show"></div>
  </div>
</template>

<style scoped>
.certification-card {
  overflow: hidden;
  transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.35s ease;
}

.certification-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0.75rem 1.5rem var(--card-hover-shadow) !important;
}

.certification-preview {
  position: relative;
  overflow: hidden;
  cursor: zoom-in;
  background: linear-gradient(135deg, var(--bg-tertiary), rgba(139, 92, 246, 0.05));
  display: flex;
  align-items: center;
  justify-content: center;
}

.certification-preview img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.certification-preview:hover img {
  transform: scale(1.06);
}

.preview-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(0, 0, 0, 0.7) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
}

.preview-overlay i {
  font-size: 2.5rem;
}

.certification-preview:hover .preview-overlay {
  opacity: 1;
}

.cert-ribbon {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-purple), var(--primary-purple-dark));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
}

.cert-skills {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.cert-skills li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.85rem;
  padding: 0.35rem 0.5rem;
  border-radius: 0.5rem;
  background: rgba(139, 92, 246, 0.04);
  transition: background 0.2s ease, transform 0.2s ease;
}

.cert-skills li:hover {
  background: rgba(139, 92, 246, 0.1);
  transform: translateX(3px);
}

.cert-skills i {
  color: #10b981;
  font-size: 0.95rem;
  margin-top: 0.1rem;
  flex-shrink: 0;
}

.modal.show {
  background-color: rgba(0, 0, 0, 0.92);
}

.modal-content {
  box-shadow: none;
}

.modal-cert-img {
  max-height: 80vh;
  object-fit: contain;
}
</style>
