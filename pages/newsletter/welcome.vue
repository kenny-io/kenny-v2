<script setup>
import JSConfetti from 'js-confetti';
definePageMeta({
    layout: false
})

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
      href: '/favicon.ico'
    }
  ]
})

const handleButton = async () => {
    navigateTo('/');
}

</script>
<template>
    <main class="h-[calc(100vh-2.5rem)] flex flex-col">
        <section class="">
            <TheWrapper class="pt-4 md:pt-16 flex flex-col items-center">
                <div class="w-80 relative pt-10">
                    <video preload autoplay muted loop class="object-fill rounded-lg">
                        <source src="/flyingboy-newsletter.mp4" type="video/mp4" />
                    </video>
                </div>
                <div class="mt-6 text-center space-y-4">
                    <h1 class="text-[#646464] text-7xl font-bold tracking-tight">Subscription Successful!</h1>
                </div>
                <div>
                    <TheButton @click="handleButton">Keep browsing</TheButton>
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