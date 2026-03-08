<script setup lang="ts">
import { useRoute } from 'vue-router'
import { trabajos } from '../data'

const route = useRoute()

const id = Number(route.params.id)

const trabajo = trabajos.find(t => t.id === id)
</script>

<template>
  <div v-if="trabajo">
    <h1>{{ trabajo.titulo }}</h1>
    <p>Tipo: {{ trabajo.familia }}</p>
  </div>
</template>