<script setup lang="ts">
// Import Toaster dynamically to avoid build issues
let Toaster: any = null;
onMounted(async () => {
  try {
    const sonnerModule = await import('vue-sonner');
    Toaster = sonnerModule.Toaster;
  } catch (error) {
    console.error('Failed to load vue-sonner:', error);
  }
});

const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === 'dark');

// Configure smooth scrolling with Lenis
onMounted(() => {
  try {
    const { $lenis } = useNuxtApp();
    if ($lenis) {
      // Use type assertion to avoid TypeScript errors
      const lenisInstance = $lenis as any;
      lenisInstance.options = {
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothTouch: false,
      };
    }
  } catch (error) {
    console.error('Failed to configure Lenis:', error);
  }
});

// Set up view transitions
const route = useRoute();
const isTransitioning = ref(false);

watch(() => route.path, () => {
  isTransitioning.value = true;
  setTimeout(() => {
    isTransitioning.value = false;
  }, 600);
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<template>
  <div class="min-h-screen flex flex-col antialiased transition-colors duration-300" 
       :class="{ 'dark:bg-gray-950 dark:text-white': isDark }">
    <component v-if="Toaster" :is="Toaster" position="top-right" expand :richColors="true" />
    
    <TheHeader />
    
    <main class="flex-grow relative">
      <div class="transition-opacity duration-500" :class="{ 'opacity-50': isTransitioning }">
        <slot />
      </div>
    </main>
    
    <TheFooter />
    
    <!-- Quick navigation button (mobile) -->
    <div class="fixed bottom-6 right-6 z-50 md:hidden">
      <button @click="scrollToTop"
              class="p-3 rounded-full bg-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        <Icon name="ph:arrow-up-bold" class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>

<style>
:root {
  --primary: #FFA91D;
  --secondary: #7775D6;
  --accent: #E935C1;
  --background: #ffffff;
  --text: #111111;
  --text-secondary: #666666;
}

.dark {
  --primary: #FFA91D;
  --secondary: #8785E8;
  --accent: #F24DD2;
  --background: #111111;
  --text: #ffffff;
  --text-secondary: #999999;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.55, 0, 0.1, 1);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s cubic-bezier(0.55, 0, 0.1, 1);
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
</style>