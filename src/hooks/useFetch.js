import { onMounted, ref } from 'vue'

export function useFetch(url) {
    const arrayData = ref([])
    // Ciclo de vida onMounted
    onMounted(async() => {
        try {
            const resp = await fetch(url)
            // const resp = await fetch('https://restcountries.com/v3.1/all')
            arrayData.value = await resp.json()
        } catch (error) {
            console.log(error);
        }
    })

    return { arrayData}

}