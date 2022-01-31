<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import PoliticiansApi from '../../services/politicians'
import PoliticianType from '../../models/politician'
import PoliticianPreview from '../../components/PoliticianPreview.vue'

const federalDeputies = ref<PoliticianType[]>([])
const route = useRoute()

const fetchFederalDeputies = async () => {
    federalDeputies.value = await PoliticiansApi.getStateDeputies(
        route.params.state
    ).then((r: any) => r.data)
}

onMounted(() => {
    fetchFederalDeputies()
})
</script>

<template>
    <div class="container mx-auto py-8 px-4">
        <h2 class="text-left text-gray-900 text-3xl font-bold px-4 mb-4">
            Senadores
        </h2>
        <h2 class="text-left text-gray-900 text-3xl font-bold px-4 mb-4">
            Diputados Federales
        </h2>
        <div class="flex flex-wrap">
            <router-link
                v-for="federalDeputy in federalDeputies"
                :key="federalDeputy.id"
                :to="{
                    name: 'politicianDetail',
                    params: { id: federalDeputy.id },
                }"
                class="w-full md:w-4/12 px-4 text-center mb-8"
            >
                <PoliticianPreview :politician="federalDeputy" />
            </router-link>
        </div>
    </div>
</template>
