<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';
import { useVideos } from '~/composables/useVideos';
import { useHashnode } from '~/composables/useHashnode';

const { fetchVideos, featuredVideos } = useVideos();
const { fetchHashnodeArticles, featuredArticles } = useHashnode();

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico',
    },
  ],
});

onMounted(() => {
  fetchVideos();
  fetchHashnodeArticles();
});
useSeoMeta({
  title: 'Ekene Eze - Developer Advocate, Software Engineer, Content Creator',
  description:
    'Hi, I’m Ekene Eze, a Developer Advocate, Software Engineer, Content Creator and Keynote Speaker. I help developers build better products and companies build better developer communities.',
  ogTitle: 'Ekene Eze - Website',
  ogDescription:
    'Hi, I’m Ekene Eze, a Developer Advocate, Software Engineer, Content Creator and Keynote Speaker. I help developers build better products and companies build better developer communities.',
  ogImage:
    'https://res.cloudinary.com/kennyy/image/upload/v1696867303/index-og_kwzcrr.png',
  ogUrl: 'https://kenny.engineer',
  twitterTitle: 'Ekene Eze - Website',
  twitterDescription:
    'Get a glimpse into my activities as a Developer Advocate, Software Engineer, Content Creator and Keynote Speaker.',
  twitterImage:
    'https://res.cloudinary.com/kennyy/image/upload/v1696867303/index-og_kwzcrr.png',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <main>
    <TheHero />
    <section>
      <div class="space-y-6">
        <TheSlider styles="text-7xl tracking-tighter md:text-[140px]">
          Developer Relations - Software Engineer - Mentor - Drone Pilot -
        </TheSlider>
        <TheSlider
          styles="text-7xl tracking-tighter md:text-[140px]"
          slide-to="right"
        >
          Software Engineer - Content Creator - Keynote Speaker - Angel Investor
          -
        </TheSlider>
      </div>
    </section>
    <section>
      <TheWrapper class="text-white text-center flex flex-col items-center">
        <div>
          <div class="mx-auto py-8 sm:px-6 sm:py-32 lg:px-8">
            <div
              class="relative isolate overflow-hidden px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16"
            >
              <h2
                class="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                DevRel Mentorship Community
              </h2>
              <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                I run a DevRel mentorship program where I help other intending
                developer advocates get started with DevRel. Think that’s you?
                Check when the next cohort would open for application.
              </p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <a href="https://www.dxmentorship.com" target="_blank">
                  <TheButton>APPLY TO DXMENTORSHIP</TheButton></a
                >
              </div>
              <svg
                viewBox="0 0 1024 1024"
                class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                aria-hidden="true"
              >
                <circle
                  cx="512"
                  cy="512"
                  r="512"
                  fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                  fill-opacity="0.7"
                />
                <defs>
                  <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                    <stop stop-color="#7775D6" />
                    <stop offset="1" stop-color="#E935C1" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <!-- <h3 class="text-xl md:text-2xl tracking-tight">COMMUNITY</h3>
        <p
          class="w-4/5 md:w-2/5 mt-2 text-lg md:text-2xl text-[#999] leading-[150%] tracking-[-1.2px]"
        >
          I run a DevRel mentorship program where I help other intending
          developer advocates get started with DevRel. Think that’s you? Check
          when the next cohort would open for application.
        </p>
        <a href="https://www.dxmentorship.com" target="_blank">
          <TheButton>APPLY TO DXMENTORSHIP</TheButton></a
        > -->
      </TheWrapper>
    </section>
    <section>
      <TheWrapper class="flex flex-col items-center">
        <div class="">
          <h2
            class="text-4xl md:text-6xl tracking-[-3.2px] leading-[-3.2px] text-[#999] font-bold"
          >
            Featured Videos
          </h2>
          <p
            class="text-lg md:text-2xl leading-7 tracking-tight text-[#999] mt-2"
          >
            Explore video tutorials, courses and workshops I have created mostly
            on frontend technologies like Next.js, React, Vue, and Svelte. You
            will also find videos on developer relations and productivity tools.
          </p>
          <div
            class="grid grid-flow-row grid-cols-1 md:grid-cols-2 mt-8 md:mt-14 gap-4"
          >
            <TheVCard
              v-for="video in featuredVideos"
              :key="video.id"
              :video="video"
            />
          </div>
        </div>

        <a href="https://www.youtube.com/c/EkeneEze" target="_blank"
          ><TheButton> Watch More </TheButton></a
        >
      </TheWrapper>
    </section>
    <section>
      <TheWrapper class="mt-32 flex flex-col items-center">
        <div class="">
          <h2
            class="text-4xl md:text-6xl tracking-[-3.2px] leading-[-3.2px] text-[#999] font-bold"
          >
            Featured Articles
          </h2>
          <p
            class="text-lg md:text-2xl leading-7 tracking-tight text-[#999] mt-2"
          >
            Take a moment to explore a selection of articles I have written,
            focusing on various topics such as DevRel, Jamstack, Frontend
            technologies and productivity.
          </p>

          <div
            class="grid grid-flow-row grid-cols-1 md:grid-cols-2 mt-8 md:mt-14 gap-4"
          >
            <!-- <ContentList :query="aquery" v-slot="{ list }"> -->
            <TheCard
              v-for="article in featuredArticles"
              :key="article.title"
              :article="article"
              :button-text="'Read More'"
            />
            <!-- </ContentList> -->
          </div>
        </div>
        <a href="/articles">
          <TheButton>See More</TheButton>
        </a>
      </TheWrapper>
    </section>
    <section class="mb-32 md:mb-[220px] mt-10">
      <TheWrapper class="text-white text-center flex flex-col items-center"
        ><div class="py-16 sm:py-24">
          <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div
              class="relative isolate overflow-hidden px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32"
            >
              <h2
                class="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                PODCAAAAAST.
              </h2>
              <p
                class="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300"
              >
                This is a work in progress! I'm starting a podcast where I talk
                to people in the all spheres of life about their journey and how
                they got to where they are today. If you want to be notified
                when it launches, subscribe to my newsletter below.
              </p>
              <div
                class="hidden md:flex self-end mt-8 text-center justify-center items-center animate-bounce"
              >
                <div>
                  <img
                    src="../assets/images/icon-arrow-down.svg"
                    class="w-4 h-4"
                  />
                </div>
              </div>

              <svg
                viewBox="0 0 1024 1024"
                class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
                aria-hidden="true"
              >
                <circle
                  cx="512"
                  cy="512"
                  r="512"
                  fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                  fill-opacity="0.7"
                />
                <defs>
                  <radialGradient
                    id="759c1415-0410-454c-8f7c-9a820de03641"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(512 512) rotate(90) scale(512)"
                  >
                    <stop stop-color="#FFA91D" />
                    <stop offset=".8" stop-color="#FFA91D" stop-opacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <!-- <h3 class="text-xl md:text-2xl tracking-tight">PODCAAAAAST</h3>
        <p class="w-4/5 md:w-2/5 mt-2 tracking-tighter text-[#999]">
          This is a work in progress! I'm starting a podcast where I talk to
          people in the all spheres of life about their journey and how they got
          to where they are today. If you want to be notified when it launches,
          subscribe to my newsletter below.
        </p>
        <TheButton :rightIcon="true">
          Listen On
          <template #icon-right>
            <img src="../assets/images/logos-spotify.svg" />
          </template>
        </TheButton> -->
      </TheWrapper>
    </section>
  </main>
</template>
