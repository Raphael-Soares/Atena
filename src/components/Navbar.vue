<template>
    <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#0B44A6] mb-3">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <div class="flex flex-row items-center">
                    <img src="../assets/logo2.png" alt="Atena Condomínios" class="w-20" />
                    <span class="text-white text-md font-bold mr-2">Atena Condomínios</span>
                </div>
                <button
                    class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                    v-on:click="toggleNavbar()"
                >
                    <MenuIcon class="w-6 h-6" />
                </button>
            </div>
            <div v-bind:class="{hidden: !showMenu, flex: showMenu}" class="lg:flex lg:flex-grow items-center">
                <ul class="flex flex-col lg:flex-row list-none ml-auto">
                    <li class="nav-item">
                        <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#ligar">
                            <PhoneIcon class="w-6" /> <span class="ml-2">Ligar agora</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#rotas">
                            <LocationMarkerIcon class="w-6" /> <span class="ml-2">Ver rotas</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import {LocationMarkerIcon} from "@heroicons/vue/solid";
import {PhoneIcon} from "@heroicons/vue/solid";
import {MenuIcon} from "@heroicons/vue/solid";

export default {
    data() {
        return {
            showMenu: false,
        };
    },
    components: {MenuIcon, LocationMarkerIcon, PhoneIcon},
    methods: {
        toggleNavbar: function () {
            this.showMenu = !this.showMenu;
        },
    },
};
</script>
