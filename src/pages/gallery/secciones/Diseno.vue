<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { trabajos } from '../data'

const trabajosDiseno = trabajos.filter(t => t.familia === 'diseno')
</script>

<template>
  <div>
    <h2>Diseño</h2>

    <div v-for="trabajo in trabajosDiseno" :key="trabajo.id">
      <RouterLink :to="`/gallery/diseno/${trabajo.id}`">
        {{ trabajo.titulo }}
      </RouterLink>
    </div>

  </div>
</template>