<template>
    <div
        class="bg-white border-double border-4 border-blue-300 project rounded-md shadow-2xl"
    >
        <div class="project-image">
            <img :src="img" alt="Arcade.TF Logo" />
        </div>
        <div class="m-2">
            <div class="text-left">
                <a
                    :href="title.url"
                    class="text-blue-400 text-2xl hover:text-blue-500"
                    >{{ title.name }}</a
                >

                <p class="text-sm text-gray-500" v-if="title.description">
                    {{ title.description }}
                </p>
            </div>

            <div class="pt-2 project-description">
                <p class="text-sm text-gray-400">
                    Description:
                </p>
                <p class="text-base leading-5 text-gray-800">
                    {{ description }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.project-description {
    padding-bottom: 5px;
}

.project {
    width: 300px;
    margin: 1rem;
}

.project-image img {
    height: 300px;
    width: 300px;
    background-size: contain;
}

.project-image {
    width: 100%;
    margin: 0;
    padding: 0;
    border-bottom: solid 1px black;
}
</style>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
export default Vue.extend({
    name: 'Project',
    props: {
        title: {
            type: Object,
            required: true
        } as PropOptions<{ description?: string; name: string; url: string }>,
        description: {
            type: String,
            required: true
        } as PropOptions<string>,
        img: {
            type: String,
            required: true
        } as PropOptions<string>
    }
});
</script>
