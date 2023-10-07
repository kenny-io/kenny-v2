<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';
const aquery: QueryBuilderParams = {
  path: '/featured',
  where: [{ type: 'article' }],
  limit: 2,
  sort: [{ date: -1 }],
};
const vquery: QueryBuilderParams = {
  path: '/featured',
  where: [{ type: 'video' }],
  limit: 2,
  sort: [{ date: -1 }],
};

  head: {
    title: "Ekene Eze | Developer Advocate, Software Engineer and Content Creator",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Hi, I’m Ekene Eze, a Developer Advocate, Software Engineer, Content Creator and Keynote Speaker. I help developers build better products and companies build better developer communities.."
      },
      {
        hid: "og:image",
        property: "og:image",
        content:
          "https://res.cloudinary.com/kennyy/image/upload/v1696601563/Ekene_Eze_kswpgu.png"
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      }
    ]
  }

// useSeoMeta({
//   title: 'Ekene Eze - Developer Advocate, Software Engineer, Content Creator',
//   description:
//     'Hi, I’m Ekene Eze, a Developer Advocate, Software Engineer, Content Creator and Keynote Speaker. I help developers build better products and companies build better developer communities.',
//   ogTitle: 'Ekene Eze - Website',
//   ogDescription:
//     'Hi, I’m Ekene Eze, a Developer Advocate, Software Engineer, Content Creator and Keynote Speaker. I help developers build better products and companies build better developer communities.',
//   ogImage:
//     'https://res.cloudinary.com/kennyy/image/upload/v1696601563/Ekene_Eze_kswpgu.png',
//   ogUrl: 'https://kenny.engineer',
//   twitterTitle: 'Ekene Eze - Website',
//   twitterDescription:
//     'Get a glimpse into my activities as a Developer Advocate, Software Engineer, Content Creator and Keynote Speaker.',
//   twitterImage:
//     'https://res.cloudinary.com/kennyy/image/upload/v1696602243/kennyio_1_epxtwy.jpg',
//   twitterCard: 'summary',
// });
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
      <TheWrapper
        class="text-white pt-40 pb-32 md:py-[180px] text-center flex flex-col items-center"
      >
        <h3 class="text-xl md:text-2xl tracking-tight">COMMUNITY</h3>
        <p
          class="w-4/5 md:w-2/5 mt-2 text-lg md:text-2xl text-[#999] leading-[150%] tracking-[-1.2px]"
        >
          I run a DevRel mentorship program where I help other intending
          developer advocates get started with DevRel. Think that’s you? Check
          when the next cohort would open for application.
        </p>
        <a href="https://www.dxmentorship.com">
          <TheButton>APPLY TO DXMENTORSHIP</TheButton></a
        >
      </TheWrapper>
    </section>
    <section>
      <TheWrapper class="mt-32 flex flex-col items-center">
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
            <ContentList :query="vquery" v-slot="{ list }">
              <TheCard
                v-for="article in list"
                :key="article._path"
                :article="article"
                :button-text="'Watch Now'"
              />
            </ContentList>
          </div>
        </div>

        <a href="https://www.youtube.com/c/EkeneEze" target="_blank"
          ><TheButton> Watch More </TheButton></a
        >
      </TheWrapper>
    </section>
    <section>
      <TheWrapper class="mt-60 flex flex-col items-center">
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
            <ContentList :query="aquery" v-slot="{ list }">
              <TheCard
                v-for="article in list"
                :key="article._path"
                :article="article"
                :button-text="'Read More'"
              />
            </ContentList>
          </div>
        </div>
        <a href="/articles">
          <TheButton>See More</TheButton>
        </a>
      </TheWrapper>
    </section>
    <section class="mb-32 md:mb-[220px] mt-10">
      <TheWrapper
        class="text-white pt-[200px] pb-[150px] text-center flex flex-col items-center"
      >
        <h3 class="text-xl md:text-2xl tracking-tight">PODCAAAAAST</h3>
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
        </TheButton>
      </TheWrapper>
    </section>
  </main>
</template>
