<script setup lang="ts">
import { ref, type PropType } from 'vue';
import { faFacebook,faXTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons';

const props = defineProps({
  navItems: {
    type: Array as PropType<{ text: string; href: string }[]>,
    required: true
  },
  project:{
    type: String,
    required: true,
  }
});
const socialLinks = ref([
{ name: 'Twitter', href: '#', icon: faXTwitter },
{ name: 'Facebook', href: '#', icon: faFacebook },
{ name: 'LinkedIn', href: '#', icon:faLinkedin }
])


</script>

<template>
  <footer class="bg-gray-800 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-semibold mb-4">{{ project }}</h3>
          <p class="text-gray-400">Protecting your digital world with advanced security solutions.</p>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li v-for="item in navItems" :key="item.href">
              <a :href="item.href" class="text-gray-400 hover:text-white transition-colors">{{ item.text }}</a>
            </li>
          </ul>
        </div>
        <div id="contact">
          <h4 class="text-lg font-semibold mb-4">Contact</h4>
          <p class="text-gray-400">Email: info@{{ project.toLowerCase() }}.com</p>
          <p class="text-gray-400">Phone: +1 (432) 123-4567</p>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Follow Us</h4>
          <div class="flex space-x-4">
            <a v-for="social in socialLinks" :key="social.name" :href="social.href" class="text-gray-400 hover:text-white transition-colors">
              <font-awesome-icon :icon="social.icon"  />
            </a>
          </div>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>&copy; 2024 {{ project }}. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>