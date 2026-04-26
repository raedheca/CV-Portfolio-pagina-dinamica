<script setup>
import { RouterView } from 'vue-router'
import AppLayout from '@/components/AppLayout.vue'
import BotonVolverArriba from '@/components/BotonVolverArriba.vue'
</script>

<template>
  <div class="app-bg-decorative" aria-hidden="true"></div>
  <AppLayout>
    <RouterView v-slot="{ Component, route }">
      <transition name="page" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </transition>
    </RouterView>
  </AppLayout>
  <BotonVolverArriba />
</template>
