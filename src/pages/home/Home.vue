<script setup lang="ts">
import corkBg from "../../assets/images/corcho.jpg"
import myPhoto from "../../assets/images/miFoto.jpg"
import pincha from "../../assets/images/pinchita.png"
import stickerAnimacion from "../../assets/images/stickers/animacion.png"
import stickerDiseno from "../../assets/images/stickers/diseno.png"
import stickerCafe from "../../assets/images/stickers/cafe.png"
import stickerMusica from "../../assets/images/stickers/musica.png"
</script>import { RouterLink } from 'vue-router'

<template>
  <section class="min-h-screen bg-pink-100 flex items-center justify-center">

    <!-- Tablero de corcho -->
    <div class="relative w-[70%] max-w-6xl aspect-2520/1721 overflow-visible">
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
<!-- Pegatina animación -->
 <RouterLink to="/animacion">
<img
  :src="stickerAnimacion"
  class="absolute top-16 right-20 w-32 rotate-[8deg] hover:scale-110 transition duration-300 cursor-pointer"
/>
</RouterLink>

<!-- Pegatina diseño -->
 <RouterLink to="/diseno">
<img
  :src="stickerDiseno"
  class="absolute bottom-24 left-24 w-36 rotate-[-60deg] hover:scale-110 transition duration-300 cursor-pointer"
/>
</RouterLink>

<!-- Pegatina café -->
 <RouterLink to="/cafe">
<img
  :src="stickerCafe"
  class="absolute top-40 left-40 w-32 rotate-[5deg] hover:scale-110 transition duration-300 cursor-pointer"
/>
</RouterLink>

<!-- Pegatina música -->
 <RouterLink to="/musica">
<img
  :src="stickerMusica"
  class="absolute bottom-32 right-32 w-28 hover:scale-110 transition duration-300 cursor-pointer"
/>
</RouterLink>

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