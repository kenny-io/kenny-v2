<script setup lang="ts">
import { useSplitTextAnimation } from '~/composables/useSplitAnimation';
import { useMotion } from '@vueuse/motion';
import { ref, type Ref } from 'vue';

// Define roles for the typewriter effect
const roles = ref([
  'Developer Advocate',
  'Software Engineer',
  'Content Creator',
  'Published Author',
  'Community Builder',
  'Open Sourcerer',
  'Keynote Speaker',
  'Angel Investor',
  'Mentor',
  'Drone Pilot',

]);

const currentRoleIndex = ref(0);
const displayedRole = ref('');
const isTyping = ref(true);
const typingSpeed = 100; // ms per character
const deletingSpeed = 50; // ms per character
const pauseDelay = 1500; // ms to pause at full text

// Previous companies with enhanced data
const previousCompanies = ref([
  {
    name: 'Netlify',
    logo: '../assets/images/netlify.svg',
    url: 'https://www.netlify.com',
    role: 'Senior Developer Experience Engineer'
  },
  {
    name: 'Flutterwave',
    logo: '../assets/images/flutterwave.svg',
    url: 'https://flutterwave.com',
    role: 'Developer Advocate'
  },
  {
    name: 'Plasmic',
    logo: '../assets/images/plasmic.svg',
    url: 'https://www.plasmic.app',
    role: 'Developer Relations'
  }
]);

// Refs for motion animations
const heroRef = ref(null);
const imageRef: Ref<HTMLElement | null> = ref(null);
const contentRef = ref(null);
const statsRef = ref(null);

// Stats to showcase experience
const stats = ref([
  { value: '7+', label: 'Years Experience' },
  { value: '20+', label: 'Conference Talks' },
  { value: '100+', label: 'Articles Published' },
  { value: '800+', label: 'YouTube Subscribers' }
]);

// Typewriter effect
const typewriterEffect = () => {
  const currentRole = roles.value[currentRoleIndex.value];
  
  if (isTyping.value) {
    if (displayedRole.value.length < currentRole.length) {
      displayedRole.value = currentRole.substring(0, displayedRole.value.length + 1);
      setTimeout(typewriterEffect, typingSpeed);
    } else {
      isTyping.value = false;
      setTimeout(typewriterEffect, pauseDelay);
    }
  } else {
    if (displayedRole.value.length > 0) {
      displayedRole.value = displayedRole.value.substring(0, displayedRole.value.length - 1);
      setTimeout(typewriterEffect, deletingSpeed);
    } else {
      isTyping.value = true;
      currentRoleIndex.value = (currentRoleIndex.value + 1) % roles.value.length;
      setTimeout(typewriterEffect, typingSpeed);
    }
  }
};

onMounted(() => {
  // Initialize split text animation
  useSplitTextAnimation('#hero-title');
  
  // Start typewriter effect
  typewriterEffect();
  
  // Initialize 3D tilt effect on image
  const imageElement = imageRef.value;
  if (imageElement) {
    imageElement.addEventListener('mousemove', handleTilt);
    imageElement.addEventListener('mouseleave', resetTilt);
  }
});

onUnmounted(() => {
  const imageElement = imageRef.value;
  if (imageElement) {
    imageElement.removeEventListener('mousemove', handleTilt);
    imageElement.removeEventListener('mouseleave', resetTilt);
  }
});

// 3D tilt effect handlers
const handleTilt = (e: { currentTarget: any; clientX: number; clientY: number; }) => {
  const element = e.currentTarget;
  const elementRect = element.getBoundingClientRect();
  const x = e.clientX - elementRect.left;
  const y = e.clientY - elementRect.top;
  
  const middleX = elementRect.width / 2;
  const middleY = elementRect.height / 2;
  
  const offsetX = ((x - middleX) / middleX) * 15;
  const offsetY = ((y - middleY) / middleY) * 15;
  
  element.style.transform = `perspective(1000px) rotateY(${offsetX}deg) rotateX(${-offsetY}deg) scale3d(1.05, 1.05, 1.05)`;
};

const resetTilt = (e: { currentTarget: any; }) => {
  const element = e.currentTarget;
  element.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
  element.style.transition = 'transform 0.5s ease';
};

