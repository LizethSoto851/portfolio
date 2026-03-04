<script setup lang="ts">
import corkBg from "../../assets/images/corcho.jpg"
import myPhoto from "../../assets/images/miFoto.jpg"
import pincha from "../../assets/images/pinchita.png"
</script>

<template>
  <section class="min-h-screen bg-pink-100 flex items-center justify-center">

    <!-- Tablero de corcho -->
    <div class="relative w-full max-w-8xl h-[90vh] sm:h-[80vh]">
      <img
        :src="corkBg"
        alt="Tablero de corcho"
        class="w-full h-full object-contain"
      />

     <div class="absolute top-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
  <!-- Chincheta real -->
  <img :src="pincha" alt="Pinza" class="w-16 h-16 -mb-4 z-10" />

  <!-- Foto -->
  <img
    :src="myPhoto"
    alt="Michelle"
    class=" w-32 h-32 object-cover border-4 border-white shadow-lg"
  />
</div>

      <!-- Nombre y frase debajo -->
      <div class="absolute bottom-6 w-full flex flex-col items-center">
        <h1 class="text-4xl font-bold text-center">
          Michelle Lizeth Soto Morales
        </h1>
        <p class="mt-2 text-lg text-center">
          Diseñadora en formación · Próxima animadora
        </p>
      </div>
    </div>

  </section>
</template>