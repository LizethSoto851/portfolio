<script setup lang="ts">
import BackHome from '@/components/BackHome.vue'
import { trabajos } from './data'
import { ref, computed } from 'vue'

const filtro = ref('todos')

const trabajosFiltrados = computed(() => {
  if (filtro.value === 'todos') return trabajos
  return trabajos.filter(t => t.familia === filtro.value)
})
</script>


<template>

      <BackHome/>
      
    <section class="min-h-screen p-6 bg-gray-100">

        <h1 class="text-4xl font-bold mb-8 text-center">
          Galería de Trabajos
        </h1>

        <div class="flex justify-center gap-4 mb-10 flex-wrap">

            <button
              @click="filtro='todos'"
              class="px-4 py-2 bg-white shadow rounded hover:scale-105 transition"
            >
              Todos
            </button>

            <button
              @click="filtro='diseno'"
              class="px-4 py-2 bg-white shadow rounded hover:scale-105 transition"
            >
              Diseño
            </button>

            <button
              @click="filtro='ilustracion'"
              class="px-4 py-2 bg-white shadow rounded hover:scale-105 transition"
            >
              Ilustración
            </button>

            <button
              @click="filtro='pintura'"
              class="px-4 py-2 bg-white shadow rounded hover:scale-105 transition"
            >
              Pintura
            </button>

        </div>


        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

         <RouterLink
  v-for="trabajo in trabajosFiltrados"
  :key="trabajo.id"
  :to="`/gallery/trabajo/${trabajo.id}`"
  class="relative group overflow-hidden  shadow-lg block"
>

  <!-- VIDEO -->
  <video
    v-if="trabajo.imagen.endsWith('.mp4')"
    :src="trabajo.imagen"
    class="w-full h-80 object-cover "
    autoplay
    muted
    loop
  />

  <!-- IMAGEN -->
  <img
    v-else
    :src="trabajo.imagen"
    class="w-full h-80 object-cover "
  />

  <!-- HOVER para imágenes extra, si quieres -->
  <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
    <!-- Aquí puedes poner miniaturas extra si luego agregas array extra en data -->
  </div>

  <!-- Título debajo -->
  <p class="mt-2 text-center font-semibold">{{ trabajo.titulo }}</p>

</RouterLink>

          


        </div>

    </section>

  
</template>

