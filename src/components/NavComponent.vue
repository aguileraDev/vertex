<script setup lang="ts">
import { defineProps, type PropType } from 'vue';

const props = defineProps({
    navItems: {
        type: Array as PropType<{ text: string; href: string }[]>,
        required: true
    },
    project: {
        type: String,
        required: true,
    }
});


</script>

<template>
    <nav class="bg-white shadow-sm">
        <div class="container mx-auto p-4 flex justify-between items-center">
            <a href="#" class="text-2xl font-bold text-blue-600">{{ project.toUpperCase() }}</a>
            <div class="flex space-x-2 mx-1 lg:space-x-4">
                <a v-for="item in navItems" :key="item.href" :href="item.href"
                    class="text-gray-600 hover:text-blue-600 transition-colors">{{ item.text }}</a>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>