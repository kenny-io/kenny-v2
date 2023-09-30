<script setup lang="ts">
import { ref, onMounted } from 'vue';
import videosData from '../content/videos.json';

interface Video {
  title: string;
  description: string;
  date: string;
  url: string;
  etag: string;
  image: string;
}

const videos = ref<Video[]>([]);

// Fetch videos data from the imported JSON file
function fetchvideos() {
  videos.value = videosData.items;
}
onMounted(() => {
  fetchvideos();
});
const courseCateogries = ref([
    "Javascript",
    "Developer Relations",
    "Vue",
    "Leadership",
    "Mentorship",
    "React",
    "Nuxt",
    "Next",
    "Javascript",
    "Developer Relations",
    "Vue",
    "Leadership",
    "Mentorship",
    "React",
    "Nuxt",
    "Next"
])
</script>

<template>
    <main>
        <section class="pt-20">
            <TheWrapper>
                <div class="flex flex-col items-center md:flex-row text-[#ABABAB] px-16">
                    <div class="md:w-3/4 w-full md:mt-0 mt-6 order-2 md:order-none">
                        <h1
                            class="md:text-left text-center text-4xl md:text-6xl font-semibold tracking-tighter text-[#fff]">
                            Level up as a devrel</h1>
                        <p class="text-lg md:text-xl mt-6 text-center md:text-left">
                            I am a developer based in Lagos, Nigeria focused on creating interactive digital experiences on
                            the
                            web
                        </p>
                    </div>
                    <div class="w-1/3 md:w-2/4">
                        <img class="w-[406px]" src="../assets/images/course-hero-image.png" />
                    </div>
                </div>
            </TheWrapper>
        </section>
        <section class="mt-28 md:-mt-7">
            <div class="space-x-4 whitespace-nowrap py-8 bg-[#7856FF] transform">
                <TheSlider styles="text-7xl tracking-tighter md:text-base">
                    <span v-for="courseCategory in courseCateogries" :key="courseCategory + Math.random()" class="mr-2 space-x-2 whitespace-nowrap">
                        <span class="inline-block text-base tracking-[-0.25px] text-[#fff]">{{courseCategory}}</span>
                        <span class="inline-block"><img src="../assets/images/flak.svg"
                                alt="Divider Element in the shape of a muted star"></span>
                    </span>
                </TheSlider>
            </div>
        </section>
        <section>
            <TheWrapper>
                <div class="text-center w-full md:w-4/6 py-56 px-28 mx-auto">
                    <h2 class="text-2xl md:text-4xl text-[#F5F5F5] tracking-[-1.26px]">Over 1,300 course lessons and 200+
                        hours
                        included:</h2>
                </div>
            </TheWrapper>
        </section>
        <section class="mb-64">
            <TheWrapper>
              <div class="grid grid-cols-2 gap-4 gap-y-24">
          <TheCard
            v-for="video in videos"
            :key="video.etag"
            :article="video"
            :button-text="'Watch Now'"
            :type="'video'"
          />
        </div>
            </TheWrapper>
    </section>
</main></template>
