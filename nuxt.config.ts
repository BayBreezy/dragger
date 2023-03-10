const title = "Dragger";
export default defineNuxtConfig({
  typescript: { shim: false },
  modules: [
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "nuxt-icon",
    "nuxt-headlessui",
    "@morev/vue-transitions/nuxt",
  ],
  css: ["simplebar/dist/simplebar.min.css", "~/assets/css/main.css"],
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

  app: {
    pageTransition: { appear: true, name: "page", mode: "out-in" },
    head: {
      title,
    },
  },
});
