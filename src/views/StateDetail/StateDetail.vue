<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PoliticiansApi from '../../services/politicians'
import PoliticianType from '../../models/politician'
import PoliticianPreview from '../../components/PoliticianPreview.vue'

const politicians = ref<PoliticianType[]>([])
const fetchData = async () => {
    politicians.value = await PoliticiansApi.getAll().then((r: any) => r.data)
    console.log('politicians', politicians)
}

onMounted(() => {
    fetchData()
})
</script>

<template>
    <div class="container mx-auto py-8 px-4">
        <h2 class="text-left text-gray-900 text-3xl font-bold px-4 mb-4">
            Senadores
        </h2>
        <router-link
            v-for="politician in politicians"
            :key="politician.id"
            :to="{
                name: 'politicianDetail',
                params: { id: politician.id },
            }"
            class="w-full md:w-4/12 px-4 text-center mb-8"
        >
            <PoliticianPreview :politician="politician" />
        </router-link>
        <h2 class="text-left text-gray-900 text-3xl font-bold px-4 mb-4">
            Diputados Federales
        </h2>
    </div>
</template>
