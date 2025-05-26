<script setup lang="ts">
// Simple toast implementation
import { ref } from 'vue';
const toastMessage = ref('');
const toastType = ref<'success' | 'error' | ''>('');
const showToast = ref(false);
function triggerToast(message: string, type: 'success' | 'error') {
  toastMessage.value = message;
  toastType.value = type;
  showToast.value = true;
  setTimeout(() => { showToast.value = false; }, 3500);
}

// Use temp store for newsletter subscriber name
const newsletter_subscriber_FNAME = ref('');

// Reactive state for form
const subscriberName = ref('');
const subscriberEmail = ref('');
const isSubmitting = ref(false);
const formRef = ref(null);

// Enhanced social links with icons for 2025
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/kenny-io',
    icon: 'ph:github-logo-duotone',
    color: 'hover:text-gray-900 dark:hover:text-white'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ekeneeze/',
    icon: 'ph:linkedin-logo-duotone',
    color: 'hover:text-[#0077b5]'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/kenny_io',
    icon: 'ph:twitter-logo-duotone',
    color: 'hover:text-[#1DA1F2]'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/c/EkeneEze',
    icon: 'ph:youtube-logo-duotone',
    color: 'hover:text-[#FF0000]'
  },
  {
    name: 'Polywork',
    url: 'https://polywork.com/kenny_io',
    icon: 'ph:globe-duotone',
    color: 'hover:text-[#6B3FFC]'
  },
];

// Quick links for footer
const quickLinks = [
  { name: 'Articles', path: '/articles' },
  { name: 'Speaking', path: '/speaking' },
  { name: 'Courses', path: '/courses' },
  { name: 'Uses', path: '/uses' },
  { name: 'Demos', path: '/demos' },
];

// Current year for copyright
const currentYear = new Date().getFullYear();

// Current time in Dubai
const dubaiTime = computed(() => {
  return new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Dubai',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
});

// Handle newsletter subscription
const handleNewsletterSubscribe = async () => {
  if (!subscriberEmail.value || !subscriberName.value) {
    triggerToast('Please fill in both name and email fields', 'error');
    return;
  }
  
  try {
    isSubmitting.value = true;
    newsletter_subscriber_FNAME.value = subscriberName.value;

    // For demo purposes, simulate a successful subscription
    // In production, this would call the actual Mailchimp API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Success flow
    triggerToast(`Thanks for subscribing, ${subscriberName.value}!`, 'success');
    subscriberName.value = '';
    subscriberEmail.value = '';
    
    // Uncomment this in production when the newsletter page is ready
    // await navigateTo({ path: '/newsletter' });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    triggerToast('Subscription failed. Please try again later.', 'error');
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <footer class="bg-gray-50 dark:bg-gray-900 pt-16 pb-8 mt-20 relative">
    <!-- Toast Notification -->
    <transition name="fade">
      <div v-if="showToast" :class="['fixed left-1/2 top-8 z-50 px-6 py-3 rounded-lg shadow-lg text-white font-semibold', toastType === 'success' ? 'bg-green-600' : 'bg-red-600']" style="transform: translateX(-50%); min-width: 220px; text-align: center;">
        {{ toastMessage }}
      </div>
    </transition>
    <!-- Newsletter Section -->
    <TheWrapper>
      
      
      <!-- Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200 dark:border-gray-800">
        <!-- About Column -->
        <div class="md:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden">
              <span class="font-bold text-lg gradient-text">KE</span>
            </div>
            <span class="font-bold text-xl text-gray-900 dark:text-white">Ekene Eze</span>
          </div>
          <p class="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
            Developer Advocate, Software Engineer, Content Creator and Keynote Speaker. Helping developers build better products and companies build better developer communities.
          </p>
          <div class="flex items-center gap-2">
            <span class="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
              <Icon name="ph:map-pin-duotone" class="w-4 h-4 text-primary" />
              Dubai, UAE
            </span>
            <span class="mx-2 text-gray-300 dark:text-gray-700">•</span>
            <span class="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
              <Icon name="ph:clock-duotone" class="w-4 h-4 text-primary" />
              {{ dubaiTime }}
            </span>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <NuxtLink :to="link.path" class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <!-- Connect -->
        <div>
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Connect</h3>
          <ul class="space-y-2">
            <li v-for="link in socialLinks" :key="link.name">
              <a 
                :href="link.url" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200 flex items-center gap-2"
              >
                <Icon :name="link.icon" class="w-5 h-5" />
                <span>{{ link.name }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Footer Bottom -->
      <div class="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400">
        <p>© {{ currentYear }} Ekene Eze. All rights reserved.</p>
        <div class="flex items-center gap-4 mt-4 md:mt-0">
          <NuxtLink to="/" class="hover:text-primary transition-colors duration-200">Home</NuxtLink>
          <span class="text-gray-300 dark:text-gray-700">•</span>
          <a href="mailto:ekeneeze3@gmail.com" class="hover:text-primary transition-colors duration-200">Contact</a>
        </div>
      </div>
    </TheWrapper>
  </footer>
</template>

<style scoped>
/* Gradient text utility, matches TheHero.vue */
.gradient-text {
  background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  text-shadow: none !important;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
