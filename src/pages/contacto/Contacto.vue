<script setup lang="ts">
import BackHome from '@/components/BackHome.vue'
import { ref } from 'vue';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';


import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';


const nombre = ref ('')
const apellidos = ref ('')
const tipoEncargo = ref ('')
const descripción = ref ('')

const enviado = ref(false)
const error = ref ('')

function enviarFormulario () {
  if (!nombre.value || !apellidos.value || !tipoEncargo.value || !descripción.value) {
    error.value = '¡Completa todos los apartados porfi!'
    return
  }

  console.log ({
    nombre: nombre.value,
    apellidos: apellidos.value,
    tipoEncargo : tipoEncargo.value,
    descripción: descripción.value
  })

  nombre.value = ''
  apellidos.value = ''
  tipoEncargo.value = ''
  descripción.value = ''
  enviado.value = true
  error.value = ''
}

</script>


<template>
  <section class="min-h-screen bg-yellow-100 flex flex-col items-center p-6">
    <BackHome />

    <h1 class="text-4xl font-bold mb-6">Contacto</h1>

    <form @submit.prevent="enviarFormulario" class="w-full max-w-md bg-white p-8 rounded-lg shadow-lg space-y-6">
      <div class="space-y-2">
        <Label for="nombre"> Tu nombre!</Label>
        <Input id="nombre" v-model="nombre" required />
      </div>

      <div class="space-y-2">
        <Label for="apellidos"> Tus apellidos!</Label>
        <Input id="apellidos" v-model="apellidos" required />
      </div>

      <div class="space-y-2">
         <Label for="tipoEncargo">¿Que quieres pedir?</Label>
        <Select v-model="tipoEncargo" required>
          <SelectTrigger class="border-gray-200 bg-white text-gray-900">
            <SelectValue placeholder="Selecciona un tipo" />
          </SelectTrigger>
          <SelectContent class="bg-white">
            <SelectItem value="ilustracion">Ilustración</SelectItem>
            <SelectItem value="diseno">Diseño gráfico</SelectItem>
            <SelectItem value="animacion">Animación</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div class="space-y-2">
        <Label for="descripcion">Descripción del encargo</Label>
        <Textarea id="descripcion" v-model="descripción" rows="4" placeholder="Cuéntame qué necesitas..." required />
      </div>

      <Button type="submit" class="w-full bg-pink-300 hover:bg-purple-400 text-white">
        Enviar solicitud
      </Button>

      <p v-if="error" class="text-red-500">{{ error }}</p>
      <p v-if="enviado" class="text-green-300">¡Solicitud enviada correctamente, gracias! </p>

    </form>

  </section>
</template>


<style scoped>

</style>