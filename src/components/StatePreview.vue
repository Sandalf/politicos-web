<script setup lang="ts">
import { PropType, defineProps } from 'vue'
import StateType from '../models/state'

const props = defineProps({
    state: {
        type: Object as PropType<StateType>,
        required: true,
    },
})
</script>

<template>
    <div
        class="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg"
    >
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
