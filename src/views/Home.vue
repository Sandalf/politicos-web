<script setup lang="ts">
import { onMounted, ref } from 'vue'
import TheNavbar from '../components/TheNavbar.vue'
import StatePreview from '../components/StatePreview.vue'
import SearchPolitician from '../components/SearchPolitician.vue'
import StatesApi from '../services/states'
import StateType from '../models/state'
import { BrandGitlabIcon } from 'vue-tabler-icons'

const states = ref<StateType[]>([])
const fetchData = async () => {
    console.log('fetchData')
    states.value = await StatesApi.getAll().then((r) => r.data)
}

onMounted(() => {
    fetchData()
})
</script>

<template>
    <TheNavbar />
    <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style="min-height: 75vh"
    >
        <div class="container relative mx-aut">
            <div class="items-center flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                    <div>
                        <h1 class="text-gray-900 font-semibold text-5xl">
                            Conoce a tu representante
                        </h1>
                        <p class="mt-4 text-lg text-gray-600">
                            Aquí puedes encontrar información sobre senadores y
                            diputados federales, como contactarlos y su
                            historial político.
                        </p>
                        <SearchPolitician />
                    </div>
                </div>
            </div>
        </div>
        <div
            class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style="height: 70px"
        >
            <svg
                class="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
            >
                <polygon
                    class="text-gray-600 fill-current"
                    points="2560 0 2560 100 0 100"
                ></polygon>
            </svg>
        </div>
    </div>
    <section class="py-20 bg-gray-600">
        <div class="container mx-auto px-4">
            <h2 class="text-left text-white text-3xl font-bold px-4 mb-4">
                Estados
            </h2>
            <div class="flex flex-wrap">
                <router-link
                    v-for="state in states"
                    :key="state.id"
                    :to="{
                        name: 'stateDetail',
                        params: { state: state.code },
                    }"
                    class="w-full md:w-4/12 px-4 text-center mb-8"
                >
                    <StatePreview :state="state" />
                </router-link>
            </div>
        </div>
    </section>
    <section class="pb-20 relative block bg-gray-900">
        <div
            class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style="height: 80px"
        >
            <svg
                class="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
            >
                <polygon
                    class="text-gray-900 fill-current"
                    points="2560 0 2560 100 0 100"
                ></polygon>
            </svg>
        </div>
        <div class="container mx-auto px-4 lg:pt-12 lg:pb-10">
            <div class="flex flex-wrap mt-12 justify-center">
                <div class="w-full lg:w-3/12 px-4 text-center">
                    <div
                        class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
                    >
                        <BrandGitlabIcon />
                    </div>
                    <h6 class="text-xl mt-5 font-semibold text-white">
                        GitLab
                    </h6>
                    <p class="mt-2 mb-4 text-gray-500">
                        Contribuye haciendo un merge request
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
