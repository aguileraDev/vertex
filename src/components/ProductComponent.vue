<script setup lang="ts">
import { ref } from 'vue';
import cloudImage from '@/assets/cloud-image.png';
import encryptImage from '@/assets/encrypt.png';
import vaultImage from '@/assets/vault.png';

const products = ref([
    {
        name: 'SecureGuard Pro',
        description: 'Comprehensive security suite for enterprise-level protection.',
        image: vaultImage
    },
    {
        name: 'EncryptMaster',
        description: 'Advanced encryption tool for sensitive data and communications.',
        image: encryptImage
    },
    {
        name: 'CloudArmor',
        description: 'Cloud-native security solution for modern infrastructures.',
        image: cloudImage
    }
])

</script>

<template>
    <section id="products" class="bg-gray-100 py-20">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12">Our Products</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="product in products" :key="product.name" class="bg-white p-6 rounded-lg shadow-md">
                    <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover rounded-md mb-4">
                    <h3 class="text-xl font-semibold mb-2">{{ product.name }}</h3>
                    <p class="text-gray-600 mb-4">{{ product.description }}</p>
                    <a href="#" class="text-blue-600 hover:underline">Learn more</a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>