<script setup lang="ts">
import { useMotion } from '@vueuse/motion';

const route = useRoute();
const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === 'dark');

// Header scroll effect
const isScrolled = ref(false);
const headerRef = ref(null);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

// Mobile navigation
const isMobileNavOpen = ref(false);

const handleToggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value;
  document.body.style.overflow = isMobileNavOpen.value ? 'hidden' : '';
};

watch(
  () => route.path,
  () => {
    isMobileNavOpen.value = false;
    document.body.style.overflow = '';
  }
);

// Apply motion to logo
const logoRef = ref(null);
const logoMotion = useMotion(logoRef, {
  initial: { opacity: 0, y: -20 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 600, ease: 'easeOut' },
  },
});

// Navigation links with icons for 2025
const navLinks = ref([
  {
    slug: 'Articles',
    path: '/articles',
    icon: 'ph:article-duotone',
  },
  {
    slug: 'Courses',
    path: '/courses',
    icon: 'ph:graduation-cap-duotone',
  },
  {
    slug: 'Speaking',
    path: '/speaking',
    icon: 'ph:microphone-stage-duotone',
  },
/*   {
    slug: 'Demos',
    path: '/demos',
    icon: 'ph:code-duotone',
  }, */
  {
    slug: 'Uses',
    path: '/uses',
    icon: 'ph:devices-duotone',
  },
  {
    slug: 'Streams',
    path: 'https://www.youtube.com/playlist?list=PLh0cCRPj3dyfjP9ka3B-oyMMC1XPuFVrI',
    icon: 'ph:youtube-logo-duotone',
    external: true,
  },
]);

// Social links
const socialLinks = ref([
  {
    name: 'Twitter',
    icon: 'ph:twitter-logo-duotone',
    url: 'https://twitter.com/kenny_io',
  },
  {
    name: 'GitHub',
    icon: 'ph:github-logo-duotone',
    url: 'https://github.com/kenny-io',
  },
  {
    name: 'LinkedIn',
    icon: 'ph:linkedin-logo-duotone',
    url: 'https://www.linkedin.com/in/ekeneeze/',
  },
]);
</script>

<template>
  <header 
    ref="headerRef"
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-5 bg-black/60 backdrop-blur-md"
  >
    <TheWrapper class="flex items-center justify-between relative">
      <!-- Logo -->      
      <div ref="logoRef" class="flex-shrink-0">
        <NuxtLink to="/" class="group flex items-center gap-2 transition-all duration-300">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden">
            <span class="font-bold text-lg gradient-text">KE</span>
          </div>
          <span class="font-bold text-lg md:text-xl text-white transition-colors duration-300 group-hover:text-primary">
            Ekene Eze
          </span>
        </NuxtLink>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-1">
        <ul class="flex items-center gap-1">
          <li v-for="link in navLinks" :key="link.slug" class="relative">
            <NuxtLink 
              :to="link.path" 
              :target="link.external ? '_blank' : undefined"
              class="nav-link px-3 py-2 rounded-full text-white hover:text-primary font-medium flex items-center gap-1.5 transition-all duration-300"
              :class="{ 'text-primary font-medium': route.path === link.path }"
            >
              <Icon :name="link.icon" class="w-4 h-4" />
              <span>{{ link.slug }}</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
        @click="handleToggleMobileNav"
        aria-label="Toggle menu"
      >
        <Icon 
          :name="isMobileNavOpen ? 'ph:x-bold' : 'ph:list-bold'" 
          class="w-6 h-6"
        />
      </button>
    </TheWrapper>

    <!-- Mobile Navigation Overlay -->
    <div 
      v-show="isMobileNavOpen"
      class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
      @click="handleToggleMobileNav"
    ></div>

    <!-- Mobile Navigation Menu -->
    <div 
      class="fixed right-0 top-0 h-full w-4/5 max-w-sm bg-white dark:bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out shadow-2xl md:hidden"
      :class="isMobileNavOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="p-6 h-full flex flex-col">
        <div class="flex justify-between items-center mb-8">
          <NuxtLink to="/" class="flex items-center gap-2" @click="handleToggleMobileNav">
            <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span class="font-bold text-sm gradient-text">KE</span>
            </div>
            <span class="font-bold text-lg text-white">Ekene Eze</span>
          </NuxtLink>
          
          <button 
            class="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            @click="handleToggleMobileNav"
          >
            <Icon name="ph:x-bold" class="w-6 h-6" />
          </button>
        </div>

        <ul class="space-y-4 flex-1">
          <li v-for="link in navLinks" :key="link.slug">
            <NuxtLink 
              :to="link.path" 
              :target="link.external ? '_blank' : undefined"
              class="flex items-center gap-3 py-3 px-4 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              :class="{ 'bg-gray-100 text-primary font-medium': route.path === link.path }"
              @click="handleToggleMobileNav"
            >
              <Icon :name="link.icon" class="w-5 h-5" />
              <span>{{ link.slug }}</span>
            </NuxtLink>
          </li>
        </ul>

        <!-- Social Links in Mobile Menu -->
        <div class="mt-auto pt-6 border-t border-gray-200 dark:border-gray-800">
          <div class="flex justify-center gap-6">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-300"
              :aria-label="social.name"
            >
              <Icon :name="social.icon" class="w-6 h-6" />
            </a>
          </div>
          <p class="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
            © {{ new Date().getFullYear() }} Ekene Eze
          </p>
        </div>
      </div>
    </div>
  </header>
  
  <!-- Spacer to prevent content from being hidden under fixed header -->
  <div class="h-20"></div>
</template>

<style scoped>
.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  border-radius: 2px;
}

.router-link-active::after,
.router-link-exact-active::after,
.nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* Gradient text utility, matches TheHero.vue and TheFooter.vue */
.gradient-text {
  background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  text-shadow: none !important;
}
</style>
