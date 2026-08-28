// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  typescript: {
    strict: true,
    typeCheck: false, // Disable type checking to avoid vue-tsc issues
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-lenis',
    '@hypernym/nuxt-gsap',
    'nuxt-icon',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/robots',
  ],
  
  // Remove extends since nuxt-seo-kit is not installed

  gsap: {
    extraPlugins: {
      scrollTrigger: true,
      scrollTo: true,
      observer: true,
    },
  },

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
  },

  image: {
    provider: 'ipx',
    quality: 80,
    format: ['webp', 'avif', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },

  content: {
    highlight: {
      theme: {
        default: 'github-dark',
        dark: 'github-dark',
        light: 'github-light',
      },
    },
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
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
      siteDescription:
        "Ekene Eze is a Developer Experience leader, software engineer, speaker, and founder building AI-native developer tools and technology products.",
      language: 'en-US',
      socials: {
        twitter: 'https://twitter.com/kenny_io',
        github: 'https://github.com/kenny-io',
        linkedin: 'https://www.linkedin.com/in/ekeneeze/',
        youtube: 'https://www.youtube.com/c/EkeneEze',
      },
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#111111' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', href: '/icon.svg', type: 'image/svg+xml' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/manifest.webmanifest' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  css: ['@/assets/css/globals.css'],

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/articles', '/speaking', '/uses', '/demos', '/courses'],
    },
    compressPublicAssets: true,
  },

  experimental: {
    viewTransition: true,
    componentIslands: true,
    payloadExtraction: true,
  },

  compatibilityDate: '2025-05-24',
});