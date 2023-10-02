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
<TheHero />
    <section>
      <div class="space-y-6">
        <TheSlider styles="text-7xl tracking-tighter md:text-[140px]">
          Developer Relations - Software Engineer - Mentor - Drone Pilot - 
        </TheSlider>
        <TheSlider styles="text-7xl tracking-tighter md:text-[140px]" slide-to="right">
          Software Engineer - Content Creator - Keynote Speaker - Angel Investor -
        </TheSlider>
      </div>
    </section>
    <section>
      <TheWrapper class="text-white pt-40 pb-32 md:py-[180px] text-center flex flex-col items-center">
        <h3 class="text-xl md:text-2xl tracking-tight">COMMUNITY</h3>
        <p class="w-4/5 md:w-2/5 mt-2 text-lg md:text-2xl text-[#999] leading-[150%] tracking-[-1.2px]">
         I run a DevRel mentorship program where I help other intending
            developer advocates get started with DevRel. Think that’s you, check
            when the next cohort would open for application.
        </p>
        <TheButton>APPLY TO DXMENTORSHIP</TheButton>
      </TheWrapper>
    </section>
    <section>
      <TheWrapper class="mt-32 flex flex-col items-center">
        <div class="">
          <h2 class="text-4xl md:text-6xl tracking-[-3.2px] leading-[-3.2px] text-[#999] font-bold">Featured Videos</h2>
          <p class="text-lg md:text-2xl leading-7 tracking-tight text-[#999] mt-2">
              Explore video tutorials, courses and workshops I have created mostly
              on frontend technologies like Next.js, React, Vue, and Svelte. You
              will also find videos on developer relations and productivity tools.
          </p>
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
          <p class="text-lg md:text-2xl leading-7 tracking-tight text-[#999] mt-2">
              Take a moment to explore a selection of articles I have written,
              focusing on various topics such as DevRel, Jamstack, Frontend
              technologies and productivity.
          </p>

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
            This is a work in progress, but I am working on a podcast where I talk
            to people in the all spheres of life about their journey and how they
            got to where they are today. If you want to be notified when it
            launches, subscribe to my newsletter below.
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
<style scoped>
/* Add styles for the glowing light effect */
.glowing-light {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 150px;
  /* Adjust the size as needed */
  height: 150px;
  /* Adjust the size as needed */
  background: radial-gradient(circle, #1ed760 10%, transparent 70%);
  /* Use your desired color */
  opacity: 0.8;
  /* Adjust the opacity as needed */
  z-index: -1;
  filter: blur(20px);
  /* Add blur for the glowing effect */
}</style>

<!-- <div class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-[#1ed760] via-[transparent] to-[transparent] opacity-80 filter blur-20 transform -rotate-45"></div> -->