<script setup lang="ts">
import BackHome from '@/components/BackHome.vue'
</script>


<template>

  <BackHome/>
  
  <section class="min-h-screen p-6 bg-gray-100">
    <h1 class="text-4xl font-bold mb-8 text-center">Galería de Trabajos</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <RouterLink to="/gallery/diseno">
        <div class="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition cursor-pointer text-center">
          Diseño
        </div>
      </RouterLink>

      <RouterLink to="/gallery/ilustracion">
        <div class="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition cursor-pointer text-center">
          Ilustración
        </div>
      </RouterLink>

      <RouterLink to="/gallery/animacion">
        <div class="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition cursor-pointer text-center">
          Animación
        </div>
      </RouterLink>
    </div>

   
    <router-view />
  </section>
</template>


<style scoped>

</style>