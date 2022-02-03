<script setup lang="ts">
import { PropType, defineProps } from 'vue'
import StateType from '../models/state'

const props = defineProps({
    state: {
        type: Object as PropType<StateType>,
        required: true,
    },
})

const imgUrl = new URL(
    `../assets/img/states/${props.state.code}.jpeg`,
    import.meta.url
).href

const imageInfo = [
    { state: 'AGS', alt: 'Photo by Alex Quezada on Unsplash' },
    { state: 'BC', alt: 'Photo by Matthew Hicks on Unsplash' },
    { state: 'BS', alt: 'Photo by Mario Mendez on Unsplash' },
    { state: 'CHI', alt: 'Photo by Pablo García Saldaña on Unsplash' },
    { state: 'CHS', alt: 'Photo by Gabriel Tovar on Unsplash' },
    { state: 'CMP', alt: 'Photo by carlos aranda on Unsplash' },
    { state: 'CMX', alt: 'Photo by Enrique Amaya on Unsplash' },
    { state: 'COA', alt: 'Photo by Abrajam Escalante on Unsplash' },
    { state: 'COL', alt: 'Photo by Kyle Petzer on Unsplash' },
    { state: 'DGO', alt: 'Photo by Kunst Photo on Unsplash' },
    { state: 'GRO', alt: 'Photo by Manuel Salinas' },
    { state: 'GTO', alt: 'Photo by Jezael Melgoza on Unsplash' },
    { state: 'JAL', alt: 'Photo by Jonas Dücker on Unsplash' },
    { state: 'MCH', alt: 'Photo by Josué Soto on Unsplash' },
    { state: 'MEX', alt: 'Photo by Zion Arellano on Unsplash' },
    { state: 'MOR', alt: 'Photo by Edgar Henríquez, LC on Unsplash' },
    { state: 'NAY', alt: 'Photo by Alonso Reyes on Unsplash' },
    { state: 'NL', alt: 'Photo by Charles Elizondo on Unsplash' },
    { state: 'OAX', alt: 'Photo by Abraham De La Cruz on Unsplash' },
    { state: 'PUE', alt: 'Photo by AA Román on Unsplash' },
    { state: 'QR', alt: 'Photo by Jhana Ellard on Unsplash' },
    { state: 'QRO', alt: 'Photo by Gabriel Tovar on Unsplash' },
    { state: 'SIN', alt: 'Photo by Jacobo Tafoya on Unsplash' },
    { state: 'SLP', alt: 'Photo by Guido HN on Unsplash' },
    { state: 'SON', alt: 'Photo by Wonderlane on Unsplash' },
    { state: 'TAB', alt: 'Photo by Enrique Gonzalez on Unsplash' },
    { state: 'TLX', alt: 'Photo by Roberto Carlos Roman Don on Unsplash' },
    { state: 'TMS', alt: 'Photo by Itzayana Jiménez on Unsplash' },
    { state: 'VER', alt: 'Photo by Roberto Carlos Roman Don on Unsplash' },
    { state: 'YUC', alt: 'Photo by Carlos Nakazato on Unsplash' },
    { state: 'ZAC', alt: 'Photo by Evelyn Quintanilla on Unsplash' },
]
</script>

<template>
    <div
        class="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg"
    >
        <img
            v-if="imgUrl"
            :src="imgUrl"
            :alt="imageInfo.find((img) => img.state === state.code)?.alt"
            class="h-32 object-cover contrast-50"
        />
        <div class="px-4 py-6 flex-auto">
            <h6 class="text-xl font-semibold">
                {{ state.name }}
            </h6>
            <router-link
                :to="{
                    name: 'stateDetail',
                    params: { state: state.code },
                }"
                class="text-gray-600 hover:underline"
            >
                Ver Senadores y Diputados
            </router-link>
        </div>
    </div>
</template>
