<script setup lang="ts">
import { ChevronLeft } from "lucide-vue-next"
</script>

<template>
  <RouterLink
    to="/"
    class="fixed top-4 left-4 flex items-center gap-2 
    bg-white px-2 py-2 
    rounded-xl border-5 border-yellow-200 
    shadow-lg 
    hover:scale-105 hover:-rotate-5 
    transition-all duration-200"
  >
    <ChevronLeft class="w-5 h-5" />
    Inicio
  </RouterLink>
</template>

