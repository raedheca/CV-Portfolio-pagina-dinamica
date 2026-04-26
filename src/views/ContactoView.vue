<script setup>
import { ref } from 'vue'
import { useContactStore } from '@/stores/Contacto'
import emailjs from '@emailjs/browser'
import EmailProtegido from '@/components/EmailProtegido.vue'

const contact_store = useContactStore()

const form = ref({
  title: '',
  name: '',
  email: '',
  message: ''
})

const show_success = ref(false)
const show_error = ref(false)
const is_sending = ref(false)

async function enviarFormulario() {
  is_sending.value = true
  show_error.value = false

  try {
    const templateParams = {
      title: form.value.title,
      name: form.value.name,
      email: form.value.email,
      message: form.value.message
    }

    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

    contact_store.addMessage(form.value)

    form.value = {
      title: '',
      name: '',
      email: '',
      message: ''
    }

    show_success.value = true
    setTimeout(() => {
      show_success.value = false
    }, 5000)
  } catch (error) {
    console.error('Error al enviar email:', error)
    show_error.value = true
    setTimeout(() => {
      show_error.value = false
    }, 5000)
  } finally {
    is_sending.value = false
  }
}
</script>

<template>
  <div class="contact-view">
    <div class="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-3 mb-md-4 gap-2">
      <h1 class="h3 h2-md mb-0 section-heading">Contacto</h1>
    </div>

    <div class="row g-3 g-md-4">
      <!-- Información de contacto -->
      <div class="col-12 col-lg-4 order-2 order-lg-1 reveal">
        <div class="card shadow-sm contact-info-card">
          <div class="card-body p-3 p-md-4">
            <div class="contact-header mb-4">
              <div class="contact-header-icon">
                <i class="bi bi-chat-dots-fill"></i>
              </div>
              <div>
                <h2 class="h5 mb-1">Hablemos</h2>
              </div>
            </div>

            <div class="contact-block">
              <div class="contact-block-icon">
                <i class="bi bi-envelope-fill"></i>
              </div>
              <div class="contact-block-content">
                <small class="contact-label">Email</small>
                <EmailProtegido
                  user-b64="cmFlZGhlY2E="
                  domain-b64="Z21haWw="
                  tld-b64="Y29t"
                  :show-copy-btn="true" />
              </div>
            </div>

            <div class="contact-block">
              <div class="contact-block-icon">
                <i class="bi bi-geo-alt-fill"></i>
              </div>
              <div class="contact-block-content">
                <small class="contact-label">Ubicación</small>
                <span class="contact-value">CABA, Argentina</span>
              </div>
            </div>

            <hr class="my-4">

            <h3 class="h6 mb-3">
              <i class="bi bi-people-fill me-1 text-primary"></i>Redes Sociales
            </h3>
            <div class="d-flex gap-2 flex-wrap">
              <a href="https://linkedin.com/in/raedheca" target="_blank" rel="noopener"
                class="social-pill">
                <i class="bi bi-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/raedheca" target="_blank" rel="noopener"
                class="social-pill">
                <i class="bi bi-github"></i>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Formulario -->
      <div class="col-12 col-lg-8 order-1 order-lg-2 reveal reveal-delay-2">
        <div class="card shadow-sm">
          <div class="card-body p-3 p-md-4">
            <h2 class="h5 section-heading mb-3 mb-md-4">Enviar mensaje</h2>

            <transition name="page">
              <div v-if="show_success" class="alert alert-success alert-dismissible fade show" role="alert">
                <i class="bi bi-check-circle-fill me-2"></i>
                Mensaje enviado correctamente. Te responderé pronto.
                <button type="button" class="btn-close" @click="show_success = false"></button>
              </div>
            </transition>

            <transition name="page">
              <div v-if="show_error" class="alert alert-danger alert-dismissible fade show" role="alert">
                <i class="bi bi-exclamation-circle-fill me-2"></i>
                Error al enviar el mensaje. Por favor, intenta nuevamente.
                <button type="button" class="btn-close" @click="show_error = false"></button>
              </div>
            </transition>

            <form @submit.prevent="enviarFormulario">
              <div class="row g-3">
                <div class="col-12">
                  <label for="title" class="form-label">
                    <i class="bi bi-tag me-1 text-primary"></i>Asunto
                  </label>
                  <input v-model="form.title" type="text" name="title" id="title" class="form-control" required
                    placeholder="¿Que temas quieres hablar?" :disabled="is_sending" maxlength="120">
                </div>
                <div class="col-12 col-sm-6">
                  <label for="name" class="form-label">
                    <i class="bi bi-person me-1 text-primary"></i>Nombre
                  </label>
                  <input v-model="form.name" type="text" name="name" id="name" class="form-control" required
                    placeholder="Tu nombre" :disabled="is_sending" maxlength="80">
                </div>
                <div class="col-12 col-sm-6">
                  <label for="email" class="form-label">
                    <i class="bi bi-envelope me-1 text-primary"></i>Email
                  </label>
                  <input v-model="form.email" type="email" name="email" id="email" class="form-control" required
                    placeholder="tu@email.com" :disabled="is_sending">
                </div>
                <div class="col-12">
                  <label for="message" class="form-label d-flex justify-content-between align-items-center">
                    <span>
                      <i class="bi bi-chat-left-text me-1 text-primary"></i>Mensaje
                    </span>
                    <small class="text-muted">{{ form.message.length }} caracteres</small>
                  </label>
                  <textarea v-model="form.message" name="message" id="message" class="form-control" rows="6" required
                    placeholder="Cuentame tu  propuesta " :disabled="is_sending" maxlength="2000"></textarea>
                </div>
                <div class="col-12 d-flex justify-content-end">
                  <button type="submit" id="button" class="btn btn-primary submit-btn" :disabled="is_sending">
                    <span v-if="is_sending" class="spinner-border spinner-border-sm me-2"></span>
                    <i v-else class="bi bi-send-fill me-2"></i>
                    {{ is_sending ? 'Enviando...' : 'Enviar mensaje' }}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-info-card {
  position: sticky;
  top: 1rem;
}

.contact-header {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.contact-header-icon {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--primary-purple), var(--primary-purple-dark));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.3);
  flex-shrink: 0;
}

.contact-block {
  display: flex;
  gap: 0.85rem;
  align-items: flex-start;
  padding: 0.85rem;
  border-radius: 0.75rem;
  background: rgba(139, 92, 246, 0.04);
  border: 1px solid transparent;
  transition: background 0.25s ease, border-color 0.25s ease;
  margin-bottom: 0.75rem;
}

.contact-block:hover {
  background: rgba(139, 92, 246, 0.08);
  border-color: rgba(139, 92, 246, 0.2);
}

.contact-block-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(139, 92, 246, 0.15);
  color: var(--primary-purple);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 1rem;
}

.contact-block-content {
  flex: 1;
  min-width: 0;
}

.contact-label {
  display: block;
  color: var(--text-secondary);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.15rem;
}

.contact-value {
  color: var(--text-primary);
  font-weight: 500;
  font-size: 0.95rem;
}

.social-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.85rem;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: 999px;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.25s ease;
}

.social-pill i {
  color: var(--primary-purple);
  font-size: 1rem;
}

.social-pill:hover {
  background: linear-gradient(135deg, var(--primary-purple), var(--primary-purple-dark));
  color: white;
  border-color: transparent;
  transform: translateY(-2px);
}

.social-pill:hover i {
  color: white;
}

.submit-btn {
  min-width: 180px;
}

textarea.form-control {
  resize: vertical;
  min-height: 140px;
}
</style>
