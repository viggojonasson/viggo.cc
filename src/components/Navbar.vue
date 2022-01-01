<template>
    <header
        class="mt-4 w-full shadow-xl bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40"
    >
        <div
            class="z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center"
        >
            <div
                class="items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0"
            >
                <div>
                    <NuxtLink
                        to="/"
                        class="font-bold text-blue-400 hover:text-blue-500"
                    >
                        viggo.cc
                    </NuxtLink>
                </div>
                <div class="mx-auto text-center">
                    <a href="https://github.com/viggojonasson" class="hover:text-blue-500">
                        github
                    </a>
                </div>
                <div class="ml-auto mr-0 text-right">
                    <p class="font-mono">aethez#6403</p>
                </div>
            </div>
        </div>
    </header>
</template>

<style>
header {
    max-width: 1248px;
    margin-left: auto;
    margin-right: auto;
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Navbar'
});
</script>
