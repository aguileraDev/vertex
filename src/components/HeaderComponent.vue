<script setup lang="ts">
const props = defineProps({
    ip:{
        type: String,
        required: true
    }
});

</script>
<template>
    <header class="bg-blue-600 text-white py-20">
        <div class="container mx-auto px-4 text-center">
            <h2 class="mb-2 p-2">Your IP: {{ ip }}</h2>
            <h1 class="text-4xl font-bold mb-4">Protecting Your Digital World</h1>
            <p class="text-xl mb-6">Advanced security solutions for businesses and individuals</p>
            <p class="text-2xl mb-12 font-semibold">Status: unprotected</p>
            <a href="#services"
                class="bg-white text-blue-600 p-4 rounded-full hover:bg-gray-100 transition-colors">Explore
                Services</a>
        </div>
    </header>
</template>

<style scoped>
</style>