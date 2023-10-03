<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

// Define props
const { article, buttonText, videoURL } = defineProps<{
  article: ParsedContent;
  buttonText: String;
  type?: String;
  tag?: String;
  videoURL?: String;
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
          article?.coverImage?.url ||
          article?.image ||
          article?.thumbnails?.high.url ||
          'https://res.cloudinary.com/kennyy/image/upload/v1695921469/AI_Generated_Image_13_d1aaw0.jpg'
        "
        alt="card-header-image"
      />
    </div>
    <div
      class="px-8 py-6 bg-gradient-to-t from-black/80 to-transparent backdrop-blur absolute bottom-0"
    >
      <h4 class="text-2xl md:text-4xl font-bold tracking-tighter text-white">
        {{ article?.title }}
      </h4>
      <p class="text-lg md:text-xl text-white/70 mt-4">
        {{ truncateDescription(article?.description) }}
      </p>
      <a :href="article?.url || videoURL">
        <div
          class="mt-8 w-fit text-[#AFADAD] flex items-center gap-1 hover:gap-2 hover:transition duration-200 ease-in-out cursor-pointer"
        >
          <span>{{ buttonText }}</span>
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
    <div
      v-if="tag"
      class="px-4 py-1 bg-[#39FF41] text-sm text-black uppercase rounded-2xl absolute top-7 left-8"
    >
      <p>{{ tag }}</p>
    </div>
  </div>
</template>
