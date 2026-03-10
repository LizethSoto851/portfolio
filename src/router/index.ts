import Home from "@/pages/home/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    { path: '/', name: 'home', component: Home },

    { path: '/contacto', name: 'contacto', component: () => import('@/pages/contacto/Contacto.vue') },

    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('@/pages/gallery/Gallery.vue'),
      children: [

      
        { 
          path: ':familia/:id', 
          name: 'trabajo', 
          component: () => import('@/pages/gallery/trabajos/TrabajoIndividual.vue') 
        },

       
        { path: 'diseno', name: 'diseno', component: () => import('@/pages/gallery/secciones/Diseno.vue') },
        { path: 'ilustracion', name: 'ilustracion', component: () => import('@/pages/gallery/secciones/Ilustracion.vue') },
        { path: 'animacion', name: 'animacion', component: () => import('@/pages/gallery/secciones/Animacion.vue') },

      ]
    },

    { path: '/sobre-mi', name: 'sobre-mi', component: () => import('@/pages/sobre-mi/SobreMi.vue') },

    { path: '/:pathMatch(.*)*', redirect: '/' },
  ]
})