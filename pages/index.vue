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
    <section class=" pb-20 py-24 md:py-[100px]">
      <TheWrapper class="flex flex-col md:flex-row gap-6">
        <div>
          <div>
            <h1 class="text-4xl md:text-8xl text-[#D4D4D4] tracking-[-1.50px] md:tracking-[-3.84px]">
              <span class="block text-inherit">Hello👋</span>
              <span class="block text-inherit">I am Ekene Eze</span>
            </h1>
          </div>
          <div class="w-11/12 md:w-[600px] py-4">
            <p class="text-lg md:text-2xl text-[#999] leading-[150%] tracking-[-1.2px]">
              kenny for short. I'm a software engineer and developer advocate
              currently based in Dubai. I love bringing insights, tips, and
              aha-moments! to developers the the resources I create as I work
              with different companies to improve the experiences of thier
              developers.
              <br />
              BTS, I angel invest, play video games, and fly drones.
            </p>
          </div>
          <div class="flex items-center mt-1 md:mt-2">
            <p class="text-[#999] text-xs md:text-base mr-2">Previously at</p>
            <div class="flex items-center space-x-1">
              <div class="flex items-start">
                <img src="../assets/images/plasmic.svg" class="aspect-square w-5 h-5 md:w-[24px] md:h-[24px]" />
                <span class="text-white w-0 opacity-0 hidden">Plasmic</span>
              </div>
              <div class="flex items-start">
                <img src="../assets/images/netlify.svg" class="aspect-square w-5 h-5 md:w-[24px] md:h-[24px]" />
                <span class="w-0 opacity-0 hidden">Netlify</span>
              </div>
              <div class="flex items-start">
                <img src="../assets/images/flutterwave.svg" class="aspect-square w-5 h-5 md:w-[24px] md:h-[24px]" />
                <span class="w-0 opacity-0 hidden">Flutterwave</span>
              </div>
            </div>
          </div>
          <div class="hidden md:flex self-end my-24 items-center animate-bounce">
            <p class="text-[#969696] mr-4 ">Scroll down</p>
            <div>
              <img src="../assets/images/icon-arrow-down.svg" class="w-4 h-4" />
            </div>
          </div>
        </div>
        <div class="z-10 mt-5 md:mt-0">
          <div class="transform md:rotate-2 relative">
            <img src="../assets/images/kenny-with-hands.png" width="600" />
            <div
              class="absolute top-2 right-5 w-[100px] h-[100px] rounded-full bg-[#A4EF28] hidden md:flex justify-center items-center">
              <span class="text-xl tracking-tighter text-[#373737]">Play me</span>
            </div>
          </div>
        </div>
      </TheWrapper>
    </section>
    <section>
      <div class="space-y-6">
        <TheSlider styles="text-7xl tracking-tighter md:text-[140px]">
          Director of Developer Relations - Content Creator - Youtuber - Drone Pilot -
        </TheSlider>
        <TheSlider styles="text-7xl tracking-tighter md:text-[140px]" slide-to="right">
          Director of Developer Relations - Content Creator - Youtuber - Drone Pilot -
        </TheSlider>
      </div>
    </section>
    <section>
      <TheWrapper class="text-white pt-40 pb-32 md:py-[180px] text-center flex flex-col items-center">
        <h3 class="text-xl md:text-2xl tracking-tight">COMMUNITY</h3>
        <p class="w-4/5 md:w-2/5 mt-2 tracking-tight text-[#999]">I run a DevRel mentorship program where I help other
          intending developer advocates get started with
          DevRel. Think that’s you, check when the next cohort would open for application.
        </p>
        <TheButton>APPLY TO DXMENTORSHIP</TheButton>
      </TheWrapper>
    </section>
    <section>
      <TheWrapper class="mt-32 flex flex-col items-center">
        <div class="">
          <h2 class="text-4xl md:text-6xl tracking-[-3.2px] leading-[-3.2px] text-[#999] font-bold">Featured Videos</h2>
          <p class="text-lg md:text-2xl leading-7 tracking-tight text-[#999] mt-2">Explore a couple of the Videos I have
            made on
            devrel, jamstack and my workspace</p>
          <div class="grid grid-flow-row grid-cols-1 md:grid-cols-2 mt-8 md:mt-14 gap-4">
            <ContentList :query="videoquery" v-slot="{ list }">
              <TheCard v-for="article in list" :key="article._path" :article="article" :button-text="'Watch Now'" />
            </ContentList>
          </div>
        </div>
        <TheButton><a href="https://www.youtube.com/c/EkeneEze" target="_blank">Watch More</a></TheButton>
      </TheWrapper>
    </section>
    <section>
      <TheWrapper class="mt-60 flex flex-col items-center">
        <div class="">
          <h2 class="text-4xl md:text-6xl tracking-[-3.2px] leading-[-3.2px] text-[#999] font-bold">Featured Articles</h2>
          <p class="text-lg md:text-2xl leading-7 tracking-tight text-[#999] mt-2">Explore a couple of the Videos I have
            made
            on
            devrel, jamstack and my workspace</p>

          <div class="grid grid-flow-row grid-cols-1 md:grid-cols-2 mt-8 md:mt-14 gap-4">
            <ContentList :query="query" v-slot="{ list }">
              <TheCard v-for="article in list" :key="article._path" :article="article" :button-text="'Read More'" />
            </ContentList>
          </div>
        </div>
        <TheButton><a href="/articles">See More</a></TheButton>
      </TheWrapper>
    </section>
    <section class="mb-32 md:mb-[220px] mt-10">
      <TheWrapper class="text-white pt-[200px] pb-[150px] text-center flex flex-col items-center">
        <h3 class="text-xl md:text-2xl tracking-tight">PODCAAAAAST</h3>
        <p class="w-4/5 md:w-2/5 mt-2  tracking-tighter text-[#999]">
          I run a DevRel mentorship program where I help other intending developer advocates get started with
          DevRel. Think that’s you, check when the next cohort would open for application.
        </p>
        <TheButton :rightIcon="true">
          Listen On
          <template #icon-right>
            <img src="../assets/images/logos-spotify.svg">
          </template>
        </TheButton>
      </TheWrapper>
    </section>
  </main>
</template>