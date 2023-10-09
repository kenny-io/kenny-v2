<script setup>
const { newsletter_subscriber_FNAME } = useTempStore();
import JSConfetti from 'js-confetti';
definePageMeta({
  layout: false,
});

let confetti;
const confettiConfig = {
  emojis: ['🌈', '⚡️', '💥', '✨', '💫'],
  emojiSize: 30,
  confettiNumber: 40,
};

onMounted(() => {
  confetti = new JSConfetti();
  confetti.addConfetti(confettiConfig);
});
useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico',
    },
  ],
});

const handleButton = async () => {
  navigateTo('/');
};
</script>
<template>
  <main class="h-[calc(100vh-2.5rem)] flex flex-col">
    <section class="">
      <TheWrapper class="pt-4 md:pt-16 flex flex-col items-center">
        <div class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-green-600 w-28 h-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div class="mt-6 text-center space-y-4">
          <h1 class="text-[#646464] text-7xl font-bold">
            Subscription successful!
          </h1>
        </div>
        <TheButton @click="handleButton">Keep browsing</TheButton>
      </TheWrapper>
    </section>
    <section class="mt-auto">
      <TheSlider styles="text-7xl tracking-tighter md:text-[140px] opacity-10">
        Developer Relations - Software Engineer - Mentor - Drone Pilot -
      </TheSlider>
    </section>
  </main>
</template>
