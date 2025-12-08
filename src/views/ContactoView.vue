<script setup>
import { ref } from 'vue'
import { useContactStore } from '@/stores/Contacto'
import emailjs from '@emailjs/browser'

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
    // Enviar email con EmailJS - los nombres deben coincidir exactamente con el template
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

    // Guardar en el store
    contact_store.addMessage(form.value)

    // Reset form
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
    <h1 class="h3 h2-md mb-3 mb-md-4">Contacto</h1>

    <div class="row g-3 g-md-4">
      <!-- Contact Information -->
      <div class="col-12 col-md-6 col-lg-4 order-2 order-lg-1">
        <div class="card shadow-sm mb-3 mb-lg-4">
          <div class="card-body p-3 p-md-4">
            <h2 class="h6 h5-md mb-3 mb-md-4">Información de Contacto</h2>

            <div class="contact-item mb-3">
              <div class="d-flex align-items-center mb-2">
                <i class="bi bi-envelope-fill text-primary me-3 fs-5"></i>
                <div>
                  <small class="text-muted d-block">Email</small>
                  <a :href="`mailto:raedheca@gmail.com`" class="text-decoration-none">
                    raedheca@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <hr class="my-4">

            <h3 class="h6 mb-3">Redes Sociales</h3>
            <div class="d-flex gap-2 flex-wrap">
              <a href="https://linkedin.com/in/raedheca" target="_blank" class="btn btn-outline-primary btn-sm">
                <i class="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/raedheca" target="_blank" class="btn btn-outline-primary btn-sm">
                <i class="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="col-12 col-md-6 col-lg-8 order-1 order-lg-2">
        <div class="card shadow-sm">
          <div class="card-body p-3 p-md-4">
            <h2 class="h6 h5-md mb-3 mb-md-4">Enviar Mensaje</h2>

            <div v-if="show_success" class="alert alert-success alert-dismissible fade show" role="alert">
              <i class="bi bi-check-circle me-2"></i>
              Mensaje enviado correctamente. Te responderé pronto.
              <button type="button" class="btn-close" @click="show_success = false"></button>
            </div>

            <div v-if="show_error" class="alert alert-danger alert-dismissible fade show" role="alert">
              <i class="bi bi-exclamation-circle me-2"></i>
              Error al enviar el mensaje. Por favor, intenta nuevamente.
              <button type="button" class="btn-close" @click="show_error = false"></button>
            </div>

            <form @submit.prevent="enviarFormulario">
              <div class="row g-3">
                <div class="col-12">
                  <label for="title" class="form-label">Asunto</label>
                  <input v-model="form.title" type="text" name="title" id="title" class="form-control" required
                    placeholder="Asunto del mensaje" :disabled="is_sending">
                </div>
                <div class="col-12 col-sm-6">
                  <label for="name" class="form-label">Nombre</label>
                  <input v-model="form.name" type="text" name="name" id="name" class="form-control" required
                    placeholder="Tu nombre" :disabled="is_sending">
                </div>
                <div class="col-12 col-sm-6">
                  <label for="email" class="form-label">Email</label>
                  <input v-model="form.email" type="email" name="email" id="email" class="form-control" required
                    placeholder="tu@email.com" :disabled="is_sending">
                </div>
                <div class="col-12">
                  <label for="message" class="form-label">Mensaje</label>
                  <textarea v-model="form.message" name="message" id="message" class="form-control" rows="6" required
                    placeholder="Escribe tu mensaje aquí..." :disabled="is_sending"></textarea>
                </div>
                <div class="col-12">
                  <button type="submit" id="button" class="btn btn-primary" :disabled="is_sending">
                    <span v-if="is_sending" class="spinner-border spinner-border-sm me-2"></span>
                    <i v-else class="bi bi-send me-2"></i>
                    {{ is_sending ? 'Enviando...' : 'Enviar Mensaje' }}
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
.contact-item i {
  width: 24px;
}

.message-item {
  transition: background-color 0.2s;
}

.message-item:hover {
  background-color: #f8f9fa !important;
}
</style>
