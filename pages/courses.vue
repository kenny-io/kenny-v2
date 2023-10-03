<script setup lang="ts">
import { ref, onMounted } from 'vue';
const courseCateogries = ref([
  'Javascript',
  'Typescript',
  'Vue',
  'Web3',
  'Fintech',
  'Web',
  'DevRel',
  'React',
  'Jamstack',
  'AI',
  'Next.js',
  'Netlify',
  'Gridsome',
  'Vercel',
  'Tailwind',
  'Serverless',
  'Nuxt.js',
  'GraphQL',
  'Node.js',
  'Svelte',
  'Supabase',
  'Fauna',
]);

interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
}

const videos = ref<Video[]>([]);
// Fetch videos data from YouTube channel
async function fetchVideos() {
  const cacheKey = 'cached_videos';
  const timestampKey = 'videos_timestamp';

  const currentTimestamp = new Date().getTime();
  const cachedTimestamp = Number(localStorage.getItem(timestampKey));
  const twoDaysInMilliseconds = 48 * 60 * 60 * 1000;

  // Check if the cached data is still valid based on the timestamp
  if (currentTimestamp - cachedTimestamp < twoDaysInMilliseconds) {
    const cachedVideos = localStorage.getItem(cacheKey);
    if (cachedVideos) {
      videos.value = JSON.parse(cachedVideos);
      return;
    }
  }

  // If not in cache or cache is stale, fetch from API
  try {
    const response = await fetch('/api/youtube');
    const data = await response.json();
    videos.value = data.data.items;

    // Cache the fetched videos and timestamp in localStorage
    localStorage.setItem(cacheKey, JSON.stringify(videos.value));
    localStorage.setItem(timestampKey, currentTimestamp.toString());
  } catch (error) {
    console.error('Error fetching videos:', error);
  }
}

onMounted(() => {
  fetchVideos();
});
</script>

<template>
  <main>
    <section class="pt-20">
      <TheWrapper>
        <div
          class="flex flex-col items-center md:flex-row text-[#ABABAB] px-16"
        >
          <div class="md:w-3/4 w-full md:mt-0 mt-6 order-2 md:order-none">
            <h1
              class="md:text-left text-center text-4xl md:text-6xl font-semibold tracking-tighter text-[#fff]"
            >
              Level up with me
            </h1>
            <p class="text-lg md:text-xl mt-6 text-center md:text-left">
              Like most developers, I am always learning. As a result, I'm
              equally enthusiastic about sharing my knowledge. <br /><br />
              I've authored a couple of articles, produced some comprehensive
              courses, and regularly host workshops and tutorials on my YouTube
              Channel. You can explore my treasure trove of educational content
              right here.
            </p>
          </div>
          <div class="w-1/3 md:w-2/4">
            <img
              class="w-[406px]"
              src="../assets/images/course-hero-image.png"
            />
          </div>
        </div>
      </TheWrapper>
    </section>
    <section class="mt-28 md:-mt-7">
      <div class="space-x-4 whitespace-nowrap py-8 bg-[#7856FF] transform">
        <TheSlider styles="text-7xl tracking-tighter md:text-base">
          <span
            v-for="courseCategory in courseCateogries"
            :key="courseCategory + Math.random()"
            class="mr-2 space-x-2 whitespace-nowrap"
          >
            <span
              class="inline-block text-base tracking-[-0.25px] text-[#fff]"
              >{{ courseCategory }}</span
            >
            <span class="inline-block"
              ><img
                src="../assets/images/flak.svg"
                alt="Divider Element in the shape of a muted star"
            /></span>
          </span>
        </TheSlider>
      </div>
    </section>

    <section>
      <TheWrapper>
        <div class="text-center w-full md:w-4/6 py-56 px-28 mx-auto">
          <h2 class="text-2xl md:text-4xl text-[#F5F5F5] tracking-[-1.26px]">
            Over 1,300 course lessons and 200+ hours included:
          </h2>
        </div>
      </TheWrapper>
    </section>

    <section class="mb-64">
      <TheWrapper>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-10 md:gap-y-24">
          <TheCard
            v-for="video in videos"
            :key="video.id.videoId"
            :article="video.snippet"
            :button-text="'Watch Now'"
            :type="'video'"
            :videoURL="`https://www.youtube.com/watch?v=${video.id.videoId}`"
          />
        </div>
      </TheWrapper>
    </section>
  </main>
</template>
