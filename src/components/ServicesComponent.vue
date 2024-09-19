<script setup lang="ts">
import { faShieldVirus, faNetworkWired, faLock } from '@fortawesome/free-solid-svg-icons';
import { ref } from 'vue';


const services = ref([
    { title: 'Network Security', description: 'Protect your network from external threats and unauthorized access.', icon:  faNetworkWired},
    { title: 'Data Encryption', description: 'Secure your sensitive data with advanced encryption techniques.', icon: faLock },
    { title: 'Cloud Security', description: 'Ensure your cloud infrastructure is protected against cyber threats.', icon: faShieldVirus }
]);

</script>

<template>
    <section id="services" class="py-20">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="service in services" :key="service.title" class="bg-white p-6 rounded-lg shadow-md">
                    <font-awesome-icon :icon=service.icon class="text-4xl mb-4" />
                    <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
                    <p class="text-gray-600">{{ service.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>