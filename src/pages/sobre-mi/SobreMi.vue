<script setup lang="ts">
import BackHome from '@/components/BackHome.vue';

</script>

<template>
  <div class="min-h-screen bg-pink-100 flex flex-col items-center p-6">
    <BackHome />  

    <section class="w-full max-w-4xl">
      <h1 class="text-4xl font-bold mb-6">¡Holi! Soy Lizeth</h1>

      <!-- Foto y presentación -->
      <div class="flex flex-col md:flex-row items-center md:items-start gap-6 max-w-4xl">
        <img
          src="/images/miFoto.jpg"
          alt="Michelle"
          class="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg"
        />

        <div class="text-center md:text-left">
          <p class="mb-4">
            Soy diseñadora en formación y próxima animadora. Me apasiona el diseño creativo y la web interactiva.
          </p>

          <p>
            Aquí puedes ver mis habilidades y estudios 
          </p>
        </div>
      </div>

     
      <div class="mt-12 w-full max-w-4xl">
        <h2 class="text-2xl font-semibold mb-4">Habilidades</h2>
        <ul class="flex flex-wrap gap-4">
          <li class="bg-white px-4 py-2 rounded-lg shadow">Diseño gráfico</li>
          <li class="bg-white px-4 py-2 rounded-lg shadow">Animación</li>
          <li class="bg-white px-4 py-2 rounded-lg shadow">Illustrator / Photoshop</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>