<script setup lang="ts">
import BackHome from '@/components/BackHome.vue'
import { trabajos } from './data'
import { reactive, ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const filtro = ref('todos')


const trabajosFiltrados = computed(() => {
  if (filtro.value === 'todos') return trabajos
  return trabajos.filter(t => t.familia === filtro.value)
})


const imagenActual = reactive<{ [key: number]: string }>({})
trabajos.forEach(t => {
  imagenActual[t.id] = t.imagen as string
})


function hoverEnter(id: number, extras?: string[]) {
  if (extras && extras.length > 0) {
    imagenActual[id] = extras[0] as string
  }
}

function hoverLeave(id: number, imagen: string) {
  imagenActual[id] = imagen as string
}
</script>

<template>
  <BackHome/>

  <section class="min-h-screen py-10 bg-gray-100">

   
    <div v-if="!route.params.id" class="max-w-4xl mx-auto px-6">

      <h1 class="text-4xl font-bold mb-8 text-center">
        Galería de Trabajos
      </h1>

     
      <div class="flex justify-center gap-4 mb-10 flex-wrap">
        <button @click="filtro='todos'" class="px-4 py-2 bg-white shadow rounded">Todos</button>
        <button @click="filtro='diseno'" class="px-4 py-2 bg-white shadow rounded">Diseño</button>
        <button @click="filtro='ilustracion'" class="px-4 py-2 bg-white shadow rounded">Ilustración</button>
        <button @click="filtro='pintura'" class="px-4 py-2 bg-white shadow rounded">Pintura</button>
      </div>

   
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-10">

        <RouterLink
          v-for="trabajo in trabajosFiltrados"
          :key="trabajo.id"
          :to="`/gallery/${trabajo.familia}/${trabajo.id}`"
          class="relative group overflow-hidden shadow-lg block"
          @mouseenter="hoverEnter(trabajo.id, trabajo.imagenesExtra)"
          @mouseleave="hoverLeave(trabajo.id, trabajo.imagen)"
        >

          <img
            :src="imagenActual[trabajo.id]"
            class="w-full aspect-3/4 object-cover"
          />

          <p class="mt-2 text-center font-semibold">
            {{ trabajo.titulo }}
          </p>

        </RouterLink>
      </div>
    </div>
    <RouterView/>
  </section>
</template>


