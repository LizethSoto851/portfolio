<script setup lang="ts">
import { RouterLink } from 'vue-router'

import corkBg from "/images/corcho.jpg"
import myPhoto from "/images/miFoto.jpg"
import pincha from "/images/pinchita.png"
import stickerContacto from "/stickers/contacto.png"
import stickerGallery from "/stickers/gallery.png"
import { ChevronDown } from "lucide-vue-next"
import { Mail, Instagram } from "lucide-vue-next"
</script>

<template>

  <!-- PORTADA -->
  <section class="h-screen flex items-center justify-center bg-white relative">
    
          <h1 class="text-6xl md:text-8xl font-bold flex flex-col items-center cursor-default">

          <span class="text-pink-300 hover:text-pink-600 hover:scale-110 transition duration-300">
            Lizeth´s
          </span>

          <span class="text-black hover:text-gray-600 hover:scale-110 transition duration-300 mt-2">
            Portfolio
          </span>

        </h1>

        <div class="absolute bottom-10 flex justify-center w-full animate-bounce">
          <ChevronDown class="w-10 h-10 text-pink-400" />
        </div>

  </section>


  <!-- TABLERO DE CORCHO -->
  <section class="min-h-screen bg-white flex items-center justify-center">

    <div class="relative w-[55%] max-w-6xl aspect-2520/1721 overflow-visible ">
      
      <img
        :src="corkBg"
        alt="Tablero de corcho"
        class="w-full h-full object-contain"
      />

      <!-- FOTO -->
      <div class="absolute top-12 left-1/2 -translate-x-1/2 flex flex-col items-center">

        <img :src="pincha" class="w-16 h-16 -mb-4 z-10"/>

        <RouterLink to="/sobre-mi">
          <img
            :src="myPhoto"
            class="w-32 h-32 object-cover border-4 border-white shadow-lg hover:scale-110 transition duration-300 cursor-pointer"
          />
        </RouterLink>

      </div>


      <!-- PEGATINAS -->

      <RouterLink to="/contacto">
        <img
          :src="stickerContacto"
          class="absolute top-16 right-20 w-32 rotate-[8deg] hover:scale-110 transition duration-300 cursor-pointer"
        />
      </RouterLink>

      <RouterLink to="/gallery">
        <img
          :src="stickerGallery"
          class="absolute bottom-24 left-24 w-36 rotate-[-60deg] hover:scale-110 transition duration-300 cursor-pointer"
        />
      </RouterLink>

     


      <!-- NOMBRE -->

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

  <footer class="w-full bg-pink-300 py-6 mt-12 flex flex-col md:flex-row items-center justify-center gap-6">

  <a href="mailto:lizsmu851@gmail.com" class="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition">
    <Mail class="w-5 h-5"/>
    lizsmu851@gmail.com
  </a>


  <a href="https://instagram.com/tuusuario" target="_blank" class="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition">
    <Instagram class="w-5 h-5"/>
    Instagram
  </a>

</footer>

</template>

