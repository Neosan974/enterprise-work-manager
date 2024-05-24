// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [["@vexip-ui/nuxt", { prefix: "V" }], "@nuxtjs/supabase", "@vueuse/nuxt"]
})