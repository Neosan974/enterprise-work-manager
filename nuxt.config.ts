// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/tailwind.css"],
  modules: ["@nuxtjs/supabase", "@vueuse/nuxt", ["nuxt-primevue", {
  components: {
    exclude: [],
  },
  options: {
    ripple: true,
    unstyled: true,
  },
  importPT: {from: path.resolve(__dirname, "./presets/wind")}
  // importPT: {from: "~/presets/wind", as: "Wind"}
  // importPT: {from: "~/presets/aura", as: "Aura"}
  // importPT: {from: "~/presets/lara", as: "Lara"}
}], "@nuxtjs/tailwindcss", '@vee-validate/nuxt',],
})
