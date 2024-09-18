<script setup lang="ts">
import { ref } from 'vue';
import NavComponent from '@/components/NavComponent.vue';

const project = ref(import.meta.env.VITE_APP_TITLE);

const navItems = ref([
{ text: 'Services', href: '#services' },
{ text: 'Products', href: '#products' },
{ text: 'Our Brand', href: '#brand' },
{ text: 'Contact', href: '#contact' }
])

</script>

<template>
  <NavComponent :project="project" :nav-items="navItems"/>
</template>

<style scoped>

</style>