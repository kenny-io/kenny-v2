// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-lenis', '@hypernym/nuxt-gsap', 'nuxt-icon', '@pinia/nuxt'],
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },
});
