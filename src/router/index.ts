import Home from "@/pages/home/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    { path: '/', name: 'home', component: Home },
    
    // Páginas de pegatinas
    { path: '/animacion', name: 'animacion', component: () => import('@/pages/animacion/Animacion.vue') },
    { path: '/diseno', name: 'diseno', component: () => import('@/pages/diseno/Diseno.vue') },
    { path: '/cafe', name: 'cafe', component: () => import('@/pages/cafe/Cafe.vue') },
    { path: '/musica', name: 'musica', component: () => import('@/pages/musica/Musica.vue') },

    // Catch-all
    { path: '/:pathMatch(.*)*', redirect: '/' },

        {
      path: '/sobre-mi',
      name: 'sobre-mi',
      component: () => import('@/pages/sobre-mi/SobreMi.vue')
    }
  ]
})