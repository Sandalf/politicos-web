<script lang="ts" setup>
import { BrandGitlabIcon } from 'vue-tabler-icons'
</script>

<template>
    <footer class="pb-20 relative block bg-gray-900">
        <div class="container mx-auto px-4 lg:pt-12 lg:pb-10">
            <div class="flex flex-wrap mt-12 justify-center">
                <div class="w-full lg:w-3/12 px-4 text-center">
                    <div
                        class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center mt-6"
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
    </footer>
</template>
