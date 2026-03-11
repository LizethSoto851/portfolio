<script setup lang="ts">
import BackHome from '@/components/BackHome.vue';

</script>

<template>
  <div class="min-h-screen bg-pink-100 pt-24 px-6 pb-16">
    <BackHome />  

    <section class="w-full max-w-4xl">
      <h1 class="text-4xl font-bold italic mb-6">¡Holi! Soy Lizeth</h1>

      <!-- Foto y presentación -->
      <div class="flex flex-col md:flex-row items-center md:items-start gap-6 max-w-4xl">
        <img
          src="/images/sobremi.jpg"
          alt="Michelle"
          class="w-70 h-70 object-cover border-4 border-white shadow-lg"
        />

        <div class="text-center md:text-left">
          <p class="mb-4">
            Soy diseñadora e ilusttradora en formación y próxima animadora. Me apasionan todos los tipos de animación y es a lo que me quiero dedicar. Además el munod del diseño de personajes me llama mucho la atención y estoy dispuesta a probar ese campo también
          </p>

          <p>
           
        <h2 class="text-2xl font-semibold">Educación</h2>
        <p class="text-gray-600">
          Grado en Diseño y tecnologías creativas  
          2024 - Actualidad
        </p>
     
        </p>
        </div>
      </div>

     
      <div class="mt-12 w-full max-w-4xl">
        <h2 class="text-2xl font-semibold mb-4">Intereses</h2>
        <div class="flex flex-wrap gap-2">
          <span class="bg-white px-4 py-2 rounded-lg shadow">Animación</span>
          <span class="bg-white px-4 py-2 rounded-lg shadow">Ilustración</span>
          <span class="bg-white px-4 py-2 rounded-lg shadow">Diseño</span>
        </div>
      </div>

      <div class="mt-12">
        <h2 class="text-2xl font-semibold mb-4">Plataformas</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 justify-items-center items-center">
          <img src="/logos/photoshop.png" alt="Photoshop" class="w-24 h-16 object-contain"/>
          <img src="/logos/illustrator.png" alt="Illustrator" class="w-24 h-16 object-contain"/>
          <img src="/logos/premiere.png" alt="Premiere" class="w-24 h-16 object-contain"/>
          <img src="/logos/indesign.png" alt="Indesign" class="w-24 h-16 object-contain"/>
        </div>
      </div>

    </section>
  </div>


</template>

<style scoped>
</style>