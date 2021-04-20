<template>
    <header
        class="mt-2 w-full shadow-xl bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40"
    >
        <div
            class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center"
        >
            <div
                class="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0"
            >
                <div class="relative left-0 z-50 flex w-3/4 h-auto h-full">
                    <NuxtLink to="/" class="font-bold">
                        viggo.cc
                    </NuxtLink>
                </div>
                <div class="ml-auto mr-0 text-right">
                    <p class="font-mono">aethez#6403</p>
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Navbar'
});
</script>
