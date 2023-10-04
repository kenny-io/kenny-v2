// https://nuxt.com/docs/api/configuration/nuxt-config
require('dotenv').config();

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-lenis',
    '@hypernym/nuxt-gsap',
    'nuxt-icon',
    '@nuxt/content'
  ],
  extends: [
    'nuxt-seo-kit'
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
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
    YOUTUBE_CHANNEL_ID: process.env.YOUTUBE_CHANNEL_ID,
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://kenny.engineer',
      siteName: 'Ekene Eze',
      siteDescription: "Hey, I'm Kenny! A Developer Advocate with over 5 years experience. Welcome to a piece of the internet that is mine.",
      language: 'en-US',
    },
  },
  css: ['@/assets/css/globals.css'],
});
