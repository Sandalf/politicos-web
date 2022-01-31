<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PoliticianRecordsApi from '../../services/politician-records'
import PoliticianRecordModel from '../../models/politician-record'
import PoliticianRecordTable from './PoliticianRecordTable.vue'

const props = defineProps({
    politicianId: {
        type: Number,
        required: true,
    },
})

const politicianRecords = ref<PoliticianRecordModel[]>()
const loading = ref(true)
const fetchData = async () => {
    politicianRecords.value =
        await PoliticianRecordsApi.getAdministrativeHistory(
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
        <h2 class="text-left font-bold text-xl mb-3">
            Trayectoria Administrativa
        </h2>
        <div v-if="!loading">
            <PoliticianRecordTable :politician-records="politicianRecords" />
        </div>
    </div>
</template>