// Apply motion animations
const heroMotion = useMotion(heroRef, {
  initial: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 800, ease: 'easeOut' },
  },
});

const imageMotion = useMotion(imageRef, {
  initial: { opacity: 0, scale: 0.9, x: 20 },
  enter: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 800, delay: 200, ease: 'easeOut' },
  },
});

const contentMotion = useMotion(contentRef, {
  initial: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 800, delay: 400, ease: 'easeOut' },
  },
});

const statsMotion = useMotion(statsRef, {
  initial: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 800, delay: 600, ease: 'easeOut' },
  },
});
</script>

<template>
  <section class="relative py-16 md:py-24 lg:py-32 overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute top-0 right-0 -z-10 transform translate-x-1/3 -translate-y-1/4">
        <div class="w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl dark:bg-primary/5"></div>
      </div>
      <div class="absolute bottom-0 left-0 -z-10 transform -translate-x-1/3 translate-y-1/4">
        <div class="w-[500px] h-[500px] rounded-full bg-secondary/10 blur-3xl dark:bg-secondary/5"></div>
      </div>
    </div>
    
    <TheWrapper>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <!-- Left content column -->
        <div ref="heroRef" class="order-2 lg:order-1 lg:col-span-7">
          <div class="space-y-6">
            <!-- Hero title with animation -->
            <div>
              <!-- Greeting -->
              <div class="block text-gray-300 text-2xl mb-4">
                Hey there! <span class="inline-block animate-wave origin-bottom-right">👋</span>
              </div>
              <!-- Name as h1 -->
              <h1 class="block text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
                I'm <span class="text-primary-300">Ekene Eze</span>
              </h1>
              <!-- Social links row -->
              <div class="flex flex-row items-center gap-4">
                <a href="https://twitter.com/kenny_io" target="_blank" rel="noopener noreferrer" class="p-2 rounded-full text-gray-500 hover:text-primary transition-colors duration-300" aria-label="Twitter">
                  <Icon name="ph:twitter-logo-duotone" class="w-7 h-7" />
                </a>
                <a href="https://github.com/kenny-io" target="_blank" rel="noopener noreferrer" class="p-2 rounded-full text-gray-500 hover:text-primary transition-colors duration-300" aria-label="GitHub">
                  <Icon name="ph:github-logo-duotone" class="w-7 h-7" />
                </a>
                <a href="https://www.linkedin.com/in/ekeneeze/" target="_blank" rel="noopener noreferrer" class="p-2 rounded-full text-gray-500 hover:text-primary transition-colors duration-300" aria-label="LinkedIn">
                  <Icon name="ph:linkedin-logo-duotone" class="w-7 h-7" />
                </a>
              </div>
              <!-- Short bio -->
              <p class="text-lg text-gray-300 mt-6 mb-4 max-w-2xl">
                A Senior Software Engineer and Developer Advocate with 7+ years of Professional Experience. Amongst other things, Kenny is a 
              </p>
              <!-- Typewriter effect -->
              <div class="min-h-[110px] md:min-h-[130px] lg:min-h-[150px] mb-10 flex items-end">
                <p class="text-4xl md:text-5xl lg:text-6xl font-extrabold typewriter-emphasis">
                  <span class="typewriter gradient-text">{{ displayedRole }}</span><span class="cursor text-primary-400">|</span>
                </p>
              </div>
              <!-- Stats section moved here with extra spacing -->
              <div ref="statsRef" class="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800">
                <dl class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                  <div v-for="stat in stats" :key="stat.label" class="text-center">
                    <dt class="text-3xl font-bold text-white drop-shadow">{{ stat.value }}</dt>
                    <dd class="mt-1 text-sm text-gray-300">{{ stat.label }}</dd>
                  </div>
                </dl>
              </div>
            </div>
            
            <!-- Bio content -->
            <!-- <div ref="contentRef" class="prose prose-lg dark:prose-invert max-w-none">
              <p class="text-gray-600 dark:text-gray-300">
                Kenny for short. I'm a Software Engineer and Developer Advocate with
                over 8 years experience working in DevRel across different
                functions. Recently as a Senior Developer Experience Engineer at
                <a href="https://www.netlify.com" class="text-primary hover:text-primary/80 font-medium no-underline border-b border-primary/30 hover:border-primary transition-colors duration-300">Netlify</a>
                and leading DevRel teams at various companies.
              </p>
              <p class="text-gray-600 dark:text-gray-300">
                On the side, I consult on DevRel for companies, angel invest, and
                mentor advocates through my
                <a href="https://www.dxmentorship.com" class="text-primary hover:text-primary/80 font-medium no-underline border-b border-primary/30 hover:border-primary transition-colors duration-300">@dxmentorship program</a>.
              </p>
            </div> -->
            
            <!-- Previous companies -->
            <!-- <div class="space-y-3">
              <p class="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium">Previously at:</p>
              <div class="flex flex-wrap gap-4">
                <a v-for="company in previousCompanies" :key="company.name" 
                   :href="company.url" target="_blank" rel="noopener"
                   class="group flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300">
                  <img :src="company.logo" :alt="company.name" class="w-5 h-5" />
                  <span class="text-sm text-gray-700 dark:text-gray-300">{{ company.name }}</span>
                  <span class="hidden group-hover:inline-block text-xs text-gray-500 dark:text-gray-400 ml-1">({{ company.role }})</span>
                </a>
              </div>
            </div> -->
            
            <!-- CTA buttons -->
            <!-- <div class="flex flex-wrap gap-4 pt-2">
              <a href="mailto:ekeneeze3@gmail.com" target="_blank" rel="noopener"
                 class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:bg-primary/90 transform hover:-translate-y-0.5 transition-all duration-300">
                <Icon name="ph:envelope-duotone" class="w-5 h-5" />
                Contact Kenny
              </a>
              <a href="https://www.linkedin.com/in/ekeneeze/" target="_blank" rel="noopener"
                 class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-medium border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transform hover:-translate-y-0.5 transition-all duration-300">
                <Icon name="ph:linkedin-logo-duotone" class="w-5 h-5 text-[#0077b5]" />
                LinkedIn
              </a>
            </div> -->
            
            
          </div>
        </div>
        
        <!-- Right image column -->
        <div ref="imageRef" class="order-1 lg:order-2 relative lg:col-span-5">
          <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 p-2 shadow-2xl">
            <div class="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
            <div class="relative rounded-xl overflow-hidden shadow-inner">
              <img
                src="../assets/images/kenny-with-hands.png"
                alt="Ekene Eze (Kenny)"
                class="w-full h-auto object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
              
              <!-- Floating badges -->
              <div class="absolute top-4 right-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur px-3 py-1.5 rounded-full text-sm font-medium shadow-lg animate-float-slow">
                <span class="flex items-center gap-1.5">
                  <Icon name="ph:microphone-stage-duotone" class="w-4 h-4 text-primary" />
                  Keynote Speaker
                </span>
              </div>
              
              <div class="absolute bottom-4 left-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur px-3 py-1.5 rounded-full text-sm font-medium shadow-lg animate-float">
                <span class="flex items-center gap-1.5">
                  <Icon name="ph:code-duotone" class="w-4 h-4 text-secondary" />
                  Developer Advocate
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <!-- <div class="hidden md:flex justify-center mt-16 animate-bounce">
        <button @click="$scrollTo('#about', { offset: -100 })" aria-label="Scroll down" class="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
          <Icon name="ph:arrow-down" class="w-5 h-5" />
        </button>
      </div> -->
    </TheWrapper>
  </section>
</template>

<style scoped>
.text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.hero-title {
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,0.7);
}

.typewriter {
  color: #fff;
  font-weight: 600;
  text-shadow: 0 2px 8px rgba(0,0,0,0.7);
}

.cursor {
  color: #38bdf8;
  font-weight: bold;
  display: inline-block;
  width: 2px;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.animate-wave {
  animation: wave 2.5s infinite;
}

@keyframes wave {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-slow {
  animation: float 8s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.bg-grid-pattern {
  background-image: 
    linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
  background-size: 20px 20px;
}

.dark .bg-grid-pattern {
  background-image: 
    linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
}

.typewriter-emphasis {
  letter-spacing: -0.01em;
  /* No text-shadow for clean gradient */
}

.gradient-text {
  background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  /* Remove any text-shadow for clean gradient */
  text-shadow: none !important;
}
</style>
