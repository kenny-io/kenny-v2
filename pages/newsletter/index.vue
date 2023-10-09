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
  confettiNumber: 100,
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
      href: '/favicon.ico'
    }
  ]
})

const handleButton = async () => {
  navigateTo('/');
};
</script>
<template>
  <main class="h-[calc(100vh-2.5rem)] flex flex-col">
    <section class="">
      <TheWrapper class="pt-4 md:pt-16 flex flex-col items-center">
        <div class="w-80 relative">
          <!-- <img class="object-cover" src="../../public/uses/monitor-uses.png" alt="An Image of a ..." srcset=""> -->
          <video preload autoplay muted loop class="object-fill">
            <source src="/astroboy-newsletter.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="mt-6 text-center space-y-4 flex flex-col items-center">
          <h1 class="text-[#646464] text-7xl font-bold">Woohoo! 🎉</h1>
          <p class="text-[#efefefb9] text-xl w-96">
            Hi {{ newsletter_subscriber_FNAME }}, just 1 more step to go! Click
            the link in the email I just sent you to complete your subscription!
          </p>
        </div>
        <div>
          <TheButton @click="handleButton">Go Home</TheButton>
        </div>
      </TheWrapper>
    </section>
    <section class="mt-auto">
      <TheSlider styles="text-7xl tracking-tighter md:text-[140px] opacity-10">
        Developer Relations - Software Engineer - Mentor - Drone Pilot -
      </TheSlider>
    </section>
  </main>
</template>
