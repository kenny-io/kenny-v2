// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-lenis', '@hypernym/nuxt-gsap'],
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },
});
