<script setup lang="ts">
import { useRoute } from 'vue-router'
import BackHome from '@/components/BackHome.vue'
import { trabajos } from '../data'

const route = useRoute()

const id = Number(route.params.id)

const trabajo = trabajos.find(t => t.id === id)
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-10">

    <BackHome/>

  <div v-if="trabajo" class="max-w-4xl mx-auto">


    <h1 class="text-4xl font-bold mb-4 text-center">
      {{ trabajo.titulo }}
    </h1>
    
    <p class="text-center text-gray-600 mb-10">
      {{ trabajo.familia }}
    </p>

    <img
    :src="trabajo.imagen"
    class="w-full rounded-xl shadow-lg mb-5"
    />

    <p class="text-lg mb-10 text-center">
      {{ trabajo.descripcion }}
    </p>

    <div v-if="trabajo.imagenesExtra" class="grid grid-cols-1 md:grid-cols-2 gap-6">

      <img
      v-for="(img, index) in trabajo.imagenesExtra"
      :key="index"
      :src="img"
      class="w-full rounded-lg shadow"
      />

    </div>

  </div>
  </div>
</template>