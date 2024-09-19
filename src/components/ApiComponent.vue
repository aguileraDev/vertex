<script setup lang="ts">
import { onMounted, reactive,defineEmits } from 'vue';
import type { ApiResponse } from '@/models/api-response-interface';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const URL = `${API_URL}?apiKey=${API_KEY}`;

const state = reactive({
        data: {} as ApiResponse,
        loading: true,
        error: null as string | null,
    });
    
const loadData = async () => {
    try {
         const response:ApiResponse = await fetch(`${URL}`).then(response => response.json());
         state.data = response;
         state.loading = false;
         
    } catch (error) {
        state.error = "Ha ocurrido un error al obtener los datos";
        console.error(error);
        state.loading  =false;
    }

}
const emit = defineEmits<{(e:'updateIp',ip:string):void}>();

const sendIp = async () => {
    await loadData();
    emit('updateIp',state.data.ip);
}

onMounted(() => {
    sendIp();
});

</script>

<template>
    <div class="w-screen flex justify-center p-4 border border-blue-400 ">
        <ul class="text-center hover:text-blue-600 transition-colors md:items-center md:justify-around lg:flex lg:justify-evenly">
           <li><span>Pais:</span>{{ state.data.country_name }}
           <img :src="state.data.country_flag" alt="" srcset="">
            </li>
           <li><span>Ciudad:</span>{{ state.data.city }}</li>
           <li><span>Region:</span>{{ state.data.continent_name }}</li>
           <li><span>Latitud:</span>{{ state.data.latitude }}</li>
           <li><span>Longitud:</span>{{ state.data.longitude }}</li>
        </ul>
    </div>
</template>


<style scoped>

li{
    width: 100%;
    display: flex;
    margin-bottom: 0.5rem;
    font-weight: 600;
    
}
span{
    margin-left: 0.25rem;
}
img{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 30px;
    padding: .4rem;
}

@media only screen and (min-width: 1280px){ 

   li { 
    margin-bottom: 0;
    margin-left: 5%;
    font-size: small;
    width: 12.75rem;
    }
}

</style>