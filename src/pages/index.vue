<template>
    <div>
        <Navbar />
        <div class="mid">
            <div
                class="bg-white rounded-md shadow-2xl p-8 px-16 border-double border-4 border-blue-300"
            >
                <h1 class="font-extrabold text-5xl text-center">hello</h1>
                <a href="/">
                    <p class="font-semibold text-3xl" v-if="!iframe.loaded">
                        Plis Wait We Load!
                    </p>
                    <iframe
                        :src="iframe.src"
                        ref="frame"
                        @load="load"
                        v-show="iframe.loaded"
                        width="470"
                    ></iframe>
                </a>
                <div class="text-center">
                    <button
                        v-scroll-to="{
                            el: '#projects',
                            duration: 1000
                        }"
                        class="bg-gray-900 text-white hover:bg-gray-800 font-bold py-2 px-4 rounded"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M16 17l-4 4m0 0l-4-4m4 4V3"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div class="projects">
            <div class="p-8">
                <h1 class="text-5xl font-extrabold text-center">Work</h1>
                <div class="container projects-list" id="projects">
                    <Project
                        v-for="(project, i) in projects"
                        v-bind:key="i"
                        :title="project.title"
                        :description="project.description"
                        :img="project.img"
                    />
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<style scoped>
body {
    padding: 0;
    margin: 0;
}

.projects-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.projects {
    height: calc(100vh);
    display: grid;
    place-items: center;
}

.mid {
    width: 100%;
    height: calc(100vh - 4rem - 8rem);
    display: grid;
    place-items: center;
}
</style>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';
import Project from '@/components/Project.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
    components: {
        Navbar,
        Project,
        Footer
    },
    data() {
        return {
            iframe: {
                src:
                    'https://spotify-now-playing-git-master-aethezxd.vercel.app/api/spotify',
                loaded: false
            },
            projects: [
                {
                    title: {
                        name: 'Arcade.tf',
                        url: 'https://arcade.tf',
                        description: 'Sole Developer'
                    },
                    description: `Arcade.tf is an automated TF2 trading site
                                    that aims to provide competitive prices and
                                    unique services.`,
                    img: 'https://arcade.tf/android-chrome-384x384.png'
                },
                {
                    title: {
                        name: 'Snapshots.tf',
                        url: 'https://snapshots.tf',
                        description: 'Sole Developer'
                    },
                    description: `Snapshots.tf is a backpack.tf snapshotting service free of charge (currently in maintenance).`,
                    img:
                        'https://cdn.discordapp.com/icons/808625302539337728/adab8120d95461821c46bf757a8b1fca.webp?size=512'
                }
            ]
        };
    },
    methods: {
        load: function() {
            this.iframe.loaded = true;
        }
    }
});
</script>
