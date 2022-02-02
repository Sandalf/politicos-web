<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import PoliticiansApi from '../../services/politicians'
import PoliticianModel, {
    PoliticianCategory,
    Party,
    PartyName,
} from '../../models/politician'
import { SocialLinkType } from '../../models/social-link';
import { MapPinIcon, TriangleSquareCircleIcon, MailIcon, PhoneIcon, LinkIcon, BrandTwitterIcon, BrandFacebookIcon, BrandInstagramIcon, BrandYoutubeIcon } from 'vue-tabler-icons'
import PoliticianDetailCommitteeHistory from "./PoliticianDetailCommitteeHistory.vue"
import PoliticianDetailAdministrativeHistory from "./PoliticianDetailAdministrativeHistory.vue"
import PoliticianDetailLegislativeHistory from "./PoliticianDetailLegislativeHistory.vue"
import PoliticianDetailPoliticalHistory from "./PoliticianDetailPoliticalHistory.vue"
import PoliticianDetailAcademicHistory from "./PoliticianDetailAcademicHistory.vue";
import PoliticianDetailPrivateHistory from "./PoliticianDetailPrivateHistory.vue"
import PoliticianDetailOtherHistory from "./PoliticianDetailOtherHistory.vue";
import BaseSpinner from '../../components/BaseSpinner.vue';

const politician = ref<PoliticianModel>()
const loading = ref(false)
const socialLinkType = SocialLinkType;
const fetchData = async () => {
    loading.value = true
    const route = useRoute()
    politician.value = await PoliticiansApi.findById(<string>route.params.id).then(
        (r: any) => r.data
    )
    loading.value = false
}

const getPartyName = (party: Party) => {
    return PartyName[party]
}

const partSocialLinkUrl = (url: string) => {
    return new URL(url).pathname
}

onMounted(() => {
    fetchData()
})
</script>

<template>
    <div class="container mx-auto pt-8 px-4 pb-4">
        <template v-if="loading">
            <BaseSpinner />
        </template>
        <div v-else-if="!loading && politician?.id">
            <div class="border p-6">
                <img
                    :src="politician?.photo_url"
                    :alt="politician?.name"
                    class="shadow-lg rounded-full object-cover h-24 w-24 md:h-40 md:w-40 border mb-3"
                />
                <h1 class="text-left text-gray-900 text-3xl font-bold px-0">
                    {{ politician?.name }}
                </h1>
                <div
                    v-if="politician?.category === PoliticianCategory.FederalDeputy"
                    class="text-left"
                >
                    Diputado Federal
                </div>
                <div v-else class="text-left">Senador</div>
                <hr class="my-4" />
                <div class="text-left">
                    <div class="flex items-center">
                        <MapPinIcon class="mr-3" />
                        <span v-if="politician?.city" class="mr-2">
                            {{ politician?.city }}
                        </span>
                        <span v-if="politician?.state.name" class="mr-2">
                            {{ politician?.state.name }}
                        </span>
                        <span v-if="politician?.district">
                            Distrito {{ politician?.district }}
                        </span>
                    </div>
                    <div v-if="politician?.party" class="flex items-center mt-4">
                        <TriangleSquareCircleIcon class="mr-3" />
                        <span>
                            {{ getPartyName(politician.party) }}
                        </span>
                    </div>
                </div>
                <hr class="my-4" />
                <div class="text-left">
                    <h2 class="font-bold text-xl mb-3">Contacto</h2>
                    <div v-if="politician?.email" class="flex items-center">
                        <MailIcon class="mr-3" />
                        <span>
                            {{ politician?.email }}
                        </span>
                    </div>
                    <div v-if="politician?.telephone" class="flex items-center mt-4">
                        <PhoneIcon class="mr-3" />
                        <span>
                            {{ politician.telephone }}
                        </span>
                    </div>
                    <div v-for="link in politician?.social_links" class="flex items-center mt-4">
                        <LinkIcon v-if="link.type ===  socialLinkType.Website" class="mr-3" />
                        <BrandFacebookIcon v-else-if="link.type ===  socialLinkType.Facebook" class="mr-3"/>
                        <BrandTwitterIcon v-else-if="link.type ===  socialLinkType.Twitter" class="mr-3"/>
                        <BrandYoutubeIcon v-else-if="link.type ===  socialLinkType.YouTube" class="mr-3"/>
                        <BrandInstagramIcon  v-else-if="link.type ===  socialLinkType.Instagram" class="mr-3"/>
                        <a v-if="link.type ===  socialLinkType.Website" :href="link.url" target="_blank">
                            {{ link.url }}
                        </a>
                        <a v-else :href="link.url" target="_blank">
                            {{ partSocialLinkUrl(link.url) }}
                        </a>
                    </div>
                </div>
                <PoliticianDetailCommitteeHistory class="mt-6" :politician-id="politician?.id" />
                <PoliticianDetailAdministrativeHistory class="mt-6" :politician-id="politician?.id" />
                <PoliticianDetailLegislativeHistory class="mt-6" :politician-id="politician?.id"/>
                <PoliticianDetailPoliticalHistory class="mt-6" :politician-id="politician?.id"/>
                <PoliticianDetailAcademicHistory class="mt-6" :politician-id="politician?.id"/>
                <PoliticianDetailPrivateHistory class="mt-6" :politician-id="politician?.id"/>
                <PoliticianDetailOtherHistory class="mt-6" :politician-id="politician?.id"/>
            </div>
        </div>
    </div>
</template>
