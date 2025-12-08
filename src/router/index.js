import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "perfil",
      component: () => import("@/views/PerfilView.vue"),
    },
    {
      path: "/experiencia",
      name: "experiencia",
      component: () => import("@/views/ExperienciaView.vue"),
    },
    {
      path: "/educacion",
      name: "educacion",
      component: () => import("@/views/EducacionView.vue"),
    },
    {
      path: "/habilidades",
      name: "habilidades",
      component: () => import("@/views/HabilidadesView.vue"),
    },
    {
      path: "/proyectos",
      name: "proyectos",
      component: () => import("@/views/ProyectosView.vue"),
    },
    {
      path: "/certificaciones",
      name: "certificaciones",
      component: () => import("@/views/CertificacionesView.vue"),
    },
    {
      path: "/contacto",
      name: "contacto",
      component: () => import("@/views/ContactoView.vue"),
    },
  ],
});

export default router;
