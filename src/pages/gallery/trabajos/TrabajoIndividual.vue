<script setup lang="ts">
import { useRoute } from 'vue-router'
import { trabajos } from '../data'
import BackGallery from '@/components/BackGallery.vue'

const route = useRoute()

const id = Number(route.params.id)

const trabajo = trabajos.find(t => t.id === id)
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-10">

    <BackGallery/>

    <div v-if="trabajo" class="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">

      <!-- Columna de imagen -->
      <div class="md:w-1/2 flex flex-col gap-4">

        <!-- Imagen principal -->
        <img
          :src="trabajo.imagen"
          class="w-full rounded-xl shadow-lg"
        />

        <!-- Imágenes extra debajo -->
        <div v-if="trabajo.imagenesExtra && trabajo.imagenesExtra.length" class="grid grid-cols-2 gap-4 mt-2">
          <img
            v-for="(img, index) in trabajo.imagenesExtra"
            :key="index"
            :src="img"
            class="w-full rounded-lg shadow"
          />
        </div>
      </div>

      <!-- Columna de texto -->
      <div class="md:w-1/2 flex flex-col justify-start">
        <h1 class="text-4xl font-bold mb-4">
          {{ trabajo.titulo }}
        </h1>
        <p class="text-gray-600 mb-6 font-medium">
          {{ trabajo.familia }}
        </p>
        <p class="text-lg">
          {{ trabajo.descripcion }}
        </p>
      </div>

    </div>
  </div>
</template>