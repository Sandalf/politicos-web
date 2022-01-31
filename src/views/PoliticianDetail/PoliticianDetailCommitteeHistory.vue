<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import PoliticianRecordsApi from '../../services/politician-records'
import PoliticianRecordModel from '../../models/politician-record'

const props = defineProps({
    politicianId: {
        type: String,
        required: true,
    },
})

const politicianRecords = ref<PoliticianRecordModel[]>()
const loading = ref(true)
const fetchData = async () => {
    const route = useRoute()
    console.log('route', route.params)
    politicianRecords.value = await PoliticianRecordsApi.getCommitteeHistory(
        props.politicianId
    ).then((r: any) => r.data)
    loading.value = false
}
onMounted(() => {
    fetchData()
})
</script>

<template>
    <div>
        <h2 class="text-left font-bold text-xl mb-3">Comisiones</h2>
        <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div
                    class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
                >
                    <div class="overflow-hidden border">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Descripción
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Inicio
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Fin
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr
                                    v-for="record in politicianRecords"
                                    :key="`politician-record-${record.id}`"
                                    class="text-left"
                                >
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div class="text-sm text-gray-900">
                                                {{ record.description }}
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">
                                            {{ record.start_date }}
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">
                                            {{ record.end_date }}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
