<script setup lang="ts">
import { RouterLink } from 'vue-router'

import corkBg from "/images/corcho.jpg"
import myPhoto from "/images/miFoto.jpg"
import pincha from "/images/pinchita.png"
import stickerContacto from "/stickers/contacto.png"
import stickerGallery from "/stickers/gallery.png"
import { ChevronDown } from "lucide-vue-next"
import { Mail, Instagram } from "lucide-vue-next"
import { useScrollToSection } from "@/composables/useScrollToSection"

const { scrollToSection } = useScrollToSection()
</script>

<template>
  <!-- PORTADA -->
  <section
    class="h-screen flex items-center justify-start px-8 md:px-20 bg-pink-100 lg:bg-[url('/images/fondo-home.jpg')] lg:bg-cover lg:bg-center relative"
  >
    <h1 class="text-7xl md:text-9xl max-w-4xl font-bold flex flex-col items-start text-left cursor-default">
      <span class="text-pink-300 hover:text-pink-600 hover:scale-110 transition duration-300">
        Lizeth´s
      </span>
      <span class="text-black hover:text-gray-600 hover:scale-110 transition duration-300 mt-2 ml-10">
        Portfolio
      </span>
    </h1>

    <div
      class="absolute bottom-10 flex justify-center inset-x-0 animate-bounce cursor-pointer"
      @click="scrollToSection('corcho')"
    >
      <ChevronDown class="w-10 h-10 text-pink-400" />
    </div>
  </section>

  <!-- TABLERO DE CORCHO -->
  <section
    id="corcho"
    class="min-h-screen bg-white flex items-center justify-center"
  >
    <div class="relative w-[90%] max-w-6xl aspect-2520/1721 overflow-visible">

      <!-- Fondo corcho -->
      <img
        :src="corkBg"
        alt="Tablero de corcho"
        class="w-full h-full object-contain hidden sm:block"
      />

      <!-- FOTO PRINCIPAL Desktop -->
      <div class="hidden sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:flex sm:flex-col sm:items-center sm:top-96">
        <img :src="pincha" class="w-16 h-16 -mb-4 z-10"/>
        <RouterLink to="/sobre-mi">
          <img
            :src="myPhoto"
            class="w-32 h-32 object-cover border-4 border-white shadow-lg hover:scale-110 transition duration-300 cursor-pointer"
          />
        </RouterLink>
      </div>

      <!-- PEGATINAS Desktop -->
      <RouterLink to="/contacto" class="hidden sm:block">
        <img
          :src="stickerContacto"
          class="absolute top-1/3 right-1/3 w-32 rotate-[8deg] hover:scale-110 transition duration-300 cursor-pointer"
        />
      </RouterLink>

      <RouterLink to="/gallery" class="hidden sm:block">
        <img
          :src="stickerGallery"
          class="absolute top-1/3 left-1/3 w-36 rotate-[-60deg] hover:scale-110 transition duration-300 cursor-pointer"
        />
      </RouterLink>

      <!-- Mobile: fila horizontal centrada -->
      <div class="sm:hidden absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4">
        <RouterLink to="/sobre-mi">
          <img
            :src="myPhoto"
            class="w-20 h-20 object-cover border-4 border-white shadow-lg hover:scale-110 transition duration-300 cursor-pointer"
          />
        </RouterLink>

        <RouterLink to="/contacto">
          <img
            :src="stickerContacto"
            class="w-16 h-16 hover:scale-110 transition duration-300 cursor-pointer"
          />
        </RouterLink>

        <RouterLink to="/gallery">
          <img
            :src="stickerGallery"
            class="w-16 h-16 hover:scale-110 transition duration-300 cursor-pointer"
          />
        </RouterLink>
      </div>

    </div>
  </section>

  <!-- FOOTER -->
  <footer class="w-full bg-pink-300 py-6 mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
    <a href="mailto:lizsmu851@gmail.com" class="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition">
      <Mail class="w-5 h-5"/>
      lizsmu851@gmail.com
    </a>

    <a href="https://www.instagram.com/lizeth.archive/" target="_blank" class="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition">
      <Instagram class="w-5 h-5"/>
      Instagram
    </a>
  </footer>
</template>
