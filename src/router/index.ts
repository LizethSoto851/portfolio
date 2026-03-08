import Home from "@/pages/home/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    { path: '/', name: 'home', component: Home },
    
    // Páginas de pegatinas
    { path: '/contacto', name: 'contacto', component: () => import('@/pages/contacto/Contacto.vue') },
    { path: '/gallery', name: 'gallery', component: () => import('@/pages/gallery/Gallery.vue') },
   

    // Catch-all
    { path: '/:pathMatch(.*)*', redirect: '/' },

        {
      path: '/sobre-mi',
      name: 'sobre-mi',
      component: () => import('@/pages/sobre-mi/SobreMi.vue')
    }
  ]
})