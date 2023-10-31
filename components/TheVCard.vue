<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

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
// Define props
const { video } = defineProps<{
  video: Video;
}>();

const truncateDescription = (description: string) => {
  // Split the description into words
  const words = description?.split(' ');
  // Limit the description to 50 words
  const truncatedDescription = words?.slice(0, 20).join(' ');
  return truncatedDescription;
};
</script>

<template>
  <div
    class="hover:border-gray-200/50 hover:transition-colors hover:duration-1000 ease-in-out border border-gray-200/20 rounded-r-2xl rounded-l-2xl overflow-hidden relative"
  >
    <div class="w-full h-[490px]">
      <img
        class="object-cover w-full"
        :src="
          video?.snippet?.thumbnails?.high.url ||
          'https://res.cloudinary.com/kennyy/image/upload/v1695921469/AI_Generated_Image_13_d1aaw0.jpg'
        "
        alt="card-header-image"
      />
    </div>
    <div
      class="px-8 py-6 bg-gradient-to-t from-black/80 to-transparent backdrop-blur absolute bottom-0"
    >
      <h4 class="text-2xl md:text-4xl font-bold tracking-tighter text-white">
        {{ video?.snippet.title }}
      </h4>
      <p class="text-lg md:text-xl text-white/70 mt-4">
        {{ truncateDescription(video?.snippet.description) }}
      </p>
      <a
        :href="`https://www.youtube.com/watch?v=${video.id.videoId}`"
        target="_blank"
      >
        <div
          class="mt-8 w-fit text-[#AFADAD] flex items-center gap-1 hover:gap-2 hover:transition duration-200 ease-in-out cursor-pointer"
        >
          <span>Watch Now</span>
          <span class="text-[#918F8F] h-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4l5.6-5.6Z"
              />
            </svg>
          </span>
        </div>
      </a>
    </div>
  </div>
</template>
