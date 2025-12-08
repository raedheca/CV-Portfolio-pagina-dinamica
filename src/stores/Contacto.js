import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useContactStore = defineStore('contact', () => {
  const messages = ref([])

  let next_id = 1

  function addMessage(message) {
    messages.value.push({
      ...message,
      id: next_id++,
      date: new Date().toISOString(),
      read: false
    })
  }

  function marcarComoLeido(id) {
    const message = messages.value.find(msg => msg.id === id)
    if (message) {
      message.read = true
    }
  }

  function deleteMessage(id) {
    messages.value = messages.value.filter(msg => msg.id !== id)
  }

  return {
    messages,
    addMessage,
    marcarComoLeido,
    deleteMessage
  }
})
