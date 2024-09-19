<script setup lang="ts">
import { ref } from'vue';

const brandStats = ref([
{ value: '10+', label: 'Years Experience' },
{ value: '1000+', label: 'Clients Protected' },
{ value: '99.9%', label: 'Uptime' }
])

</script>

<template>
  <section id="brand" class="py-20">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-8">Our Brand</h2>
      <p class="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">At Vertex, we're committed to providing cutting-edge security solutions that protect your digital assets and give you peace of mind in an ever-evolving cyber landscape.</p>
      <div class="flex justify-center space-x-8">
        <div v-for="stat in brandStats" :key="stat.label" class="text-center">
          <div class="text-4xl font-bold text-blue-600 mb-2">{{ stat.value }}</div>
          <div class="text-gray-600">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>