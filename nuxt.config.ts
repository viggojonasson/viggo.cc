import type { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  build: {},
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/tailwindcss", "vue-scrollto/nuxt"],
  srcDir: "src",
  css: [],
  env: {},
  target: 'static',
  head: {
    title: "viggo.cc",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Viggo, aka the professional programmer ™️ is a professional programmer that is programming the programs!",
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://viggo.cc/android-chrome-512x512.png',
      },
      {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: 'https://viggo.cc/android-chrome-512x512.png',
      },
      {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'https://viggo.cc/android-chrome-512x512.png',
      },
      {
        hid: 'theme-color',
        property: 'theme-color',
        content: '#35b4bd',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: { color: "#0c64c1" },
  modules: [],
  plugins: [],
};

export default config;
