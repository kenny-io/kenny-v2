<template>
  <div
    class="border border-gray-200/20 rounded-r-2xl rounded-l-2xl overflow-hidden relative"
  >
    <div class="w-full h-[490px]">
      <img
        class="object-cover w-full"
        :src="article.image"
        alt="card-header-image"
      />
    </div>
    <div
      class="px-8 py-6 bg-gradient-to-t from-black/80 to-transparent backdrop-blur absolute bottom-0"
    >
      <h4 class="text-4xl font-bold tracking-tighter text-white">
        {{ article.title }}
      </h4>
      <p class="text-xl text-white/70 mt-4">
        {{ article.description }}
      </p>
      <div
        class="mt-8 w-fit text-[#AFADAD] flex items-center gap-1 hover:gap-2 hover:transition duration-200 ease-in-out cursor-pointer"
      >
        <span>Visit Course</span>
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
    </div>
  </div>
</template>
<script>
export default {
  props: {
    article: Object, // Define a prop for the article data
  },
};
</script>
