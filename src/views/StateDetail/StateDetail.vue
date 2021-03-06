<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import PoliticiansApi from '../../services/politicians'
import PoliticianType from '../../models/politician'
import PoliticianPreview from '../../components/PoliticianPreview.vue'
import BaseSpinner from '../../components/BaseSpinner.vue'

const federalDeputies = ref<PoliticianType[]>([])
const senators = ref<PoliticianType[]>([])
const route = useRoute()
const loadingDeputies = ref(false)
const loadingSenators = ref(false)

const fetchFederalDeputies = async () => {
    loadingDeputies.value = true
    federalDeputies.value = await PoliticiansApi.getStateDeputies(
        <string>route.params.state
    ).then((r: any) => r.data)
    loadingDeputies.value = false
}

const fetchSenators = async () => {
    loadingDeputies.value = true
    senators.value = await PoliticiansApi.getStateSenators(
        <string>route.params.state
    ).then((r: any) => r.data)
    loadingDeputies.value = false
}

onMounted(() => {
    fetchFederalDeputies()
    fetchSenators()
})
</script>

<template>
    <div class="container mx-auto py-8 px-4">
        <h2 class="text-left text-gray-900 text-3xl font-bold px-4 mb-4">
            Senadores
        </h2>
        <div class="flex flex-wrap">
            <router-link
                v-for="senator in senators"
                :key="senator.id"
                :to="{
                    name: 'politicianDetail',
                    params: { id: senator.id },
                }"
                class="w-full md:w-4/12 px-4 text-center mb-8"
            >
                <PoliticianPreview :politician="senator" />
            </router-link>
        </div>
        <template v-if="!loadingSenators && !senators.length">
            Faltan senadores por registrar
        </template>
        <template v-if="loadingSenators">
            <BaseSpinner />
        </template>
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
        <template v-if="!loadingDeputies && !federalDeputies.length">
            Faltan diputados por registrar
        </template>
        <template v-if="loadingDeputies">
            <BaseSpinner />
        </template>
    </div>
</template>
