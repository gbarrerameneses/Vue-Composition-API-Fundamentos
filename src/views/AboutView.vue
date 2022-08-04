<template>
  <div class="about">
    <Titulo :contador="contador" :color="color"/>
    <!-- <h1
    :style="{'color': color}">Contador: {{ contador }}</h1> -->
    <!-- <button @click="aumentar">+</button>
    <button @click="disminuir">-</button> -->
    <Btn :textoBoton="'Aumentar'" @accion="aumentar"/>
    <Btn :textoBoton="'Disminuir'" @accion="disminuir"/>
    <hr>
    <input type="text" v-model="texto">
    <p>{{ texto }}</p>
  </div>
</template>

<script>
import { ref, computed } from '@vue/reactivity'
import Titulo from './../components/Titulo'
import Btn from '@/components/Btn.vue'
// import { computed } from '@vue/runtime-core'

export default {
  components: {
    Titulo, Btn
},
  setup() {
    const contador = ref(0)
    const texto = ref('')

    // const input = () => {
    //   texto.value
    // }

    const aumentar = () => {
      contador.value ++
    }
    const disminuir = () => {
      contador.value --
    }

    const color = computed(() => {
       if(contador.value < 0) {
        return 'red'
      } else {
        return 'blue'
      }
    })

    return {contador, aumentar, disminuir, color, texto}
  },
}
</script>
