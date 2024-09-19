<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';
import NavComponent from '@/components/NavComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import ServicesComponent from '@/components/ServicesComponent.vue';
import ProductComponent from '@/components/ProductComponent.vue';
import BrandComponent from '@/components/BrandComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';


const project = ref(import.meta.env.VITE_APP_TITLE);

const navItems = ref([
{ text: 'Services', href: '#services' },
{ text: 'Products', href: '#products' },
{ text: 'Our Brand', href: '#brand' },
{ text: 'Contact', href: '#contact' }
])

const ApiComponent = defineAsyncComponent({
  loader:()=> import("@/components/ApiComponent.vue")
});

const ip = ref("");

const getIpFromChild = (value: string) => {
  ip.value = value;
};

</script>

<template>
  <div class="min-h-screen">
    <ApiComponent @update-ip="getIpFromChild"/>
    <NavComponent :project="project" :nav-items="navItems"/>
    <HeaderComponent :ip="ip"/>
    <ServicesComponent/>
    <ProductComponent/>
    <BrandComponent/>
    <FooterComponent :project="project" :nav-items="navItems"/>
  </div>
</template>

<style scoped>

</style>