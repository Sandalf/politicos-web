<script setup lang="ts">
import { PropType, defineProps } from 'vue'
import PoliticianType from '../models/politician'

const props = defineProps({
    politician: {
        type: Object as PropType<PoliticianType>,
        required: true,
    },
})
</script>

<template>
    <div
        class="relative flex flex-col min-w-0 break-words bg-white h-full w-full shadow-lg rounded-lg"
    >
        <div class="px-4 py-5 flex-auto">
            <div class="flex justify-center">
                <img
                    :src="politician?.photo_url"
                    :alt="politician?.name"
                    class="shadow-lg rounded-full object-cover h-24 w-24 md:h-30 md:w-30 border mb-3"
                />
            </div>
            <h6 class="text-xl font-semibold">
                {{ politician.name }}
            </h6>
            <p v-show="politician.city" class="mt-2 mb-4 text-gray-600">
                <span class="block">{{ politician.city }}</span>
                <span v-show="politician.district" class="block">
                    Distrito {{ politician.district }}
                </span>
            </p>
        </div>
    </div>
</template>
