// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "nuxt-icon",
    "nuxt-headlessui",
    "@morev/vue-transitions/nuxt",
  ],
  css: ["~/assets/css/main.css"],
  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  headlessui: {
    prefix: "H",
  },
});
