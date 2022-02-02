<script setup lang="ts">
import { PropType, ref, onMounted } from 'vue'
import PoliticiansModel, { PoliticianCategory } from '../models/politician'
import PoliticiansApi from '../services/politicians'

const image = ref<string>("")
const props = defineProps({
    active: {
        type: Boolean,
        required: true,
    },
    politician: {
        type: Object as PropType<PoliticiansModel>,
        required: true,
    },
})

const getImage = async (url: string) => {
    image.value = <string><unknown>(await PoliticiansApi.image(url).then(
        (r: any) => 'data:image/jpeg;base64,'+(r.data)
    ))
}

onMounted(() => {
    getImage(props.politician.photo_url)
})
</script>

<template>
    <li
        :class="{ 'bg-gray-100': active }"
        class="bg-purple-white border p-3 w-full flex items-center"
        role="button"
    >
        <img
            v-if="image"
            :src="image"
            :alt="politician?.name"
            class="rounded-full object-cover h-8 w-8 border mr-3"
        />
        <span v-else class="rounded-full object-cover h-8 w-8 border mr-3"></span>
        {{ politician.name }},
        <span class="ml-2 text-gray-500 text-sm">
            {{
                politician?.category === PoliticianCategory.FederalDeputy
                    ? 'Diputado Federal'
                    : 'Senador'
            }},
        </span>
        <span class="ml-2 text-gray-500 text-sm">
            {{ politician.state.code }}
        </span>
    </li>
</template>
