<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';
const query: QueryBuilderParams = {
  path: '/blog',
  where: [{ format: 'blog' }],
  limit: 2,
  sort: [{ date: -1 }],
};
const videoquery: QueryBuilderParams = {
  path: '/featured',
  where: [{ featured: true }],
  limit: 2,
  sort: [{ date: -1 }],
};
</script>
<template>
  <main>
    <section class="py-[100px]">
      <TheWrapper class="flex gap-6">
        <div>
          <div>
            <h1 class="text-8xl text-[#D4D4D4] tracking-[-3.84px]">
              <span class="block text-inherit">Hello👋</span>
              <span class="block text-inherit">I am Ekene Eze</span>
            </h1>
          </div>
          <div class="w-[600px] py-4">
            <p class="text-2xl text-[#999] leading-[150%] tracking-[-1.2px]">
              I love creating content and sharing my knowledge with the
              community in forms of blog posts, video tutorials, livestreams,
              podcasts and speaking at conferences.
            </p>
          </div>
          <div class="flex items-center mt-2">
            <p class="text-[#999] mr-2">Previously at</p>
            <div class="flex items-center">
              <div class="flex items-start mx-2">
                <img
                  src="../assets/images/plasmic.svg"
                  class="aspect-square w-[24px] h-[24px]"
                />
                <span class="w-0 opacity-0 hidden">Plasmic</span>
              </div>
              <div class="flex items-start mx-2">
                <img
                  src="../assets/images/netlify.svg"
                  class="aspect-square w-[24px] h-[24px]"
                />
                <span class="w-0 opacity-0 hidden">Netlify</span>
              </div>
              <div class="flex items-start mx-2">
                <img
                  src="../assets/images/flutterwave.svg"
                  class="aspect-square w-[24px] h-[24px]"
                />
                <span class="w-0 opacity-0 hidden">Flutterwave</span>
              </div>
            </div>
          </div>
          <div class="flex self-end my-24 items-center">
            <p class="text-[#969696] mr-4">Scroll down</p>
            <div>
              <img src="../assets/images/icon-arrow-down.svg" class="w-4 h-4" />
            </div>
          </div>
        </div>
        <div>
          <div class="transform rotate-2 relative">
            <img src="../assets/images/kenny-with-hands.png" width="600" />
            <div
              class="absolute top-2 right-5 w-[100px] h-[100px] rounded-full bg-[#A4EF28] flex justify-center items-center"
            >
              <span class="text-xl tracking-tighter text-[#373737]"
                >Play me</span
              >
            </div>
          </div>
        </div>
      </TheWrapper>
    </section>
    <section>
      <div class="w-full overflow-hidden">
        <div
          class="flex text-[140px] text-[#d4d4d4] select-none whitespace-nowrap font-suisseIntl tracking-[-7.7px] leading-tight"
        >
          <span
            >Director of Developer Relations - Content Creator - Youtuber -
            Drone Pilot</span
          >
          <span
            >Director of Developer Relations - Content Creator - Youtuber -
            Drone Pilot</span
          >
          <span
            >Director of Developer Relations - Content Creator - Youtuber -
            Drone Pilot</span
          >
        </div>
      </div>
      <div class="w-full overflow-hidden">
        <div
          class="flex text-[140px] text-[#d4d4d4] select-none whitespace-nowrap font-suisseIntl tracking-[-7.7px] leading-tight"
        >
          <span
            >Director of Developer Relations - Content Creator - Youtuber -
            Drone Pilot</span
          >
          <span
            >Director of Developer Relations - Content Creator - Youtuber -
            Drone Pilot</span
          >
          <span
            >Director of Developer Relations - Content Creator - Youtuber -
            Drone Pilot</span
          >
        </div>
      </div>
    </section>
    <section>
      <TheWrapper
        class="text-white py-[180px] text-center flex flex-col items-center"
      >
        <h3 class="text-2xl tracking-tight">COMMUNITY</h3>
        <p class="w-2/5 mt-2 tracking-tighter text-[#999]">
          I run a DevRel mentorship program where I help other intending
          developer advocates get started with DevRel. Think that’s you, check
          when the next cohort would open for application.
        </p>
        <TheButton>APPLY TO DXMENTORSHIP</TheButton>
      </TheWrapper>
    </section>
    <section>
      <TheWrapper class="mt-20 flex flex-col items-center">
        <div class="">
          <h2
            class="text-6xl tracking-[-3.2px] leading-[-3.2px] text-[#999] font-bold"
          >
            Featured Videos
          </h2>
          <p class="text-2xl leading-7 tracking-tight text-[#999] mt-2">
            Explore a couple of the Videos I have made on devrel, jamstack and
            my workspace
          </p>

          <div class="grid grid-flow-row grid-cols-2 mt-14 gap-4">
            <ContentList :query="videoquery" v-slot="{ list }">
              <TheCard
                v-for="article in list"
                :key="article._path"
                :article="article"
                :button-text="'Watch Now'"
              />
            </ContentList>
          </div>
        </div>
        <TheButton
          ><a href="https://www.youtube.com/c/EkeneEze" target="_blank"
            >Watch More</a
          ></TheButton
        >
      </TheWrapper>
    </section>
    <section>
      <TheWrapper class="mt-60 flex flex-col items-center">
        <div class="">
          <h2
            class="text-6xl tracking-[-3.2px] leading-[-3.2px] text-[#999] font-bold"
          >
            Featured Articles
          </h2>
          <p class="text-2xl leading-7 tracking-tight text-[#999] mt-2">
            Explore a couple of the Videos I have made on devrel, jamstack and
            my workspace
          </p>

          <div class="grid grid-flow-row grid-cols-2 mt-14 gap-4">
            <ContentList :query="query" v-slot="{ list }">
              <TheCard
                v-for="article in list"
                :key="article._path"
                :article="article"
                :button-text="'Read More'"
              />
            </ContentList>
          </div>
        </div>
        <TheButton><a href="/articles">See More</a></TheButton>
      </TheWrapper>
    </section>
    <section class="mb-20 mt-10">
      <TheWrapper
        class="text-white pt-[200px] pb-[150px] text-center flex flex-col items-center"
      >
        <h3 class="text-2xl tracking-tight">PODCAAAAAST</h3>
        <p class="w-2/5 mt-2 tracking-tighter text-[#999]">
          I run a DevRel mentorship program where I help other intending
          developer advocates get started with DevRel. Think that’s you, check
          when the next cohort would open for application.
        </p>
        <TheButton :rightIcon="true">
          Listen On
          <template #icon-right>
            <img src="../assets/images/logos-spotify.svg" />
          </template>
        </TheButton>
      </TheWrapper>
    </section>
  </main>
</template>
