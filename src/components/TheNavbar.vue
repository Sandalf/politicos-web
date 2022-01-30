<script setup lang="ts">
import { ref } from 'vue'

let showMenu = ref(false)

const toggleNavbar = () => {
    console.log('toggleNavbar')
}
</script>

<template>
    <nav
        class="fixed z-50 w-full bg-white top-0 flex flex-wrap items-center justify-between px-2 py-3 shadow-lg"
    >
        <div
            class="container px-4 mx-auto flex flex-wrap items-center justify-between"
        >
            <div
                class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
            >
                <router-link to="/">
                    <a
                        class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-blueGray-700"
                    >
                        POLÍTICOS MEXICANOS
                    </a>
                </router-link>
                <button
                    class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                >
                    <i class="fas fa-bars"></i>
                </button>
            </div>
            <div
                id="example-navbar-danger"
                class="lg:flex flex-grow items-center hidden"
            >
                <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
                    <li class="nav-item">
                        <a
                            class="download-button px-3 py-2 flex items-center text-xs uppercase font-bold text-blueGray-700 hover:text-blueGray-500"
                            href="/learning-lab/tailwind-starter-kit/documentation/download"
                            ><i
                                class="fas fa-arrow-alt-circle-down text-lg leading-lg text-blueGray-400"
                            ></i
                            ><span class="ml-2">Senadores</span></a
                        >
                    </li>
                    <li class="nav-item">
                        <a
                            href="https://github.com/creativetimofficial/tailwind-starter-kit/archive/designer-files.zip?ref=tsk-navbar"
                            class="download-button px-3 py-2 flex items-center text-xs uppercase font-bold text-blueGray-700 hover:text-blueGray-500"
                            ><i
                                class="fab fa-sketch text-lg leading-lg text-blueGray-400"
                            ></i
                            ><span class="ml-2">Diputados Federales</span></a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
