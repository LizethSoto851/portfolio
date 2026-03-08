<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { trabajos } from '../data'

const trabajosAnimacion = trabajos.filter(t => t.familia === 'animacion')
</script>

<template>
  <div>
    <h2>Animación</h2>

    <div v-for="trabajo in trabajosAnimacion" :key="trabajo.id">
      <RouterLink :to="`/gallery/animacion/${trabajo.id}`">
        {{ trabajo.titulo }}
      </RouterLink>
    </div>

  </div>
</template>