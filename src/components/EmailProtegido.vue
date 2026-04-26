<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  userB64: { type: String, required: true },
  domainB64: { type: String, required: true },
  tldB64: { type: String, default: 'Y29t' },
  iconClass: { type: String, default: '' },
  showCopyBtn: { type: Boolean, default: false },
  variant: { type: String, default: 'inline' }
})

const decodificado = ref({ user: '', domain: '', tld: '' })
const listo = ref(false)

function invertir(str) {
  return str.split('').reverse().join('')
}

function decodificar(b64) {
  try { return atob(b64) } catch { return '' }
}

onMounted(() => {
  requestAnimationFrame(() => {
    decodificado.value = {
      user: decodificar(props.userB64),
      domain: decodificar(props.domainB64),
      tld: decodificar(props.tldB64)
    }
    listo.value = true
  })
})

const partesInvertidas = computed(() => ({
  user: invertir(decodificado.value.user),
  domain: invertir(decodificado.value.domain),
  tld: invertir(decodificado.value.tld)
}))

const emailReal = computed(() =>
  `${decodificado.value.user}@${decodificado.value.domain}.${decodificado.value.tld}`
)

const trampas = [
  'no-reply@spam-trap.invalid',
  'abuse@do-not-contact.example',
  'honeypot@bot-trap.local'
]

function abrirMailto(event) {
  event.preventDefault()
  if (!listo.value) return
  window.location.href = `mailto:${emailReal.value}`
}

const copiado = ref(false)
async function copiarEmail() {
  if (!listo.value) return
  try {
    await navigator.clipboard.writeText(emailReal.value)
    copiado.value = true
    setTimeout(() => { copiado.value = false }, 2000)
  } catch {
    const tmp = document.createElement('textarea')
    tmp.value = emailReal.value
    document.body.appendChild(tmp)
    tmp.select()
    document.execCommand('copy')
    document.body.removeChild(tmp)
    copiado.value = true
    setTimeout(() => { copiado.value = false }, 2000)
  }
}
</script>

<template>
  <span class="email-protegido" :class="`variant-${variant}`">
    <i v-if="iconClass" :class="iconClass" class="email-icon"></i>

    <a href="#" class="email-link" @click="abrirMailto" aria-label="Enviar correo electrónico">
      <span class="decoy" aria-hidden="true">{{ trampas[0] }}</span>

      <span v-if="listo" class="email-render" data-bot="ignore">
        <span class="rev">{{ partesInvertidas.user }}</span>
        <span class="at" aria-hidden="true"></span>
        <span class="rev">{{ partesInvertidas.domain }}</span>
        <span class="dot" aria-hidden="true"></span>
        <span class="rev">{{ partesInvertidas.tld }}</span>
      </span>
      <span v-else class="email-loading">cargando…</span>

      <span class="decoy" aria-hidden="true">{{ trampas[1] }}</span>
      <span class="decoy decoy-hidden" aria-hidden="true">{{ trampas[2] }}</span>
    </a>

    <button v-if="showCopyBtn" type="button" class="copy-btn"
      :title="copiado ? '¡Copiado!' : 'Copiar dirección'"
      :aria-label="copiado ? 'Email copiado al portapapeles' : 'Copiar email al portapapeles'"
      @click.stop.prevent="copiarEmail">
      <i :class="copiado ? 'bi bi-check2-circle' : 'bi bi-clipboard'"></i>
    </button>
  </span>
</template>

<style scoped>
.email-protegido {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.email-icon {
  color: var(--primary-purple);
  flex-shrink: 0;
}

.email-link {
  display: inline-flex;
  align-items: baseline;
  text-decoration: none;
  color: var(--primary-purple);
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: color 0.2s ease;
  word-break: break-all;
}

.email-link:hover {
  color: var(--primary-purple-light);
}

.email-link:hover .email-render {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.email-render {
  user-select: none;
  -webkit-user-select: none;
  display: inline-block;
}

.rev {
  unicode-bidi: bidi-override;
  direction: rtl;
  display: inline-block;
}

.at::before {
  content: "\0040";
}

.dot::before {
  content: "\002E";
}

.decoy {
  position: absolute !important;
  left: -10000px !important;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  font-size: 0;
  color: transparent;
}

.decoy-hidden {
  display: none;
}

.email-loading {
  color: var(--text-secondary);
  font-style: italic;
  font-size: 0.9em;
  opacity: 0.7;
}

.copy-btn {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--primary-purple);
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.copy-btn:hover {
  background: var(--primary-purple);
  color: white;
  border-color: var(--primary-purple);
  transform: translateY(-1px);
}

.copy-btn:active {
  transform: translateY(0);
}

.variant-block {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: rgba(139, 92, 246, 0.06);
  border: 1px dashed rgba(139, 92, 246, 0.3);
  border-radius: 0.75rem;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.variant-block:hover {
  background: rgba(139, 92, 246, 0.1);
  border-color: var(--primary-purple);
}
</style>
