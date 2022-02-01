<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import debounce from '../utils/functions/debounce'
import PoliticiansApi from '../services/politicians'
import PoliticiansModel, { PoliticianCategory } from '../models/politician'
import BaseSpinner from './BaseSpinner.vue'

const politicians = ref<PoliticiansModel[]>([])
const loading = ref(false)
const text = ref('')
const selectedItem = ref<number>(-1)
const router = useRouter()
const search = async (text: string) => {
    loading.value = true
    politicians.value = await PoliticiansApi.search(text).then(
        (r: any) => r.data
    )
    loading.value = false
}

const resultsIsEmpty = computed(() => {
    return !loading.value && !politicians.value.length && text.value.length > 0
})

const onInput = debounce(() => {
    if (text.value) {
        search(text.value)
    } else {
        politicians.value = []
    }
}, 300)

const handleArrowKeys = (event: KeyboardEvent) => {
    switch (event.key) {
        case 'ArrowUp':
            if (selectedItem.value === -1) {
                selectedItem.value = 0
            }
            if (selectedItem.value && selectedItem.value > 0)
                selectedItem.value--
            break
        case 'ArrowDown':
            if (selectedItem.value === -1) {
                selectedItem.value = 0
            } else if (selectedItem.value < politicians.value.length - 1)
                selectedItem.value++
            break
        case 'Enter':
            handleSelectPolitician()
            break
    }
}

const handleSelectPolitician = () => {
    const politician = politicians.value?.find(
        (_, index) => index === selectedItem.value
    )
    if (politician) {
        router.push({
            name: 'politicianDetail',
            params: { id: politician.id },
        })
    }
}
</script>

<template>
    <div class="relative mr-6 my-2">
        <input
            v-model="text"
            type="search"
            class="bg-purple-white shadow rounded border p-3 w-full focus:outline-none focus:border-sky-200 focus:ring-1 focus:ring-sky-200"
            placeholder="Busca por nombre..."
            @input="onInput"
            @keydown="handleArrowKeys"
        />
        <ul class="absolute z-10 bg-white shadow-lg min-w-full">
            <span v-show="resultsIsEmpty" class="block text-gray-500 my-4">
                No hay resultados
            </span>
            <BaseSpinner v-show="!resultsIsEmpty && loading" class="my-4" />
            <router-link
                v-for="(politician, index) in politicians"
                :key="politician.id"
                :to="{
                    name: 'politicianDetail',
                    params: { id: politician.id },
                }"
            >
                <li
                    :class="{ 'bg-gray-100': selectedItem === index }"
                    class="bg-purple-white border p-3 w-full flex items-center"
                    role="button"
                >
                    <img
                        :src="politician?.photo_url"
                        :alt="politician?.name"
                        class="rounded-full object-cover h-8 w-8 border mr-3"
                    />
                    {{ politician.name }},
                    <span class="ml-2 text-gray-500 text-sm">
                        {{
                            politician?.category ===
                            PoliticianCategory.FederalDeputy
                                ? 'Diputado Federal'
                                : 'Senador'
                        }},
                    </span>
                    <span class="ml-2 text-gray-500 text-sm">
                        {{ politician.state.code }}
                    </span>
                </li>
            </router-link>
        </ul>
    </div>
</template>
