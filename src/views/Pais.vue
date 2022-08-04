<template>
  <!-- primera opción -->
  <!-- <h1>Detalle: {{ $route.params.nombre }}</h1> -->
  <!-- Segunda opcion con props -->
  <h1>Detalle: {{ nombre }}</h1>
  <p v-for="(pais, index) in arrayData" :key="index">
    Nombre oficial: {{ pais.name.official }} - {{ pais.cca2 }}
  </p>
  <p v-for="(pais, index) in arrayData" :key="index">
    Región: {{ pais.region }} 
  </p>
 

   
</template>

<script>
import { useRoute } from 'vue-router'
import { useFetch } from '@/hooks/useFetch';
export default {
    props: ['nombre'],
    setup(props){
        // console.log(props.nombre);
        const nombreParams = useRoute()
        // console.log(nombreParams.params.nombre);

        return { ...useFetch(`https://restcountries.com/v3.1/name/${nombreParams.params.nombre}`) }
    }
}
</script>

<style>

</style>