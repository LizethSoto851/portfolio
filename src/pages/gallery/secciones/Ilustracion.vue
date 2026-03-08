<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { trabajos } from '../data'

const trabajosIlustracion = trabajos.filter(t => t.familia === 'ilustracion')
</script>

<template>
  <div>
    <h2>Ilustración</h2>

    <div v-for="trabajo in trabajosIlustracion" :key="trabajo.id">
      <RouterLink :to="`/gallery/ilustracion/${trabajo.id}`">
        {{ trabajo.titulo }}
      </RouterLink>
    </div>
  </div>
</template>