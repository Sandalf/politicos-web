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
        <div class="px-4 py-5 flex-auto">
            <div
                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
            >
                <i class="fas fa-award"></i>
            </div>
            <h6 class="text-xl font-semibold">
                {{ state.name }}
            </h6>
            <p class="mt-2 mb-4 text-gray-600">
                Divide details about your product or agency work into parts. A
                paragraph describing a feature will be enough.
            </p>
        </div>
    </div>
</template>
