// https://nuxt.com/docs/api/configuration/nuxt-config
require('dotenv').config()

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-lenis',
    '@hypernym/nuxt-gsap',
    'nuxt-icon',
    '@nuxt/content'
  ],
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },
  runtimeConfig: {
    MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
    MAILCHIMP_SERVER_PREFIX: process.env.MAILCHIMP_SERVER_PREFIX,
    MAILCHIMP_AUDIENCE_ID: process.env.MAILCHIMP_AUDIENCE_ID,
  },
  css: ['@/assets/css/globals.css'],
});
