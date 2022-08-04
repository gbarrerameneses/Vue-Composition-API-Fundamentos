<template>
  <h1>Lista de paises</h1>
  <p v-for="(pais, index) in arrayData" :key="index"> 
  <!-- {{ pais.name.common }} -->
  <router-link :to="`/paises/${pais.name.common}`">
     {{ pais.name.common }}
  </router-link>
  </p>
</template>

<script>
// import { onMounted, ref } from 'vue'
import { useFetch } from '@/hooks/useFetch'

export default {
    setup(){
        return { ...useFetch('api.json')}
        // const arrayData = ref([])
        // // Ciclo de vida onMounted
        // onMounted(async() => {
        //     try {
        //         const resp = await fetch('api.json')
        //         // const resp = await fetch('https://restcountries.com/v3.1/all')
        //         arrayData.value = await resp.json()
        //     } catch (error) {
        //         console.log(error);
        //     }
        // })

        // // const fetchData = async() => {
        // //     try {
        // //         const resp = await fetch('api.json')
        // //         // const resp = await fetch('https://restcountries.com/v3.1/all')
        // //         arrayData.value = await resp.json()
        // //     } catch (error) {
        // //         console.log(error);
        // //     }
        // // }
        // // fetchData()

        // return { arrayData}
    }
}
</script>




<style>

</style>